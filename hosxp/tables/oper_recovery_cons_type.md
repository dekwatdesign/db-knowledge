# `oper_recovery_cons_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| recovery_cons_type_id | int(11) | NO | PRI | 0 |  |  |
| recovery_cons_type_name | varchar(200) | YES | UNI | NULL |  |  |
| rr_score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_recovery_cons_type_name | recovery_cons_type_name | yes | 1 |
| PRIMARY | recovery_cons_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
