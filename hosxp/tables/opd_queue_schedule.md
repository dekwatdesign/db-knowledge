# `opd_queue_schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_queue_schedule_id | int(11) | NO | PRI | 0 |  |  |
| schedule_date | date | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| opd_queue_slot_id | int(11) | YES |  | NULL |  |  |
| opd_qs_limit_type_id | int(11) | YES |  | NULL |  |  |
| opd_qs_schedule_tmpl_type_id | int(11) | YES | MUL | NULL |  |  |
| slot_count | int(11) | YES |  | NULL |  |  |
| confirm_count | int(11) | YES |  | NULL |  |  |
| available_count | int(11) | YES |  | NULL |  |  |
| description_name | varchar(200) | YES |  | NULL |  |  |
| clinic_code | varchar(10) | YES |  | NULL |  |  |
| ref_clinic_name | varchar(100) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_doctor_date | doctor_code | no | 1 |
| ix_doctor_date | schedule_date | no | 2 |
| ix_opd_qs_schedule_tmpl_type | opd_qs_schedule_tmpl_type_id | no | 1 |
| ix_unique | doctor_code | yes | 1 |
| ix_unique | schedule_date | yes | 2 |
| ix_unique | opd_queue_slot_id | yes | 3 |
| ix_unique_index | doctor_code | yes | 1 |
| ix_unique_index | opd_queue_slot_id | yes | 2 |
| ix_unique_index | schedule_date | yes | 3 |
| PRIMARY | opd_queue_schedule_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
