# `depression_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depression_status_id | int(11) | NO | PRI | 0 |  |  |
| depression_status_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depression_status_name | depression_status_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | depression_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "depression_status_id": 1,
    "depression_status_name": "กำลังรักษาโดยคะแนน 9Q >= 7",
    "hos_guid": null
  },
  {
    "depression_status_id": 2,
    "depression_status_name": "อาการทุเลาแต่ยังแต่ยังคงการให้ยารักษาโดยคะแนน 9Q < 7",
    "hos_guid": null
  },
  {
    "depression_status_id": 3,
    "depression_status_name": "กำลังลดยาลง (หลังจากที่คะแนน 9Q < 7 นาน  6 เดือน)",
    "hos_guid": null
  },
  {
    "depression_status_id": 4,
    "depression_status_name": "กำลังเฝ้าระวังการกลับซ้ำ (หยุดรักษาแล้ว)",
    "hos_guid": null
  },
  {
    "depression_status_id": 5,
    "depression_status_name": "ขาดการรักษาไม่มาตามนัดเกิน 1 เดือน",
    "hos_guid": null
  },
  {
    "depression_status_id": 6,
    "depression_status_name": "จำหน่ายจากระบบดูแลเฝ้าระวังแล้ว (หลังติดตามประเมินด้วย 9Q ครบ 1 ปี ไม่พบการกลับซ้ำ)",
    "hos_guid": null
  },
  {
    "depression_status_id": 7,
    "depression_status_name": "กลุ่มที่เฝ้าระวัง",
    "hos_guid": null
  }
]
```
