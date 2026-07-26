# `plan_supplies_year`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PLAN_SUPPLIES_YEAR_ID | int unsigned | NO | PRI | NULL | auto_increment |  |
| PLAN_SUPPLIES_YEAR | varchar(250) | NO |  | NULL |  |  |
| updated_at | datetime | NO |  | NULL |  |  |
| created_at | datetime | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PLAN_SUPPLIES_YEAR_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "PLAN_SUPPLIES_YEAR_ID": 1,
    "PLAN_SUPPLIES_YEAR": "2566",
    "updated_at": "1900-01-01 00:00:00",
    "created_at": "1900-01-01 00:00:00"
  }
]
```
