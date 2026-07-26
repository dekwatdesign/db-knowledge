# `menugroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| group_id | varchar(50) | YES |  | NULL |  |  |
| group_name | varchar(200) | YES |  | NULL |  |  |
| group_order | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "group_id": "01",
    "group_name": "การส่งต่อ",
    "group_order": 1
  },
  {
    "group_id": "02",
    "group_name": "รายชื่อผู้ป่วย",
    "group_order": 5
  },
  {
    "group_id": "03",
    "group_name": "ระบบ Consult",
    "group_order": 6
  },
  {
    "group_id": "04",
    "group_name": "รายงาน",
    "group_order": 11
  },
  {
    "group_id": "05",
    "group_name": "ตั้งค่า",
    "group_order": 12
  },
  {
    "group_id": "06",
    "group_name": "ส่งต่อเฉพาะโรค",
    "group_order": 3
  },
  {
    "group_id": "07",
    "group_name": "ระบบประสานข้อมูลผู้ป่วย",
    "group_order": 10
  },
  {
    "group_id": "08",
    "group_name": "เครื่องมือ",
    "group_order": 9
  }
]
```
