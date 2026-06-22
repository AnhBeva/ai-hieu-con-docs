# PRD Sản Phẩm

## Tầm Nhìn

AI Hiểu Con là ứng dụng giúp bố mẹ hiểu con sâu hơn, tự tin hơn khi đồng hành học tập và giáo dục con ở nhà, từ đó giảm phụ thuộc vào học thêm không cần thiết.

Sản phẩm không thay bố mẹ, không thay giáo viên, không biến trẻ thành người dùng chính của AI. Sản phẩm nâng năng lực bố mẹ để bố mẹ biết quan sát, giao tiếp, hỗ trợ, dừng đúng lúc và hỏi đúng người.

## Mục Tiêu Người Dùng

1. Bố mẹ hiểu con đang vướng ở đâu và vì sao có thể vướng.
2. Bố mẹ biết tối nay nên làm gì trong 10-20 phút.
3. Bố mẹ biết nói thế nào để con hợp tác và tự tin hơn.
4. Bố mẹ cảm thấy mình có thể hỗ trợ con mà không cần trở thành giáo viên chuyên nghiệp.
5. Trẻ cảm thấy bố mẹ là người đồng hành, không phải người kiểm soát.
6. Gia đình giảm học thêm vì lo âu, chỉ học thêm khi có lý do rõ.

## Không Phải Mục Tiêu

- Không tạo chatbot tự do cho trẻ nhỏ trong MVP.
- Không học trước chương trình lớp 1.
- Không chẩn đoán bệnh lý, rối loạn học tập, ADHD, tự kỷ hoặc vấn đề tâm lý.
- Không biến app thành máy giao bài tập.
- Không hứa loại bỏ hoàn toàn học thêm trong mọi trường hợp.

## Personas Chính

| Persona | Nỗi lo | Khoảnh khắc thành công |
|---|---|---|
| Mẹ có con chuẩn bị vào lớp 1 | Sợ con không theo kịp nếu không học trước | Biết tuần này chỉ cần luyện nề nếp, chú ý, kể lại và tự phục vụ |
| Bố mẹ lớp 1-2 bất lực với bài tập | Con đọc chậm, viết sai, toán lẫn, giờ học căng thẳng | Biết hỏi câu nào để con tự tìm ra |
| Phụ huynh bận rộn lớp 3-5 | Con thiếu tự giác, bố mẹ mệt, không biết theo dõi | Giao một việc rõ và kiểm tra bằng câu hỏi đúng |
| Phụ huynh muốn giảm học thêm | Sợ bỏ lớp thì con tụt | Thử kế hoạch tại nhà 14 ngày trước khi đăng ký |

## Jobs To Be Done

### Khi con làm sai hoặc không chịu học

Bố mẹ muốn biết con đang vướng ở đâu và nên phản ứng thế nào để không biến giờ học thành cuộc chiến.

Yêu cầu:

- Chụp bài hoặc nhập tình huống.
- Phân tích lỗi có khả năng.
- Gợi ý cách hỏi, chia nhỏ, dừng đúng lúc.
- Cảnh báo nếu vấn đề thiên về cảm xúc hơn kiến thức.

### Khi bố mẹ có ít thời gian

Bố mẹ muốn biết hôm nay chỉ cần làm gì trong 10-20 phút.

Yêu cầu:

- Kế hoạch một màn hình.
- Một mục tiêu chính.
- Một hoạt động.
- Một câu nói mẫu.
- Một tiêu chí dừng.

### Khi sắp cho con học thêm

Bố mẹ muốn biết học thêm có thật sự cần không.

Yêu cầu:

- Chế độ “có cần học thêm không”.
- Kế hoạch thử tại nhà 14 ngày.
- Báo cáo sau thử nghiệm.
- Khuyến nghị hỏi giáo viên/chuyên gia nếu cần.

## Module Chức Năng

### Onboarding hiểu con

Thu thập: tuổi/lớp, giai đoạn, nỗi lo, kỹ năng khó, thói quen học, học thêm hiện tại, phản ứng khi gặp bài khó, mức tự tin của bố mẹ.

Đầu ra:

- Chân dung học tập ban đầu.
- 3 điểm mạnh có thể khai thác.
- 1-2 điểm cần quan sát.
- Kế hoạch tuần đầu.

Acceptance criteria:

- Hoàn thành dưới 7 phút.
- Không hỏi thuật ngữ giáo dục khó.
- Sau onboarding có hành động đầu tiên ngay.

### Bản đồ hiểu con

Theo dõi: kiến thức/kỹ năng, tự điều chỉnh, ngôn ngữ, đọc/viết/toán, tự học, cảm xúc khi học, kiểu phản hồi phù hợp.

Acceptance criteria:

- Bố mẹ đọc trong 2 phút hiểu con đang mạnh/yếu ở đâu.
- Nhận định có bằng chứng đi kèm.
- Không so sánh với trẻ khác, không dùng nhãn bệnh lý.

### Chụp bài, hiểu lỗi, gợi ý cách kèm

Luồng:

1. Bố mẹ chụp bài.
2. AI nhận diện yêu cầu.
3. AI phân tích lỗi hoặc điểm vướng.
4. App trả lời bằng ngôn ngữ phụ huynh: bài kiểm tra kỹ năng gì, con có thể vướng ở đâu, nên hỏi câu gì, khi nào dừng.

Acceptance criteria:

- Bố mẹ hiểu cách kèm trong dưới 60 giây.
- Có ít nhất 2 câu hỏi gợi mở.
- Không đưa đáp án trực tiếp cho trẻ ở bước đầu.

### Kế hoạch 15 phút mỗi ngày

Cấu trúc:

- Mục tiêu hôm nay.
- Hoạt động 10-20 phút.
- Câu nói mở đầu.
- Cách hỗ trợ khi con bí.
- Dấu hiệu cần quan sát.
- Tiêu chí dừng.

Acceptance criteria:

- Không dài quá 1 màn hình chính.
- Có phương án “hôm nay con mệt” và “hôm nay bố/mẹ bận”.
- Không tạo cảm giác thêm một lớp học nữa ở nhà.

### Huấn luyện giao tiếp cho bố mẹ

Tình huống cần hỗ trợ:

- Con khóc khi học.
- Con nói “con không làm được”.
- Con làm sai nhiều lần.
- Con học đối phó.
- Bố/mẹ lỡ cáu hoặc mắng con.

Acceptance criteria:

- Có câu nên nói, câu nên tránh, hành động tiếp theo.
- Giọng tự nhiên với phụ huynh Việt Nam.
- Gợi ý ngắn, dùng được ngay.

### Chế độ giảm học thêm

Luồng:

1. Bố mẹ nhập nỗi lo.
2. App hỏi thêm dữ liệu tối thiểu.
3. App phân loại: chưa cần học thêm, thử kế hoạch tại nhà, hỏi giáo viên, hỗ trợ chuyên sâu, hoặc học thêm có mục tiêu.
4. App tạo kế hoạch 14 ngày.
5. Sau 14 ngày, app báo cáo tiến bộ và khuyến nghị.

Acceptance criteria:

- Không phán xét quyết định học thêm.
- Có bằng chứng trước kết luận.
- Có lộ trình thay thế học thêm trong trường hợp nhẹ/vừa.

## Non-Functional Requirements

| Nhóm | Yêu cầu |
|---|---|
| An toàn trẻ em | Không dán nhãn, không chẩn đoán, không chat tự do với trẻ trong MVP |
| Quyền riêng tư | Phụ huynh xem/sửa/xóa dữ liệu, không chia sẻ mặc định |
| Explainability | Mọi nhận định quan trọng có bằng chứng và mức chắc chắn |
| Trust | Giọng điệu khiêm tốn, không phán xét, quyền quyết định thuộc về bố mẹ |
| Latency | Phản hồi kèm bài nên đủ nhanh cho phiên học buổi tối; ưu tiên bản ngắn trước, phân tích sâu sau nếu cần |
| Accessibility | Nội dung dễ đọc trên mobile, câu chữ ngắn, không phụ thuộc màu để hiểu cảnh báo |

