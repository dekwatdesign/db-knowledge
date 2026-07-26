# `informcom_brand`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BRAND_ID | int | NO | PRI | NULL | auto_increment |  |
| BRAND_NAME | varchar(100) | YES |  |  |  |  |
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
    "BRAND_NAME": "ACER",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 2,
    "BRAND_NAME": "HP",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 3,
    "BRAND_NAME": "DELL",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 4,
    "BRAND_NAME": "SAMSUNG",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 5,
    "BRAND_NAME": "Brother",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 6,
    "BRAND_NAME": "Epson",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 7,
    "BRAND_NAME": "Canon",
    "updated_at": null,
    "created_at": null
  },
  {
    "BRAND_ID": 8,
    "BRAND_NAME": "IBM",
    "updated_at": null,
    "created_at": null
  }
]
```
