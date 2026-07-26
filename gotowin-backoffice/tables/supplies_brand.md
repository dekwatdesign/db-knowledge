# `supplies_brand`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BRAND_ID | int | NO | PRI | NULL | auto_increment |  |
| BRAND_NAME | varchar(100) | YES |  |  |  | ชื่อยี่ห้อครุภัณฑ์00 |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BRAND_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "BRAND_ID": 1,
    "BRAND_NAME": "2 หัว BEST FLOW",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 2,
    "BRAND_NAME": "3 ลิ้นชัก สเตนเลส",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 3,
    "BRAND_NAME": "300L",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 4,
    "BRAND_NAME": "A&D",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 5,
    "BRAND_NAME": "aAMP all",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 6,
    "BRAND_NAME": "ACCU-CHEK",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 7,
    "BRAND_NAME": "ACER",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 8,
    "BRAND_NAME": "aerti",
    "updated_at": null,
    "created_at": null
  }
]
```
