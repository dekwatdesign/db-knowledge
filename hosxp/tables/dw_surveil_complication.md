# `dw_surveil_complication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(5) | NO | PRI |  |  |  |
| name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "221",
    "name": "Pneumonia"
  },
  {
    "code": "222",
    "name": "Diarrhoea"
  },
  {
    "code": "223",
    "name": "Encephalitis"
  },
  {
    "code": "224",
    "name": "Otitis media"
  },
  {
    "code": "225",
    "name": "อื่น ๆ"
  },
  {
    "code": "226",
    "name": "ไม่ทราบ"
  },
  {
    "code": "227",
    "name": "1 + 2"
  },
  {
    "code": "228",
    "name": "1 + 3"
  }
]
```
