# `opd_qs_slot_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_slot_summary_id | int(11) | NO | PRI | 0 |  |  |
| schedule_date | date | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| interval_summary_text | text | YES |  | NULL |  |  |
| total_limit | int(11) | YES |  | NULL |  |  |
| day_name | varchar(50) | YES |  | NULL |  |  |
| opd_qs_schedule_tmpl_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor_code | no | 1 |
| PRIMARY | opd_qs_slot_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
