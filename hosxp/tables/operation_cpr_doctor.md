# `operation_cpr_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_cpr_doctor_id | int(11) | NO | PRI | 0 |  |  |
| operation_cpr_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | operation_cpr_id | no | 1 |
| PRIMARY | operation_cpr_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
