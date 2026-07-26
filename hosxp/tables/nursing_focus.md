# `nursing_focus`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nursing_focus_id | int(11) | NO | PRI | 0 |  |  |
| nursing_focus_staff_active | varchar(200) | YES |  | NULL |  |  |
| nursing_focus_staff_resolved | varchar(200) | YES |  | NULL |  |  |
| nursing_focus_text | text | YES |  | NULL |  |  |
| nursing_focus_goal | text | YES |  | NULL |  |  |
| datetime_active | datetime | YES |  | NULL |  |  |
| datetime_resolved | datetime | YES |  | NULL |  |  |
| an | varchar(13) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | nursing_focus_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "nursing_focus_id": 2,
    "nursing_focus_staff_active": "291",
    "nursing_focus_staff_resolved": "291",
    "nursing_focus_text": "A: เสี่ยงต่อการทำร้ายผู้อื่นเมื่อถูกขัดใจ",
    "nursing_focus_goal": "ผู้ป่วยไม่มีพฤติกรรมทำร้ายผู้อื่น ปรับตัวได้มากขึ้น",
    "datetime_active": "2026-01-09 10:44:43",
    "datetime_resolved": "2026-01-09 00:00:00",
    "an": "690000016"
  },
  {
    "nursing_focus_id": 4,
    "nursing_focus_staff_active": "291",
    "nursing_focus_staff_resolved": "291",
    "nursing_focus_text": "A:ผู้ปกครองบกพร่องทักษะการปรับพฤติกรรม",
    "nursing_focus_goal": "ผู้ปกครองสามารถปรับพฤติกรรมผู้ป่วยได้ ไม่ถูกผู้ป่วยทำร้าย",
    "datetime_active": "2026-01-09 10:46:20",
    "datetime_resolved": "2026-01-09 00:00:00",
    "an": "690000016"
  }
]
```
