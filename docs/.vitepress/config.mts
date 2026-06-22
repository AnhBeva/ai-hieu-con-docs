/// <reference types="node" />
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const docsBase = process.env.DOCS_BASE || "/";
const brandLogo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%238A7A4F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5c2.5-4.4 5-6.6 7.5-6.6s5 2.2 7.5 6.6" /><path d="M7.3 12.2c1.6 2.4 3.2 3.6 4.7 3.6s3.1-1.2 4.7-3.6" /><path d="M9.1 10.8c.7-.8 1.6-1.2 2.9-1.2s2.2.4 2.9 1.2" /><path d="M12 15.8v3" /></svg>';

const nav = [
  { text: "Tổng quan", link: "/vi/", activeMatch: "^/vi/$" },
  { text: "Nghiên cứu", link: "/vi/research/", activeMatch: "^/vi/research/" },
  { text: "PRD", link: "/vi/prd/", activeMatch: "^/vi/prd/" },
  { text: "Curriculum", link: "/vi/curriculum/", activeMatch: "^/vi/curriculum/" },
  { text: "Kiến trúc", link: "/vi/architecture/", activeMatch: "^/vi/architecture/" },
  { text: "AI/Data", link: "/vi/ai-data/", activeMatch: "^/vi/ai-data/" },
  { text: "Session Memory", link: "/vi/session-memory/", activeMatch: "^/vi/session-memory/" },
  { text: "MVP", link: "/vi/mvp/", activeMatch: "^/vi/mvp/" },
  { text: "Nghiệm thu", link: "/vi/acceptance/", activeMatch: "^/vi/acceptance/" }
];

const sidebarItems = [
  { text: "Tổng quan giải pháp", link: "/vi/" },
  { text: "Nghiên cứu insight phụ huynh", link: "/vi/research/" },
  { text: "PRD sản phẩm", link: "/vi/prd/" },
  { text: "Giáo trình, chuẩn môn học và knowledge graph", link: "/vi/curriculum/" },
  { text: "Kiến trúc giải pháp", link: "/vi/architecture/" },
  { text: "AI, guardrails và dữ liệu", link: "/vi/ai-data/" },
  { text: "Hành trình học, phản hồi và voice context", link: "/vi/session-memory/" },
  { text: "MVP và roadmap", link: "/vi/mvp/" },
  { text: "Bộ tiêu chí nghiệm thu", link: "/vi/acceptance/" }
];

const themeConfig = {
  logo: brandLogo,
  siteTitle: "AI Hiểu Con",
  nav,
  search: {
    provider: "local"
  },
  sidebar: {
    "/vi/": [
      {
        text: "Knowledge Portal",
        items: sidebarItems
      }
    ]
  },
  outline: { level: [2, 3], label: "Trong trang này" },
  docFooter: { prev: "Trang trước", next: "Trang sau" },
  lastUpdated: { text: "Cập nhật lần cuối" },
  returnToTopLabel: "Trở lên trên cùng",
  sidebarMenuLabel: "Menu",
  darkModeSwitchLabel: "Giao diện",
  lightModeSwitchTitle: "Chuyển sang chế độ sáng",
  darkModeSwitchTitle: "Chuyển sang chế độ tối"
};

export default withMermaid(
  defineConfig({
    title: "AI Hiểu Con",
    description: "Knowledge portal cho sản phẩm AI giúp bố mẹ hiểu con và đồng hành học tập tốt hơn.",
    base: docsBase,
    cleanUrls: true,
    lastUpdated: true,
    appearance: true,
    ignoreDeadLinks: false,
    srcExclude: ["README.md"],
    head: [
      ["link", { rel: "icon", type: "image/svg+xml", href: brandLogo }],
      ["meta", { name: "theme-color", content: "#FAF8F1" }]
    ],
    markdown: {
      theme: { light: "github-light", dark: "github-dark" },
      lineNumbers: false
    },
    locales: {
      root: {
        label: "Tiếng Việt",
        lang: "vi-VN",
        link: "/vi/",
        themeConfig
      }
    },
    themeConfig,
    mermaid: {
      theme: "base",
      themeVariables: {
        primaryColor: "#8A7A4F",
        primaryTextColor: "#ffffff",
        primaryBorderColor: "#6E603E",
        lineColor: "#7B776B",
        secondaryColor: "#EFE8D7",
        tertiaryColor: "#FAF8F1",
        fontFamily: "Inter, sans-serif"
      }
    }
  })
);
