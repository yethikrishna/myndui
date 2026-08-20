div align="center">

<a href="https://myndlabs.tech">
  <img src="https://raw.githubusercontent.com/YethikrishnaR/myndui/main/apps/docs/public/og-image.png" alt="Myndui — Where Interfaces Become Intentional" width="100%" />
</a>

<h1>Myndui</h1>

<p><strong>A UI collection for modern interfaces — owned entirely by <a href="https://myndlabs.tech">Mynd Labs</a>.</strong></p>

<p>Built with React, TypeScript, Tailwind CSS v4, and Motion — distributed as a shadcn registry, so components are copied straight into your project and you own every line.</p>

<p><a href="https://github.com/YethikrishnaR/myndui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT" /></a>
<a href="https://github.com/YethikrishnaR/myndui/stargazers"><img src="https://img.shields.io/github/stars/YethikrishnaR/myndui?style=flat&logo=github&color=yellow" alt="GitHub stars" /></a>
<a href="https://github.com/YethikrishnaR/myndui/commits/main"><img src="https://img.shields.io/github/last-commit/YethikrishnaR/myndui?logo=git&logoColor=white" alt="Last commit" /></a>
</p>

<p>
  <a href="https://myndui.design"><strong>Documentation</strong></a> ·
  <a href="https://myndui.design/docs/components"><strong>Components</strong></a> ·
  <a href="https://myndui.design/docs/installation"><strong>Installation</strong></a> ·
  <a href="./CONTRIBUTING.md"><strong>Contributing</strong></a>
</p>

</div>

---

## The Story Behind Myndui

Every great company begins with a single conviction. Myndui was born from the belief that interfaces are not decorations — they are intentions made visible. When a user touches your product, they are not interacting with pixels; they are entering a contract of trust.

We built Myndui at <strong><a href="https://myndlabs.tech">Mynd Labs</a></strong> because modern interfaces deserve modern ethics: transparency, ownership, and motion that serves purpose, not vanity. This is not a library borrowed from someone else. It is a brand rebuilt from the core outward.

**Owned by Yethikrishna R. Built under Mynd Labs. Every line belongs to you once you install it.**

---

## ✨ What You Get

- **You own the code.** Components are installed into your codebase via the shadcn CLI — not hidden behind a versioned dependency.
- **Motion-first.** Every component ships with polished, performant animation out of the box.
- **shadcn-native.** Same install flow as shadcn/ui. Just add the `@myndui` registry.
- **Tailwind v4 tokens.** Themed with CSS variables — light and dark modes work with zero extra config.
- **Type-safe.** Full TypeScript types for every component and its props.

---

## 📦 Installation

Myndui is distributed as a shadcn registry. Components are copied straight into your project — you own the source.

**1. Create or set up a project:**

```bash
pnpm dlx shadcn@latest init
```

**2. Add the `@myndui` registry** to the `registries` field of your `components.json`:

```json
{
  "registries": {
    "@myndui": "https://myndui.design/r/{name}.json"
  }
}
```

**3. Add any component by name:**

```bash
pnpm dlx shadcn@latest add @myndui/magic-button
```

This copies the component into `components/myndui/` and merges the Myndui theme tokens and component styles into your global stylesheet automatically.

> Prefer zero configuration? Skip step 2 and install with the full registry URL: `pnpm dlx shadcn@latest add https://myndui.design/r/magic-button.json`

See the full [installation guide](https://myndui.design/docs/installation) for typography and dark-mode setup.

---

## 🚀 Quick Start

Once a component is installed, import and use it:

```tsx
import { MagicButton } from "@/components/myndui/magic-button";

export function Demo() {
  return <MagicButton size="lg">Get Started</MagicButton>;
}
```

---

## 🧩 Components

A growing collection of animated components, organized by category — buttons, text, overlays, navigation, layout, effects, glass, backgrounds, visualizations, inputs, and more.

**[Browse all components →](https://myndui.design/docs/components)**

---

## 🛠️ Local Development

Myndui is a [pnpm](https://pnpm.io) + [Turborepo](https://turborepo.com) monorepo. Requires **Node >= 20.19.0** and **pnpm 10.x**.

```bash
git clone https://github.com/YethikrishnaR/myndui.git
cd myndui

pnpm install
pnpm dev
pnpm build:registry
pnpm test
pnpm check
pnpm check:fix
```

---

## 📁 Project Structure

```
myndui/
├── apps/
│   ├── docs/          # Documentation site (Next.js + Fumadocs)
│   └── storybook/     # Component showcase (Storybook)
├── packages/
│   └── components/    # @myndui/components — the component library
└── registry.json      # shadcn registry definition (source of truth)
```

---

## 🤝 Contributing

Contributions are welcome — new components, bug fixes, docs, and ideas. Read the [Contributing Guide](./CONTRIBUTING.md) and please follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## 🌐 Brand & Ownership

- **Product:** Myndui
- **Parent Company:** [Mynd Labs](https://myndlabs.tech)
- **Owner:** Yethikrishna R
- **Contact:** [yethikrishnarcvn7a@gmail.com](mailto:yethikrishnarcvn7a@gmail.com)
- **Instagram:** [@yethikrishnar](http://instagram.com/yethikrishnar/)
- **Discord:** [Myndui Community](https://discord.gg/BdCE7BU36n)
- **Forms:** [FormSubmit](https://formsubmit.co/) — submissions go to `yethikrishnarcvn7a@gmail.com`

---

## 📄 License

[MIT](./LICENSE) © Yethikrishna R — Mynd Labs

---

## Star History

<a href="https://www.star-history.com/?repos=YethikrishnaR%2Fmyndui&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=YethikrishnaR/myndui&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=YethikrishnaR/myndui&type=date&theme=light&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=YethikrishnaR/myndui&type=date&theme=dark&legend=top-left" />
 </picture>
</a>

---

<div align="center">

Built by <a href="https://github.com/YethikrishnaR">Yethikrishna R</a> and the team at <a href="https://myndlabs.tech">Mynd Labs</a>.

If Myndui helps you ship, consider <a href="https://github.com/YethikrishnaR/myndui">starring the repo</a> ⭐ ·
<a href="https://myndui.design">myndui.design</a>

</div>
