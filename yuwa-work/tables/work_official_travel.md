# `work_official_travel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| out_number | int | YES |  | NULL |  | เลขส่งออก |
| out_date | date | YES |  | NULL |  | วันที่ออกเลขหนังสือ |
| subject | text | YES |  | NULL |  | เรื่อง/โครงการ/หลักสูตร |
| date_start | date | YES | MUL | NULL |  | เริ่มวันที่ |
| departure_time | time | YES |  | NULL |  | เวลาเดินทางขาไป |
| date_end | date | YES |  | NULL |  | ถึงวันที่ |
| return_time | time | YES |  | NULL |  | เวลาเดินทางขากลับ |
| duration_days | int | YES |  | NULL |  | ระยะเวลา (วัน) |
| time_period | varchar(50) | YES |  | เต็มวัน |  | รูปแบบเวลา: เต็มวัน/ครึ่งวันเช้า/ครึ่งวันบ่าย |
| venue | text | YES |  | NULL |  | สถานที่จัด |
| organizer | varchar(500) | YES |  | NULL |  | หน่วยงานผู้จัด |
| receiver_name | varchar(255) | YES |  | NULL |  | ผู้รับเรื่องคืน |
| receive_date | date | YES |  | NULL |  | วันที่รับ |
| project_type | varchar(255) | YES | MUL | NULL |  | ประเภทโครงการ |
| mission_type | varchar(50) | YES |  | NULL |  | ประเภทภารกิจ 5 ประเภท |
| propose_date | date | YES |  | NULL |  | วันที่เสนอ |
| registration_fee | decimal(12,2) | YES |  | NULL |  | ค่าลงทะเบียน/คน |
| budget_source | varchar(50) | YES |  | NULL |  | แหล่งเงิน |
| budget_fiscal_year_be | int | YES |  | NULL |  | ปีงบประมาณ พ.ศ. |
| budget_amount | decimal(12,2) | YES |  | NULL |  | วงเงินรวมโดยประมาณ |
| has_advance_loan | char(1) | NO |  | N |  | มีเงินยืม: Y/N |
| advance_loan_amount | decimal(12,2) | YES |  | NULL |  | จำนวนเงินยืม |
| loan_due_date | date | YES |  | NULL |  | กำหนดคืนเงินยืม/ใบเสร็จ |
| loan_returned_at | date | YES |  | NULL |  | วันที่คืนเงินยืม |
| receipt_submitted_at | date | YES |  | NULL |  | วันที่ส่งใบเสร็จ/หลักฐานการเงิน |
| workflow_status | varchar(40) | NO |  | training_review |  | สถานะ workflow |
| submitted_at | datetime | YES |  | NULL |  | วันที่ส่งคำขอ |
| director_approved_at | datetime | YES |  | NULL |  | วันที่ผู้อำนวยการอนุมัติ |
| finalized_at | datetime | YES |  | NULL |  | วันที่ HR ปิดงาน/อนุมัติแล้ว |
| data_quality_status | varchar(30) | NO |  | unchecked |  | สถานะคุณภาพข้อมูล |
| competency_tags_json | text | YES |  | NULL |  | JSON tags สมรรถนะ/IDP |
| speaker_topic | varchar(500) | YES |  | NULL |  | หัวข้อวิทยากร/SME tracking |
| remark | text | YES |  | NULL |  | หมายเหตุ |
| invite_file | varchar(500) | YES |  | NULL |  | ที่เก็บไฟล์หนังสือเชิญ |
| created_by | int | YES |  | NULL |  | gtw_user_id ผู้บันทึก |
| deleted_at | datetime | YES | MUL | NULL |  | soft delete |
| created_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_date_start | date_start | no | 1 |
| idx_deleted_at | deleted_at | no | 1 |
| idx_project_type | project_type | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "out_number": 0,
    "out_date": "2026-03-12",
    "subject": "เข้าร่วมโครงการประชุมเชิงปฏิบัติการเพื่อพัฒนาศักยภาพเลขานุการผู้บริหาร หน่วยงานในสังกัดกรมสุขภาพจิต ประจำปีงบประมาณ พ.ศ. 2569",
    "date_start": "2026-03-23",
    "departure_time": null,
    "date_end": "2026-03-24",
    "return_time": null,
    "duration_days": 2,
    "time_period": "เต็มวัน",
    "venue": "โรงแรมรามาการ์เด้นส์ กรุงเทพมหานคร",
    "organizer": "กรมสุขภาพจิต สำนักงานเลขานุการกรม",
    "receiver_name": "",
    "receive_date": null,
    "project_type": "ประชุม",
    "mission_type": "ประชุม",
    "propose_date": null,
    "registration_fee": "0.00",
    "budget_source": "ไม่เบิก",
    "budget_fiscal_year_be": 2569,
    "budget_amount": null,
    "has_advance_loan": "N",
    "advance_loan_amount": null,
    "loan_due_date": null,
    "loan_returned_at": null,
    "receipt_submitted_at": null,
    "workflow_status": "approved",
    "submitted_at": "2026-03-12 11:17:36",
    "director_approved_at": "2026-03-12 11:17:36",
    "finalized_at": "2026-03-12 11:17:36",
    "data_quality_status": "complete",
    "competency_tags_json": null,
    "speaker_topic": null,
    "remark": "",
    "invite_file": null,
    "created_by": 256,
    "deleted_at": null,
    "created_at": "2026-03-12 11:17:36",
    "updated_at": "2026-06-13 13:35:17"
  },
  {
    "id": 2,
    "out_number": 0,
    "out_date": "2025-10-03",
    "subject": "เข้าร่วมเป็นวิทยากร กิจกรรม Lion Service Day “การดูแลและเสริมสร้างสุขภาพจิต”",
    "date_start": "2025-10-08",
    "departure_time": null,
    "date_end": "2025-10-08",
    "return_time": null,
    "duration_days": 1,
    "time_period": "เต็มวัน",
    "venue": "หอประชุมโรงเรียนบางพลีราษฎร์บำรุง อำเภอบางพลี จังหวัดสมุทรปราการ",
    "organizer": "สโมสรไลออนส์สมุทรปราการบางพลี",
    "receiver_name": "",
    "receive_date": null,
    "project_type": "วิทยากร",
    "mission_type": "เป็นวิทยากร",
    "propose_date": null,
    "registration_fee": null,
    "budget_source": "ไม่เบิก",
    "budget_fiscal_year_be": 2568,
    "budget_amount": null,
    "has_advance_loan": "N",
    "advance_loan_amount": null,
    "loan_due_date": null,
    "loan_returned_at": null,
    "receipt_submitted_at": null,
    "workflow_status": "approved",
    "submitted_at": "2026-03-12 11:24:59",
    "director_approved_at": "2026-03-12 11:24:59",
    "finalized_at": "2026-03-12 11:24:59",
    "data_quality_status": "complete",
    "competency_tags_json": null,
    "speaker_topic": "เข้าร่วมเป็นวิทยากร กิจกรรม Lion Service Day “การดูแลและเสริมสร้างสุขภาพจิต”",
    "remark": "",
    "invite_file": null,
    "created_by": 302,
    "deleted_at": null,
    "created_at": "2026-03-12 11:24:59",
    "updated_at": "2026-06-13 19:42:39"
  },
  {
    "id": 3,
    "out_number": 0,
    "out_date": "2025-10-03",
    "subject": "เข้าร่วมเป็นวิทยากรให้ความรู้แก่ครูผู้สอน เกี่ยวกับการดูแลนักเรียนที่มีความต้องการพิเศษ",
    "date_start": "2025-10-09",
    "departure_time": null,
    "date_end": "2025-10-09",
    "return_time": null,
    "duration_days": 1,
    "time_period": "เต็มวัน",
    "venue": "โรงเรียนพร้อมคิด ตำบลบางแก้ว อำเภอบางพลี จังหวัดสมุทรปราการ",
    "organizer": "โรงเรียนพร้อมคิด",
    "receiver_name": "",
    "receive_date": null,
    "project_type": "วิทยากร",
    "mission_type": "เป็นวิทยากร",
    "propose_date": null,
    "registration_fee": null,
    "budget_source": "ไม่เบิก",
    "budget_fiscal_year_be": 2568,
    "budget_amount": null,
    "has_advance_loan": "N",
    "advance_loan_amount": null,
    "loan_due_date": null,
    "loan_returned_at": null,
    "receipt_submitted_at": null,
    "workflow_status": "approved",
    "submitted_at": "2026-03-12 11:36:52",
    "director_approved_at": "2026-03-12 11:36:52",
    "finalized_at": "2026-03-12 11:36:52",
    "data_quality_status": "complete",
    "competency_tags_json": null,
    "speaker_topic": "เข้าร่วมเป็นวิทยากรให้ความรู้แก่ครูผู้สอน เกี่ยวกับการดูแลนักเรียนที่มีความต้องการพิเศษ",
    "remark": "",
    "invite_file": null,
    "created_by": 302,
    "deleted_at": null,
    "created_at": "2026-03-12 11:36:52",
    "updated_at": "2026-06-13 19:42:39"
  },
  {
    "id": 4,
    "out_number": 0,
    "out_date": "2026-03-06",
    "subject": "เยี่ยมบ้านผู้ป่วย",
    "date_start": "2026-03-11",
    "departure_time": null,
    "date_end": "2026-03-11",
    "return_time": null,
    "duration_days": 0,
    "time_period": "ครึ่งวันเช้า",
    "venue": "บ้านเลขที่ 229167 หมู่ 4 ถนนเทพารักษ์ ตำบลบางเพรียง อำเภอบางบ่อ จังหวัดสมุทรปราการ",
    "organizer": "บ้านเลขที่ 229167 หมู่ 4 ถนนเทพารักษ์ ตำบลบางเพรียง อำเภอบางบ่อ จังหวัดสมุทรปราการ",
    "receiver_name": "",
    "receive_date": null,
    "project_type": "เยี่ยมบ้านผู้ป่วย",
    "mission_type": "ภารกิจอื่นๆ",
    "propose_date": null,
    "registration_fee": null,
    "budget_source": "ไม่เบิก",
    "budget_fiscal_year_be": 2569,
    "budget_amount": null,
    "has_advance_loan": "N",
    "advance_loan_amount": null,
    "loan_due_date": null,
    "loan_returned_at": null,
    "receipt_submitted_at": null,
    "workflow_status": "approved",
    "submitted_at": "2026-03-12 11:49:14",
    "director_approved_at": "2026-03-12 11:49:14",
    "finalized_at": "2026-03-12 11:49:14",
    "data_quality_status": "complete",
    "competency_tags_json": null,
    "speaker_topic": null,
    "remark": "",
    "invite_file": "20260312114914____.___________________________________________________________________________________________11.03.69.pdf",
    "created_by": 256,
    "deleted_at": null,
    "created_at": "2026-03-12 11:49:14",
    "updated_at": "2026-06-13 19:42:39"
  },
  {
    "id": 5,
    "out_number": 0,
    "out_date": "2025-10-06",
    "subject": "ส่งผู้ป่วยเข้าศูนย์ฝึก",
    "date_start": "2025-10-06",
    "departure_time": null,
    "date_end": "2025-10-06",
    "return_time": null,
    "duration_days": 0,
    "time_period": "ครึ่งวันเช้า",
    "venue": "ศูนย์พัฒนาศักยภาพและอาชีพคนพิการพระประแดง จังหวัดสมุทรปราการ",
    "organizer": "กลุ่มงานสังคมสงเคราะห์ โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "receiver_name": "",
    "receive_date": null,
    "project_type": "ส่งผู้ป่วยเข้าศูนย์ฝึก",
    "mission_type": "ภารกิจอื่นๆ",
    "propose_date": null,
    "registration_fee": null,
    "budget_source": "ไม่เบิก",
    "budget_fiscal_year_be": 2568,
    "budget_amount": null,
    "has_advance_loan": "N",
    "advance_loan_amount": null,
    "loan_due_date": null,
    "loan_returned_at": null,
    "receipt_submitted_at": null,
    "workflow_status": "approved",
    "submitted_at": "2026-03-12 13:34:27",
    "director_approved_at": "2026-03-12 13:34:27",
    "finalized_at": "2026-03-12 13:34:27",
    "data_quality_status": "complete",
    "competency_tags_json": null,
    "speaker_topic": null,
    "remark": "",
    "invite_file": null,
    "created_by": 302,
    "deleted_at": null,
    "created_at": "2026-03-12 13:34:27",
    "updated_at": "2026-06-13 13:35:17"
  },
  {
    "id": 6,
    "out_number": 0,
    "out_date": "2025-10-06",
    "subject": "เยี่ยมบ้านผู้ป่วย",
    "date_start": "2025-10-07",
    "departure_time": null,
    "date_end": "2025-10-07",
    "return_time": null,
    "duration_days": 0,
    "time_period": "ครึ่งวันเช้า",
    "venue": "บ้านเลขที่ 159/1 หมู่ที่ 12 ตำบล คลองด่าน อำเภอ บางบ่อ จังหวัด สมุทรปราการ",
    "organizer": "กลุ่มงานสังคมสงเคราะห์ โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "receiver_name": "",
    "receive_date": null,
    "project_type": "เยี่ยม",
    "mission_type": "ภารกิจอื่นๆ",
    "propose_date": null,
    "registration_fee": null,
    "budget_source": "ไม่เบิก",
    "budget_fiscal_year_be": 2568,
    "budget_amount": null,
    "has_advance_loan": "N",
    "advance_loan_amount": null,
    "loan_due_date": null,
    "loan_returned_at": null,
    "receipt_submitted_at": null,
    "workflow_status": "approved",
    "submitted_at": "2026-03-12 13:37:55",
    "director_approved_at": "2026-03-12 13:37:55",
    "finalized_at": "2026-03-12 13:37:55",
    "data_quality_status": "complete",
    "competency_tags_json": null,
    "speaker_topic": null,
    "remark": "",
    "invite_file": null,
    "created_by": 302,
    "deleted_at": null,
    "created_at": "2026-03-12 13:37:55",
    "updated_at": "2026-06-13 13:35:17"
  },
  {
    "id": 7,
    "out_number": 0,
    "out_date": "2025-10-07",
    "subject": "เข้าร่วมประชุมปรึกษาหารือแนวทางการตรวจวินิจฉัย การบำบัดรักษา ผู้ป่วยที่มีปัญหาจิตเวชเด็กและวัยรุ่น",
    "date_start": "2025-10-08",
    "departure_time": null,
    "date_end": "2025-10-08",
    "return_time": null,
    "duration_days": 1,
    "time_period": "เต็มวัน",
    "venue": "โรงพยาบาลพระสมุทรเจดีย์สวาทยานนท์",
    "organizer": "โรงพยาบาลพระสมุทรเจดีย์สวาทยานนท์",
    "receiver_name": "",
    "receive_date": null,
    "project_type": "ประชุม",
    "mission_type": "ประชุม",
    "propose_date": null,
    "registration_fee": null,
    "budget_source": "ไม่เบิก",
    "budget_fiscal_year_be": 2568,
    "budget_amount": null,
    "has_advance_loan": "N",
    "advance_loan_amount": null,
    "loan_due_date": null,
    "loan_returned_at": null,
    "receipt_submitted_at": null,
    "workflow_status": "approved",
    "submitted_at": "2026-03-12 13:40:23",
    "director_approved_at": "2026-03-12 13:40:23",
    "finalized_at": "2026-03-12 13:40:23",
    "data_quality_status": "complete",
    "competency_tags_json": null,
    "speaker_topic": null,
    "remark": "",
    "invite_file": null,
    "created_by": 302,
    "deleted_at": null,
    "created_at": "2026-03-12 13:40:23",
    "updated_at": "2026-06-13 13:35:17"
  },
  {
    "id": 8,
    "out_number": 0,
    "out_date": "2025-10-07",
    "subject": "เข้าร่วมประชุมเพื่อพิจารณาประเมินผลงานของบุคคลในสายงานพยาบาลวิชาชีพ (จิตเวชเด็ก)",
    "date_start": "2025-10-17",
    "departure_time": null,
    "date_end": "2025-10-17",
    "return_time": null,
    "duration_days": 0,
    "time_period": "ครึ่งวันเช้า",
    "venue": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "organizer": "กองบริหารทรัพยากรบุคคล",
    "receiver_name": "",
    "receive_date": null,
    "project_type": "ประชุม",
    "mission_type": "ประชุม",
    "propose_date": null,
    "registration_fee": null,
    "budget_source": "ไม่เบิก",
    "budget_fiscal_year_be": 2568,
    "budget_amount": null,
    "has_advance_loan": "N",
    "advance_loan_amount": null,
    "loan_due_date": null,
    "loan_returned_at": null,
    "receipt_submitted_at": null,
    "workflow_status": "approved",
    "submitted_at": "2026-03-12 14:10:16",
    "director_approved_at": "2026-03-12 14:10:16",
    "finalized_at": "2026-03-12 14:10:16",
    "data_quality_status": "complete",
    "competency_tags_json": null,
    "speaker_topic": null,
    "remark": "",
    "invite_file": null,
    "created_by": 302,
    "deleted_at": null,
    "created_at": "2026-03-12 14:10:16",
    "updated_at": "2026-06-13 13:35:17"
  }
]
```
