#!/usr/bin/env node
/**
 * Post-build cleanup: removes unreferenced media files from public/.
 * Run after `npx quartz build`.
 * Pass --dry-run to preview without deleting.
 */
import { readdir, readFile, unlink } from 'fs/promises'
import { join, extname, resolve, dirname, relative } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const PUBLIC = join(ROOT, 'public')
const DRY_RUN = process.argv.includes('--dry-run')

// File extensions considered user media (candidates for cleanup)
const MEDIA_EXTENSIONS = new Set([
  '.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif',
  '.tiff', '.bmp', '.svg', '.mp4', '.mov', '.avi', '.webm',
])

// public/ subdirs that belong to quartz itself — never touch these
const SKIP_DIRS = new Set(['static'])

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = join(dir, e.name)
    if (e.isDirectory()) yield* walk(p)
    else yield p
  }
}

function extractUrls(html) {
  const urls = new Set()
  for (const m of html.matchAll(/\b(?:src|href|content|poster)=["']([^"']+)["']/g)) {
    urls.add(m[1].split('?')[0].split('#')[0])
  }
  // srcset entries: "url1 1x, url2 2x"
  for (const m of html.matchAll(/\bsrcset=["']([^"']+)["']/g)) {
    for (const part of m[1].split(',')) {
      urls.add(part.trim().split(/\s+/)[0])
    }
  }
  return urls
}

async function main() {
  if (DRY_RUN) console.log('[dry-run] No files will be deleted.\n')

  // ── 1. Scan every HTML file and collect referenced asset paths ──
  const referenced = new Set()
  for await (const fp of walk(PUBLIC)) {
    if (!fp.endsWith('.html')) continue
    const html = await readFile(fp, 'utf8')
    for (const url of extractUrls(html)) {
      if (url.startsWith('http') || url.startsWith('data:') || url.startsWith('//')) continue
      const abs = url.startsWith('/')
        ? resolve(join(PUBLIC, url))
        : resolve(join(dirname(fp), url))
      referenced.add(abs)
    }
  }

  // ── 2. Delete any media file not in the referenced set ──
  let deleted = 0
  let kept = 0
  for await (const fp of walk(PUBLIC)) {
    const ext = extname(fp).toLowerCase()
    if (!MEDIA_EXTENSIONS.has(ext)) continue
    const rel = relative(PUBLIC, fp)
    if (SKIP_DIRS.has(rel.split(/[/\\]/)[0])) continue

    if (!referenced.has(resolve(fp))) {
      if (DRY_RUN) {
        console.log(`  would delete: ${rel}`)
      } else {
        await unlink(fp)
        console.log(`  deleted: ${rel}`)
      }
      deleted++
    } else {
      kept++
    }
  }

  const prefix = DRY_RUN ? '[dry-run] ' : ''
  console.log(`\n${prefix}${deleted} unreferenced files removed, ${kept} kept`)
}

main().catch(e => { console.error(e); process.exit(1) })
