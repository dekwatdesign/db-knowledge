# `durable_category`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| durable_category_id | int(11) | NO | PRI | 0 |  |  |
| durable_category_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | durable_category_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "durable_category_id": 1,
    "durable_category_name": "ครุภัณฑ์สำนักงาน"
  },
  {
    "durable_category_id": 2,
    "durable_category_name": "ครุภัณฑ์ยานพาหนะและขนส่ง"
  },
  {
    "durable_category_id": 3,
    "durable_category_name": "ครุภัณฑ์การเกษตร"
  },
  {
    "durable_category_id": 4,
    "durable_category_name": "ครุภัณฑ์โฆษณาและเผยแพร่"
  },
  {
    "durable_category_id": 5,
    "durable_category_name": "ครุภัณฑ์ไฟฟ้าและวิทยุ"
  },
  {
    "durable_category_id": 6,
    "durable_category_name": "ครุภัณฑ์งานบ้านงานครัว"
  },
  {
    "durable_category_id": 7,
    "durable_category_name": "ครุภัณฑ์โรงงาน"
  },
  {
    "durable_category_id": 8,
    "durable_category_name": "ครุภัณฑ์สำรวจ"
  }
]
```
