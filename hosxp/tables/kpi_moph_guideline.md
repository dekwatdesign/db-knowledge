# `kpi_moph_guideline`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| kpi_moph_guideline_id | int(11) | NO | PRI | 0 |  |  |
| kpi_moph_guideline_name | text | YES |  | NULL |  |  |
| kpi_moph_guideline_cal | text | YES |  | NULL |  |  |
| kpi_moph_guideline_texta | text | YES |  | NULL |  |  |
| kpi_moph_guideline_textb | text | YES |  | NULL |  |  |
| kpi_moph_lastupdate | datetime | YES |  | NULL |  |  |
| kpi_moph_staff_id | int(11) | YES |  | NULL |  |  |
| kpi_moph_criterion_id | int(11) | YES | MUL | NULL |  |  |
| kpi_moph_date_type_id | int(11) | YES |  | NULL |  |  |
| kpi_moph_staff_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refkpi_moph_criterion3 | kpi_moph_criterion_id | no | 1 |
| PRIMARY | kpi_moph_guideline_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "kpi_moph_guideline_id": 1,
    "kpi_moph_guideline_name": "KPI No 01 :: อัตรามารดาเสียชีวิต",
    "kpi_moph_guideline_cal": "(A/B) x 100,000",
    "kpi_moph_guideline_texta": "A จำนวนมารดาเสียชีวิตระหว่างการตั้งครรภ์ การคลอดและหลังคลอด 42 วัน",
    "kpi_moph_guideline_textb": "B จำนวนการเกิดมีชีพทั้งหมดในเวลาเดียวกัน",
    "kpi_moph_lastupdate": "2014-01-29 14:59:21",
    "kpi_moph_staff_id": 1,
    "kpi_moph_criterion_id": 1,
    "kpi_moph_date_type_id": null,
    "kpi_moph_staff_name": null
  },
  {
    "kpi_moph_guideline_id": 2,
    "kpi_moph_guideline_name": "KPI No 02 :: ร้อยละของเด็กที่มีพัฒนาการสมวัย",
    "kpi_moph_guideline_cal": "(A/B) x 100",
    "kpi_moph_guideline_texta": "A จำนวนเด็กแรกเกิดถึงอายุ 5 ปี ที่ได้รับการตรวจประเมินพัฒนาการตามเกณฑ์ และ มีพัฒนาการปรกติในช่วงเวลาที่กำหนด",
    "kpi_moph_guideline_textb": "B จำนวนเด็กแรกเกิดถึงอายุ 5 ปี ที่ได้รับการตรวจประเมินพัฒนาการตามเกณฑ์ทั้งหมดในช่วงเวลาเดียวกัน",
    "kpi_moph_lastupdate": "2014-01-29 14:59:18",
    "kpi_moph_staff_id": 1,
    "kpi_moph_criterion_id": 2,
    "kpi_moph_date_type_id": null,
    "kpi_moph_staff_name": null
  },
  {
    "kpi_moph_guideline_id": 3,
    "kpi_moph_guideline_name": "KPI No 03 :: ร้อยละของเด็กนักเรียนมีถาวะอ้วน",
    "kpi_moph_guideline_cal": "(A/B) x 100",
    "kpi_moph_guideline_texta": "A จำนวนเด็ก อายุ 6-12 ปี ที่มีภาวะอ้วน (เริ่มอ้วน +  อ้วน)",
    "kpi_moph_guideline_textb": "B จำนวนเด็ก อายุ 6-12 ปีที่ชั่งน้ำหนักและวัดส่วนสูงทั้งหมด",
    "kpi_moph_lastupdate": "2014-01-29 14:59:16",
    "kpi_moph_staff_id": 3,
    "kpi_moph_criterion_id": 3,
    "kpi_moph_date_type_id": null,
    "kpi_moph_staff_name": null
  },
  {
    "kpi_moph_guideline_id": 6,
    "kpi_moph_guideline_name": "KPI No 04 :: เด็กไทยมีความฉลาดทางสติปัญญาเฉลี่ย",
    "kpi_moph_guideline_cal": "(A/B) x 100",
    "kpi_moph_guideline_texta": "A จำนวนเด็กนักเรียนไทยที่มีความฉลาดทางสติปัญญาไม่ต่ำกว่าเกณฑ์มาตรฐาน",
    "kpi_moph_guideline_textb": "B จำนวนเด็กไทยที่เป็นกลุ่มตัวอย่างของการสำรวจในปี 2559",
    "kpi_moph_lastupdate": "2014-01-29 14:59:14",
    "kpi_moph_staff_id": null,
    "kpi_moph_criterion_id": 4,
    "kpi_moph_date_type_id": null,
    "kpi_moph_staff_name": null
  },
  {
    "kpi_moph_guideline_id": 8,
    "kpi_moph_guideline_name": "KPI No 05 :: อัตราการคลอดในมารดาอายุ 15-19 ปี",
    "kpi_moph_guideline_cal": "(A/B) x 1,000",
    "kpi_moph_guideline_texta": "A จำนวนการคลอดมีชีพของอายุ 15-19 ปี (จากทะเบียนเกิด)",
    "kpi_moph_guideline_textb": "B จำนวนหญิงอายุ 15-19 ปีทั้งหมด (จำนวนประชากรกลางปีจากฐานข้อมูลทะเบียนราษฎร์)",
    "kpi_moph_lastupdate": "2014-01-29 14:59:11",
    "kpi_moph_staff_id": null,
    "kpi_moph_criterion_id": 5,
    "kpi_moph_date_type_id": null,
    "kpi_moph_staff_name": null
  },
  {
    "kpi_moph_guideline_id": 9,
    "kpi_moph_guideline_name": "KPI No 06 :: ความชุกผู้บริโภคเครื่องดื่ม ",
    "kpi_moph_guideline_cal": "(A/B) x 100",
    "kpi_moph_guideline_texta": "A จำนวนผู้บริโภคเครื่องดื่มแอลกอฮอล์ อายุ 15-19 ในพื้นที่",
    "kpi_moph_guideline_textb": "B จำนวนประชากรอายุ 15-19 ปีทั้งหมดในพิ้นที่",
    "kpi_moph_lastupdate": "2014-01-29 14:59:09",
    "kpi_moph_staff_id": null,
    "kpi_moph_criterion_id": 6,
    "kpi_moph_date_type_id": null,
    "kpi_moph_staff_name": null
  },
  {
    "kpi_moph_guideline_id": 10,
    "kpi_moph_guideline_name": "KPI No 07 :: อัตราตายจากอุบัติเหตุทางถนน",
    "kpi_moph_guideline_cal": "(A/B) x 100,000",
    "kpi_moph_guideline_texta": "A จำนวนผู้เสียชีวิตจากอุบัติเหตุทางถนนทั้งหมด (V01-V89) ปี 2557",
    "kpi_moph_guideline_textb": "B จำนวนประชากรกลางปี 2557",
    "kpi_moph_lastupdate": "2014-01-29 14:59:06",
    "kpi_moph_staff_id": null,
    "kpi_moph_criterion_id": 7,
    "kpi_moph_date_type_id": null,
    "kpi_moph_staff_name": null
  },
  {
    "kpi_moph_guideline_id": 11,
    "kpi_moph_guideline_name": "KPI No 08 :: อัตราตายจากโรคหลอดเลือดหัวใจ",
    "kpi_moph_guideline_cal": "(A/B) x 100,000",
    "kpi_moph_guideline_texta": "A  จำนวนการตายด้วยโรคหลอดเลือดหัวใจตามรหัส I20-I25",
    "kpi_moph_guideline_textb": "B จำนวนประชากรกลางปีในช่วงเวลาเดียวกัน\r\nB จำนวนประชากรกลางปีในช่วงเวลาเดียวกัน",
    "kpi_moph_lastupdate": "2014-01-29 14:59:04",
    "kpi_moph_staff_id": null,
    "kpi_moph_criterion_id": 8,
    "kpi_moph_date_type_id": null,
    "kpi_moph_staff_name": null
  }
]
```
