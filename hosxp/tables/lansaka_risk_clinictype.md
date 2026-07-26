# `lansaka_risk_clinictype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(2) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "id": 1,
    "name": "ความเสี่ยงทาง clinic ทั่วไป"
  },
  {
    "id": 2,
    "name": "ความเสี่ยงทาง clinic เฉพาะโรค"
  },
  {
    "id": 3,
    "name": "ความเสี่ยงทั่วไป"
  }
]
```
