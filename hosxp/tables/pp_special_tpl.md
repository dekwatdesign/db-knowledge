# `pp_special_tpl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pp_special_tpl_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| tpl_name | varchar(200) | YES |  | NULL |  |  |
| pp_special_type_id | int(11) | YES |  | NULL |  |  |
| pp_special_service_place_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code_tpl_name | doctor_code | no | 1 |
| ix_doctor_code_tpl_name | tpl_name | no | 2 |
| PRIMARY | pp_special_tpl_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
