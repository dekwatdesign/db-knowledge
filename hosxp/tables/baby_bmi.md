# `baby_bmi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "id": 1,
    "name": "ไม่มีการคัดกรอง",
    "hos_guid": null
  },
  {
    "id": 2,
    "name": "ภาวะโภชนาการขาด",
    "hos_guid": null
  },
  {
    "id": 3,
    "name": "ภาวะโภชนาการเกิน",
    "hos_guid": null
  }
]
```
