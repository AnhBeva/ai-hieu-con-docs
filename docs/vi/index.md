---
layout: home

hero:
  name: AI Hiểu Con
  text: Knowledge portal cho giải pháp AI đồng hành cùng bố mẹ
  tagline: AI đứng phía sau để bố mẹ hiểu con, giao tiếp tốt hơn, hỗ trợ học tập đúng nền tảng và giảm học thêm vì lo âu.
  actions:
    - theme: brand
      text: Đọc PRD sản phẩm
      link: /vi/prd/
    - theme: alt
      text: Xem curriculum engine
      link: /vi/curriculum/

features:
  - title: Bố mẹ là người đồng hành
    details: Sản phẩm không thay bố mẹ hay giáo viên. AI hỗ trợ phía sau để bố mẹ bình tĩnh, thấu hiểu và tự tin hơn trước mặt con.
  - title: Giảm học thêm vì lo âu
    details: Không chống học thêm cực đoan. Mục tiêu là giúp gia đình có bằng chứng, kế hoạch và năng lực để không đăng ký lớp chỉ vì sợ con tụt lại.
  - title: Hiểu đúng chuẩn học của con
    details: App biết con học lớp mấy, theo bộ sách/giáo trình nào, đang ở chủ đề nào và cần luyện kỹ năng gì theo tiến trình phù hợp.
  - title: Càng dùng càng hiểu hành trình
    details: Mỗi buổi học để lại mục tiêu, bài đã làm, lỗi, cảm xúc, câu nói bố mẹ đã thử và phản hồi để gợi ý buổi sau tốt hơn.
  - title: Triển khai được
    details: Bộ tài liệu bao gồm insight, PRD, kiến trúc AI/dữ liệu, MVP, roadmap, acceptance criteria và guardrail an toàn trẻ em.
---

# Tổng Quan Giải Pháp

AI Hiểu Con là ứng dụng dành cho phụ huynh Việt Nam có con tiền tiểu học và tiểu học. Sản phẩm giúp bố mẹ hiểu con đang học và cảm thấy thế nào, biết hỗ trợ con trong 10-20 phút mỗi ngày, cải thiện giao tiếp trong gia đình, và ra quyết định bình tĩnh hơn trước việc học thêm.

> AI là người hỗ trợ thầm lặng phía sau. Với con, bố mẹ là người đồng hành bình tĩnh, thấu hiểu và đáng tin cậy.

## Vấn Đề Cốt Lõi

Phụ huynh không thiếu tình yêu hay trách nhiệm. Họ thiếu một hệ thống giúp trả lời các câu hỏi rất đời thường:

- Con đang vướng kiến thức, thiếu nền tảng, mệt, sợ sai hay thiếu tập trung?
- Tối nay bố/mẹ nên làm gì trong 15 phút?
- Nên nói với con thế nào khi con khóc, né học hoặc làm sai nhiều lần?
- Có thật sự cần học thêm không, hay gia đình có thể thử kế hoạch tại nhà trước?
- Làm sao nhìn thấy tiến bộ của con mà không chỉ dựa vào điểm số?
- Bài này thuộc chuẩn nào, chủ đề nào, con thiếu prerequisite nào?
- Hôm nay nên tiếp nối buổi trước ra sao để con không phải bắt đầu lại từ đầu?

## Luận Điểm Sản Phẩm

| Thực tế thị trường | Quyết định sản phẩm |
|---|---|
| App học tập thường bắt đầu từ môn học và bài tập | AI Hiểu Con bắt đầu từ đứa trẻ, bố mẹ và bối cảnh gia đình |
| Học thêm mua sự yên tâm và trách nhiệm tiến độ | App phải tạo vòng lặp đo nhẹ, làm ngắn, ghi nhận, điều chỉnh |
| Phụ huynh sợ mình dạy sai hoặc làm con áp lực | App huấn luyện bố mẹ bằng câu nói, cách hỏi, cách chia nhỏ |
| Trẻ nhỏ cần an toàn cảm xúc trước khi học sâu | App ưu tiên điều tiết cảm xúc khi có tín hiệu quá tải |
| Phụ huynh không biết bài thuộc chuẩn nào | App cần map lớp, giáo trình, chủ đề, knowledge node và prerequisite |
| Mỗi buổi học ở nhà thường rời rạc | App cần memory engine để nối tiếp mục tiêu, lỗi, phản hồi và tiến bộ |

## Vòng Lặp Cốt Lõi

```mermaid
flowchart LR
    A["Bố mẹ nhập tình huống hoặc chụp bài"] --> B["AI phân tích phía sau"]
    B --> H["Định vị chuẩn môn học / knowledge node"]
    H --> C["Gợi ý ngắn cho bố mẹ"]
    C --> D["Bố mẹ đồng hành 10-20 phút"]
    D --> E["Ghi nhận phản ứng / voice / phản hồi sau buổi"]
    E --> F["Cập nhật bản đồ hiểu con và session memory"]
    F --> G["Kế hoạch ngày/tuần tiếp theo"]
    G --> D
```

## Cách Đọc Portal

- Đọc [Nghiên cứu insight](/vi/research/) để hiểu vì sao phụ huynh chi tiền cho học thêm và chưa tự tin ở đâu.
- Đọc [PRD sản phẩm](/vi/prd/) để nắm yêu cầu chức năng, hành trình người dùng và acceptance criteria.
- Đọc [Giáo trình, chuẩn môn học và knowledge graph](/vi/curriculum/) để hiểu cách app định vị bài học, chuẩn đầu ra và prerequisite.
- Đọc [Kiến trúc giải pháp](/vi/architecture/) để triển khai hệ thống sản phẩm, AI, dữ liệu và module backend/frontend.
- Đọc [AI, guardrails và dữ liệu](/vi/ai-data/) để hiểu cách giữ AI ở hậu trường, an toàn, minh bạch.
- Đọc [Hành trình học, phản hồi và voice context](/vi/session-memory/) để thiết kế memory engine và ghi âm buổi học opt-in.
- Đọc [MVP và roadmap](/vi/mvp/) để biết thứ tự triển khai.
- Đọc [Nghiệm thu](/vi/acceptance/) để dùng checklist kiểm thử và tiêu chí thành công.
