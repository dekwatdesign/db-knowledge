# `doctor_schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_schedule_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(7) | YES | MUL | NULL |  |  |
| start_date_time | datetime | YES | MUL | NULL |  |  |
| end_date_time | datetime | YES | MUL | NULL |  |  |
| schedule_type_id | int(11) | YES | MUL | NULL |  |  |
| rate_type_id | int(11) | YES | MUL | NULL |  |  |
| schedule_note | varchar(250) | YES |  | NULL |  |  |
| confirm_work | char(1) | YES |  | NULL |  |  |
| app_limit | int(11) | YES |  | NULL |  |  |
| doctor_fee_type_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor_code | doctor_code | no | 1 |
| end_date_time | end_date_time | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_schedule_id | yes | 1 |
| rate_type_id | rate_type_id | no | 1 |
| schedule_type_id | schedule_type_id | no | 1 |
| start_date_time | start_date_time | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
