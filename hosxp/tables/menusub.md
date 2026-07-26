# `menusub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| group_id | varchar(50) | YES |  | NULL |  |  |
| menu_id | varchar(50) | YES |  | NULL |  |  |
| menu_name | varchar(200) | YES |  | NULL |  |  |
| menu_order | int(11) | YES |  | NULL |  |  |
| section | varchar(45) | YES |  | NULL |  |  |

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
    "menu_id": "01",
    "menu_name": "ส่งต่อทั่วไป",
    "menu_order": 1,
    "section": "user"
  },
  {
    "group_id": "01",
    "menu_id": "02",
    "menu_name": "ส่งกลับ",
    "menu_order": 2,
    "section": "user"
  },
  {
    "group_id": "02",
    "menu_id": "01",
    "menu_name": "รายชื่อผู้ป่วยรับ Refer",
    "menu_order": 1,
    "section": "user"
  },
  {
    "group_id": "02",
    "menu_id": "02",
    "menu_name": "รายชื่อผู้ป่วยส่งต่อ",
    "menu_order": 2,
    "section": "user"
  },
  {
    "group_id": "03",
    "menu_id": "01",
    "menu_name": "EKG Consult",
    "menu_order": 1,
    "section": "user"
  },
  {
    "group_id": "03",
    "menu_id": "02",
    "menu_name": "Film Consult",
    "menu_order": 2,
    "section": "user"
  },
  {
    "group_id": "03",
    "menu_id": "03",
    "menu_name": "Consult อื่นๆ",
    "menu_order": 4,
    "section": "user"
  },
  {
    "group_id": "03",
    "menu_id": "04",
    "menu_name": "CT Consult",
    "menu_order": 3,
    "section": "user"
  }
]
```
