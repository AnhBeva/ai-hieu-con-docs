# AI Hiểu Con Docs

Knowledge portal VitePress cho sản phẩm **AI Hiểu Con**: giải pháp AI đứng phía sau hỗ trợ bố mẹ hiểu con, đồng hành học tập tốt hơn, cải thiện giao tiếp gia đình và giảm học thêm vì lo âu.

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://127.0.0.1:5173/vi/`.

## Build

```bash
npm run build
```

## GitHub Pages

Site được deploy bằng GitHub Actions trong `.github/workflows/deploy-pages.yml`.

Workflow build với:

```bash
DOCS_BASE=/ai-hieu-con-docs/ npm run build
```

Public URL dự kiến:

```text
https://anhbeva.github.io/ai-hieu-con-docs/vi/
```

