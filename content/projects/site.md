---
title: this site
description: This site itself was a project.
tags:
  - project
  - web
  - documentation
---

Never a huge fan of web development, however, I liked the way this turned out.

Each page is a markdown file and the graph shows related pages and topics.

I'm also intrigued by the viability of self-hosting it as a means to learn and [decentralize](https://blog.cloudflare.com/18-november-2025-outage/).

## Goals:

- **Extensible** - praticality, make adding projects convenient
- **Maintainable** - focus on the projects, not maintaining a flashy site
- **Minimal** - minimize dependancies, keep things simple enough to debug, practical enough to stay useful

## Technical breakdown:

- [Quartz](https://quartz.jzhao.xyz/) - static site generator that turns markdown files into pages, then makes them pretty
- [Github](https://github.com/) - asset storage and version control (for now)
- [Cloudflare Pages](https://pages.cloudflare.com/) - fast, free hosting with in-built analytics

## Alternatives explored:
- **Jekyll** - dated, found myself fighting the framework for UI customization
- **CMS platforms** - often not free, not customizable, not as fun
- **From scratch** - more boilerplate, tedious to maintain

[[source code]](https://github.com/Anthony-Andrews/anthony-andrews.github.io) feel free to PR changes.