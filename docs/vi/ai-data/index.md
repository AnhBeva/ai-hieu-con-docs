# AI, Guardrails Và Dữ Liệu

## Vai Trò AI

AI là hệ thống phân tích và huấn luyện phía sau. AI không nên xuất hiện như “người dạy chính” của trẻ trong MVP.

AI cần làm:

- Phân tích bài tập/bài làm.
- Định vị bài học theo lớp, chương trình, bộ sách/giáo trình, chủ đề và knowledge node.
- Tìm lỗi hoặc điểm vướng có khả năng.
- Gợi ý cách bố mẹ hỏi/gợi mở.
- Cá nhân hóa kế hoạch theo trẻ, bố mẹ và bối cảnh gia đình.
- Nhớ hành trình từng buổi để gợi ý buổi sau tốt hơn.
- Chuyển voice/audio opt-in thành transcript, tóm tắt và quan sát có cấu trúc.
- Nhận diện tín hiệu quá tải/căng thẳng.
- Viết lại lời khuyên thành ngôn ngữ phụ huynh dùng được.
- Tóm tắt tiến bộ theo tuần.

AI không được làm:

- Chẩn đoán bệnh lý.
- Dán nhãn trẻ.
- Kết luận chắc chắn khi thiếu dữ liệu.
- Khuyến khích học thêm tràn lan.
- Đưa đáp án trực tiếp cho trẻ như đường tắt.
- Tạo áp lực so sánh.

## Output Contract

Mỗi phản hồi AI cho phụ huynh nên theo cấu trúc:

1. Có thể con đang vướng ở đâu.
2. Vì sao có thể như vậy.
3. Bài này thuộc chuẩn/chủ đề nào nếu có dữ liệu.
4. Bố/mẹ thử làm gì ngay.
5. Nói với con câu nào.
6. Khi nào nên dừng hoặc hỏi thêm.

Ví dụ:

```text
Có thể con chưa chắc bước tách số 8 thành 5 và 3, chứ không phải con lười.
Bố/mẹ thử dùng 8 cái nắp chai, cho con tách thành 2 nhóm.
Câu nên nói: "Con thử tìm một cách tách khác nhé, không cần nhanh."
Dừng sau 10 phút hoặc khi con bắt đầu cáu.
Nếu 3 ngày liên tiếp con vẫn nhầm kiểu này, mình nên hỏi cô xem trên lớp con có vướng tương tự không.
```

## Mức Chắc Chắn Và Bằng Chứng

AI cần tách rõ:

| Loại | Mô tả | Cách hiển thị |
|---|---|---|
| Quan sát | Dựa trên bài làm/ghi chú cụ thể | “Trong bài này, con bỏ qua bước...” |
| Giả thuyết | Có thể con vướng ở điểm này | “Một khả năng là...” |
| Khuyến nghị | Việc bố mẹ nên thử | “Bố/mẹ có thể thử...” |
| Cảnh báo | Cần hỏi giáo viên/chuyên gia | “Nếu kéo dài..., nên hỏi...” |

Không dùng:

- “Con bị...”
- “Chắc chắn con...”
- “Bố/mẹ phải...”
- “Nếu không làm sẽ...”

## Guardrail An Toàn

### An toàn giáo dục

- Không học trước lớp 1 dưới danh nghĩa chuẩn bị.
- Không khuyến khích luyện đề sớm.
- Không tăng bài khi trẻ có tín hiệu quá tải.
- Không đánh giá trẻ bằng một lần làm sai.

### An toàn tâm lý

- Không chẩn đoán.
- Không dùng nhãn “lười”, “kém”, “chậm”.
- Không khiến phụ huynh hoảng sợ.
- Có gợi ý hỏi chuyên gia khi dấu hiệu kéo dài hoặc nghiêm trọng.

### An toàn dữ liệu

- Tối thiểu hóa dữ liệu trẻ em.
- Minh bạch dữ liệu nào được lưu.
- Phụ huynh có quyền xóa.
- Không chia sẻ mặc định.
- Không dùng dữ liệu trẻ em cho quảng cáo.

## Dữ Liệu Cần Lưu

| Nhóm dữ liệu | Ví dụ | Lưu ý |
|---|---|---|
| ParentProfile | mức tự tin, thời gian rảnh, phong cách mong muốn | Không dùng để phán xét bố mẹ |
| ChildProfile | tuổi, lớp, giai đoạn, mục tiêu | Tránh nhãn cố định |
| LearningEvidence | ảnh bài, OCR, loại lỗi, kỹ năng liên quan | Có tùy chọn xóa ảnh |
| Observation | cảm xúc, hợp tác, ghi chú phiên học | Dữ liệu nhạy cảm |
| SupportSession | kế hoạch, câu nói, phản hồi sau phiên | Dùng để cá nhân hóa |
| WeeklyReport | tiến bộ, điểm vướng, ưu tiên tuần tới | Không so sánh bạn bè |
| SafetyFlag | tín hiệu quá tải, cần hỏi chuyên gia | Cần tone rất cẩn trọng |
| ChildLearningProfile | lớp, chương trình, bộ sách, môn đang theo dõi | Cho phép “chưa biết”, không ép phụ huynh nhập đủ |
| CurriculumMap | chuẩn đầu ra, chủ đề, prerequisite, dạng bài | Không sao chép nội dung SGK có bản quyền |
| KnowledgeNode | kỹ năng nhỏ, lỗi thường gặp, bài luyện phù hợp | Là đơn vị cá nhân hóa học tập |
| MasteryState | mức chắc chắn tạm thời theo từng node | Không biến thành nhãn cố định |
| LearningSession | mục tiêu, bài đã làm, lỗi, cảm xúc, kết quả | Nối tiếp gợi ý buổi sau |
| SessionReflection | phản hồi 3-5 câu của phụ huynh sau buổi | Cập nhật tiến trình học và parent coaching |
| VoiceSession | consent, transcript, summary, retention | Audio opt-in, xóa mặc định theo chính sách |
| TranscriptSegment | đoạn transcript theo thời gian và speaker nếu có | Có thể sửa/xóa trước khi lưu dài hạn |

## Data Contract Cho Curriculum

| Entity | Trường bắt buộc | Nguyên tắc |
|---|---|---|
| CurriculumMap | `subject`, `grade`, `topic`, `outcome`, `prerequisites` | Version hóa theo chương trình/bộ sách |
| KnowledgeNode | `id`, `skill`, `commonMistakes`, `practiceTypes` | Node đủ nhỏ để sinh bài luyện 5-15 phút |
| LearningEvidenceLink | `evidenceId`, `nodeId`, `confidence`, `reason` | Luôn lưu mức chắc chắn và lý do |
| PracticeRecommendation | `nodeId`, `difficulty`, `duration`, `stopCriteria` | Không tăng bài khi có tín hiệu quá tải |

## Data Contract Cho Session Memory

| Entity | Trường bắt buộc | Nguyên tắc |
|---|---|---|
| LearningSession | `goal`, `startedAt`, `nodes`, `activities`, `result` | Mỗi buổi chỉ một mục tiêu chính |
| SessionReflection | `workedWell`, `stuckAt`, `emotion`, `parentTried`, `nextDifficulty` | Hoàn thành nhanh, có voice input |
| ParentCoachingEvent | `situation`, `suggestedPhrase`, `used`, `perceivedEffect` | Đo tiến bộ của bố mẹ, không phán xét |
| MemorySummary | `recentPattern`, `nextHypothesis`, `expiresAt` | Có thời hạn để tránh đóng khung trẻ |

## Voice Privacy Controls

| Quyền kiểm soát | Hành vi sản phẩm |
|---|---|
| Bật/tắt ghi âm | Chỉ opt-in, có nút dừng rõ |
| Xem transcript | Phụ huynh xem trước khi dùng cho gợi ý dài hạn |
| Sửa transcript | Cho sửa lỗi nhận dạng giọng nói |
| Xóa audio | Mặc định xóa audio gốc sau xử lý hoặc theo thời hạn ngắn |
| Xóa summary | Có thể xóa summary/session khỏi memory |
| Chia sẻ | Preview trước khi gửi cho giáo viên/chuyên gia |

## Privacy Controls

MVP cần có:

- Xem dữ liệu đã lưu.
- Xóa ảnh bài làm.
- Xóa transcript, summary và audio nếu còn lưu.
- Xóa hồ sơ trẻ.
- Chế độ không lưu ảnh dài hạn.
- Chế độ không lưu audio dài hạn.
- Preview trước khi chia sẻ với giáo viên.
- Đồng ý rõ ràng trước khi xuất báo cáo.

## Human-In-The-Loop

Cần có review của con người cho:

- Bộ câu nói mẫu.
- Nội dung chuẩn bị vào lớp 1.
- Prompt/output mẫu có rủi ro tâm lý.
- Taxonomy kỹ năng nền.
- Curriculum map, prerequisite, dạng bài theo CTGDPT 2018 và SGK phổ biến.
- Voice/session extraction mẫu có rủi ro hiểu sai cảm xúc.
- Các trường hợp escalation đến giáo viên/chuyên gia.

## Observability

Theo dõi ở mức sản phẩm:

- Tỷ lệ output bị guardrail chặn/chỉnh.
- Tỷ lệ phụ huynh đánh giá “gợi ý dùng được”.
- Tỷ lệ phụ huynh chọn “con quá tải” sau phiên học.
- Tỷ lệ định vị curriculum được phụ huynh xác nhận/sửa.
- Tỷ lệ phản hồi sau buổi hoàn thành bằng tap/voice.
- Tỷ lệ phụ huynh xóa transcript/audio.
- Tỷ lệ khuyến nghị hỏi giáo viên/chuyên gia.
- Tỷ lệ xóa dữ liệu/ảnh sau upload.
