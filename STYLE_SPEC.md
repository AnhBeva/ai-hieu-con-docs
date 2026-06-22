# Style Spec

## Design System

- Framework: VitePress `1.6.4`.
- Layout: header cố định 64px, sidebar trái khoảng 296px, content markdown ở giữa, outline phải tự sinh từ heading cấp 2 và 3.
- Max width: `--vp-layout-max-width: 1376px`.
- Border radius: card 12px, inline code 6px, blockquote 8px phía phải.
- Motion: hover card nâng nhẹ `translateY(-1px/-2px)`, link đổi màu trong 0.2s.

## Colors

Light mode:

| Token | Value | Role |
| --- | --- | --- |
| `--vp-c-bg` | `#FAF9F5` | Nền trang |
| `--vp-c-bg-alt` | `#F4F3EE` | Sidebar, inline code |
| `--vp-c-bg-elv` | `#FFFFFF` | Card, code block |
| `--vp-c-text-1` | `#1A1A1A` | Heading, text chính |
| `--vp-c-text-2` | `#4A4A4A` | Text phụ, nav |
| `--vp-c-text-3` | `#757575` | Muted text |
| `--vp-c-brand-1` | `#D95C41` | Link, accent, Mermaid primary |
| `--vp-c-brand-2` | `#C14E36` | Link hover |
| `--vp-c-brand-3` | `#A8412B` | Brand active |
| `--vp-c-divider` | `rgba(0, 0, 0, 0.08)` | Divider |

Dark mode:

| Token | Value |
| --- | --- |
| `--vp-c-bg` | `#1A1A1A` |
| `--vp-c-bg-alt` | `#141414` |
| `--vp-c-bg-elv` | `#242424` |
| `--vp-c-text-1` | `#E5E5E5` |
| `--vp-c-text-2` | `#B3B3B3` |
| `--vp-c-text-3` | `#808080` |
| `--vp-c-brand-1` | `#E07A64` |
| `--vp-c-brand-2` | `#D95C41` |
| `--vp-c-brand-3` | `#C14E36` |

## Typography

- Body: `Inter`, 16px, line-height 1.75 trong `.vp-doc`.
- H1: `Newsreader`, 3.5rem, weight 400, line-height 1.1, letter-spacing `-0.02em`.
- H2: `Newsreader`, 2rem, weight 400, line-height 1.2, border-bottom divider.
- H3: Inter, 1.25rem, weight 600.
- Code: `JetBrains Mono`, inline code 0.88em, block code theo VitePress theme.

## Components

- Header: logo SVG 28px, site title Newsreader 1.45rem, nav links Inter 500.
- CTA nav: external nav link `target="_blank"` styled as black pill in light mode and light pill in dark mode.
- Sidebar: background `#F4F3EE`, active item rounded 8px, text 0.9rem.
- Card grid: `.card-grid` auto-fit columns, gap 16px; `.card` border, radius 12px, hover border accent.
- Index list: `.index-list` removes default markers and uses accent dot.
- Blockquote: accent left border 4px, brand-soft background.
- Mermaid: transparent frame, centered SVG, clickable fullscreen viewer with zoom controls.

## Content Rules

- Put each route in a folder with `index.md` to preserve clean URLs.
- Use H1 once per page.
- Use H2 for outline navigation and H3 for local subsections.
- Use `card-grid` only for navigation cards, not every section.
- Keep code fences tagged with language names.
