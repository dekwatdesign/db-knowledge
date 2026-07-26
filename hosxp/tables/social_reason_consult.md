# `social_reason_consult`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_reason_consult_id | int(11) | NO | PRI | 0 |  |  |
| social_reason_consult_name | varchar(250) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_social_reason_consult_social_reason_consult_name | social_reason_consult_name | no | 1 |
| PRIMARY | social_reason_consult_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "social_reason_consult_id": 1,
    "social_reason_consult_name": "ประเมินวินิจฉัยระดับความรุนแรงปัญหาทางสังคมผู้ป่วย",
    "active_status": "Y"
  },
  {
    "social_reason_consult_id": 2,
    "social_reason_consult_name": "ประเมินจิตสังคม ประเมินความพิการ ความบกพร่อง  ความสามารถทางสังคม  ทักษะทางสังคม",
    "active_status": "Y"
  },
  {
    "social_reason_consult_id": 3,
    "social_reason_consult_name": "จัดทำแผนการดูแลทางสังคมของผู้ป่วย",
    "active_status": "Y"
  },
  {
    "social_reason_consult_id": 4,
    "social_reason_consult_name": "จัดการทรัพยากรทางสังคมและพิทักษ์สิทธิ์ผู้ป่วยตามกฎหมายที่เกี่ยวข้อง",
    "active_status": "Y"
  },
  {
    "social_reason_consult_id": 5,
    "social_reason_consult_name": "เยี่ยมและจัดทำแผนการดูแลส่งเสริมสุขภาพ กาย จิต  สังคม และฟื้นฟูผู้สูงอายุที่มีภาวะพึ่งพิงในโรงพยาบาล",
    "active_status": "Y"
  },
  {
    "social_reason_consult_id": 6,
    "social_reason_consult_name": "จัดทำแผนการดูแลส่งเสริมสุขภาพ กาย จิต  สังคม และฟื้นฟูผู้สูงอายุที่มีภาวะพึ่งพิงในชุมชน",
    "active_status": "Y"
  },
  {
    "social_reason_consult_id": 7,
    "social_reason_consult_name": "การบำบัดฟื้นฟู จิตสังคมแบบรูณาการ (Psycho Social Intervention)",
    "active_status": "Y"
  },
  {
    "social_reason_consult_id": 8,
    "social_reason_consult_name": "การเตรียมความพร้อมผู้ป่วยที่มีความรุนแรง (SMIV)",
    "active_status": "Y"
  }
]
```
