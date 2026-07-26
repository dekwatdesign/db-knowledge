# `refergroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refergroup_id | varchar(5) | NO | PRI |  |  |  |
| refergroup_name | varchar(30) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | refergroup_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "refergroup_id": "01",
    "refergroup_name": "โรคทั่วไป"
  },
  {
    "refergroup_id": "02",
    "refergroup_name": "เฉพาะโรค"
  }
]
```
