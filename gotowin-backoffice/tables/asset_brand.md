# `asset_brand`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BRAND_ID | int | NO | PRI | NULL | auto_increment |  |
| BRAND_NAME | varchar(100) | YES |  |  |  | ชื่อยี่ห้อครุภัณฑ์00 |

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
    "BRAND_NAME": "SAMSUNG"
  },
  {
    "BRAND_ID": 2,
    "BRAND_NAME": "HP"
  },
  {
    "BRAND_ID": 3,
    "BRAND_NAME": "BROTHER"
  },
  {
    "BRAND_ID": 4,
    "BRAND_NAME": "ACER"
  },
  {
    "BRAND_ID": 5,
    "BRAND_NAME": "HITACHI"
  },
  {
    "BRAND_ID": 6,
    "BRAND_NAME": "LENOVO"
  },
  {
    "BRAND_ID": 7,
    "BRAND_NAME": "CANON"
  },
  {
    "BRAND_ID": 8,
    "BRAND_NAME": "NIKON"
  }
]
```
