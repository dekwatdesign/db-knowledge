# `opd_qs_schedule_tmpl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_schedule_tmpl_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_schedule_tmpl_name | varchar(200) | YES |  | NULL |  |  |
| doctor_code | varchar(25) | YES | MUL | NULL |  |  |
| total_limit | int(11) | YES |  | NULL |  |  |
| opd_qs_schedule_tmpl_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_unique | doctor_code | no | 1 |
| ix_unique | opd_qs_schedule_tmpl_name | no | 2 |
| PRIMARY | opd_qs_schedule_tmpl_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
