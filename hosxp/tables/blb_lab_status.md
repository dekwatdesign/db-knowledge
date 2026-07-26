# `blb_lab_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_lab_status_id | int(11) | NO | PRI | 0 |  |  |
| blb_lab_status_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_lab_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "blb_lab_status_id": 1,
    "blb_lab_status_name": "ยังไม่ตรวจ"
  },
  {
    "blb_lab_status_id": 2,
    "blb_lab_status_name": "กำลังตรวจ"
  },
  {
    "blb_lab_status_id": 3,
    "blb_lab_status_name": "ตรวจแล้วผ่าน"
  },
  {
    "blb_lab_status_id": 4,
    "blb_lab_status_name": "ตรวจแล้วไม่ผ่าน"
  }
]
```
