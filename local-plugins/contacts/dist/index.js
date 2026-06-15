// node_modules/preact/dist/preact.mjs
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  return l.vnode && l.vnode(l2), l2;
}

// src/components/Contacts.tsx
var contactsCss = `
.contacts {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

button.contacts-toggle {
  background-color: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  padding: 0;
  color: var(--dark);
  display: flex;
  align-items: center;
}

button.contacts-toggle h2 {
  font-size: 1rem;
  display: inline-block;
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
}

.contacts .fold {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
  opacity: 0.8;
}

.contacts.collapsed .fold {
  transform: rotateZ(-90deg);
}

.contacts-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
  max-height: 500px;
  overflow: hidden;
  transition: max-height 0.3s ease, margin-top 0.3s ease;
}

.contacts.collapsed .contacts-list {
  max-height: 0;
  margin-top: 0;
}

.contacts-list li {
  margin: 0.25rem 0;
}

.contacts-list li a {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--dark);
  opacity: 0.75;
  text-decoration: none;
  font-size: 0.9rem;
}

.contacts-list li a:hover {
  opacity: 1;
  color: var(--secondary);
}

.contacts-list li a svg {
  flex-shrink: 0;
}
`;

var contactsScript = ``;

var Contacts = () => {
  const Component = (_props) => {
    return /* @__PURE__ */ u2("div", { class: "contacts", children: [
      /* @__PURE__ */ u2("button", { type: "button", class: "contacts-toggle", "aria-expanded": "true", children:
        /* @__PURE__ */ u2("h2", { children: "Contact" })
      }),
      /* @__PURE__ */ u2("ul", { class: "contacts-list", children: [
        /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href: "mailto:anthony.r.andrews@gmail.com", children: [
          /* @__PURE__ */ u2("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u2("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
            /* @__PURE__ */ u2("path", { d: "M2 8l10 6 10-6" })
          ]}),
          "Email"
        ]})}),
        /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href: "https://github.com/Anthony-Andrews", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ u2("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "16", height: "16", fill: "currentColor", children:
            /* @__PURE__ */ u2("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
          }),
          "GitHub"
        ]})}),
        /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href: "https://www.linkedin.com/in/anthony-r-andrews/", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ u2("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "16", height: "16", fill: "currentColor", children:
            /* @__PURE__ */ u2("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
          }),
          "LinkedIn"
        ]})}),
      ] })
    ] });
  };
  Component.css = contactsCss;
  Component.afterDOMLoaded = contactsScript;
  return Component;
};
var Contacts_default = Contacts;

export { Contacts_default as Contacts };
//# sourceMappingURL=index.js.map
