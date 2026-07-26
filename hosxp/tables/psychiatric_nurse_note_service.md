# `psychiatric_nurse_note_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_nurse_note_service_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_nurse_note_service_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_nurse_note_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psychiatric_nurse_note_service_id": 0,
    "psychiatric_nurse_note_service_name": "ผู้ป่วยบกพร่องการสร้างสัมพันธภาพกับผู้อื่น",
    "hos_guid": "Y"
  },
  {
    "psychiatric_nurse_note_service_id": 100,
    "psychiatric_nurse_note_service_name": "มีพฤติกรรมการเรียกร้องความสนใจสูง",
    "hos_guid": "Y"
  },
  {
    "psychiatric_nurse_note_service_id": 101,
    "psychiatric_nurse_note_service_name": "ผู้ป่วยสุรา",
    "hos_guid": "Y"
  },
  {
    "psychiatric_nurse_note_service_id": 102,
    "psychiatric_nurse_note_service_name": "เสี่ยงต่อการเกิดอุบัติเหตุ",
    "hos_guid": "Y"
  },
  {
    "psychiatric_nurse_note_service_id": 103,
    "psychiatric_nurse_note_service_name": "มีโอกาสกลับไปดื่มสุราซ้ำ",
    "hos_guid": "Y"
  },
  {
    "psychiatric_nurse_note_service_id": 104,
    "psychiatric_nurse_note_service_name": "เสี่ยงต่อการเกิดภาวะแทรกซ้อนรุนแรงจากการทำงานของตับบกพร่อง",
    "hos_guid": "Y"
  },
  {
    "psychiatric_nurse_note_service_id": 105,
    "psychiatric_nurse_note_service_name": "ผู้ป่วยที่มีพยาธิสภาพทางกาย",
    "hos_guid": "Y"
  },
  {
    "psychiatric_nurse_note_service_id": 106,
    "psychiatric_nurse_note_service_name": "ครอบครัวไม่สามารถปรับตัวและยอมรับผู้ป่วย",
    "hos_guid": "Y"
  }
]
```
