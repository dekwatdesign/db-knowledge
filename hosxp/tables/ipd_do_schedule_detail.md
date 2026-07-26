# `ipd_do_schedule_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_do_schedule_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_detail_id | int(11) | YES | MUL | NULL |  |  |
| ipd_do_schedule_type_id | int(11) | YES |  | NULL |  |  |
| ipd_do_week_date_type_id | int(11) | YES |  | NULL |  |  |
| ipd_do_schedule_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_doctor_order_detail_id | ipd_doctor_order_detail_id | no | 1 |
| PRIMARY | ipd_do_schedule_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
