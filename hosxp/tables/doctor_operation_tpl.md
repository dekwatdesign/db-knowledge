# `doctor_operation_tpl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_operation_tpl_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| er_oper_code | int(11) | YES |  | NULL |  |  |
| icd9 | varchar(7) | YES |  | NULL |  |  |
| tpl_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_tpl_name_code | doctor_code | no | 1 |
| ix_tpl_name_code | tpl_name | no | 2 |
| PRIMARY | doctor_operation_tpl_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
