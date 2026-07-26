# `provis_typein_ae`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "1",
    "name": "มารับบริการเอง"
  },
  {
    "code": "2",
    "name": "ได้รับการส่งตัวโดย First responder"
  },
  {
    "code": "3",
    "name": "ได้รับการส่งตัวโดย BLS"
  },
  {
    "code": "4",
    "name": "ได้รับการส่งตัวโดย ILS"
  },
  {
    "code": "5",
    "name": "ได้รับการส่งตัวโดย ALS"
  },
  {
    "code": "6",
    "name": "ได้รับการส่งต่อจากสถานพยาบาลอื่น"
  },
  {
    "code": "7",
    "name": "อื่น ๆ"
  },
  {
    "code": "9",
    "name": "ไม่ทราบ"
  }
]
```
