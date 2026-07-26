# `oper_recovery_cmpl_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| recovery_cmpl_type_id | int(11) | NO | PRI | 0 |  |  |
| recovery_cmpl_type_name | varchar(100) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_recovery_cmpl_type_name | recovery_cmpl_type_name | yes | 1 |
| PRIMARY | recovery_cmpl_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "recovery_cmpl_type_id": 1,
    "recovery_cmpl_type_name": "Complication"
  },
  {
    "recovery_cmpl_type_id": 2,
    "recovery_cmpl_type_name": "No Complication"
  }
]
```
