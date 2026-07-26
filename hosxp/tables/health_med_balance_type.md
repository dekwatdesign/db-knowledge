# `health_med_balance_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_balance_type_id | int(11) | NO | PRI | 0 |  |  |
| health_med_balance_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_balance_type_name | health_med_balance_type_name | yes | 1 |
| PRIMARY | health_med_balance_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "health_med_balance_type_id": 1,
    "health_med_balance_type_name": "กำเริบ"
  },
  {
    "health_med_balance_type_id": 2,
    "health_med_balance_type_name": "หย่อน"
  },
  {
    "health_med_balance_type_id": 3,
    "health_med_balance_type_name": "พิการ"
  }
]
```
