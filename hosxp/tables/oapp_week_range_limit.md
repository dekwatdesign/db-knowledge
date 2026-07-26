# `oapp_week_range_limit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_week_range_limit_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| oapp_week_day_id | int(11) | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| start_time | time | YES |  | NULL |  |  |
| end_time | time | YES |  | NULL |  |  |
| limit_qty | int(11) | YES |  | NULL |  |  |
| entry_staff | varchar(30) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| not_available | char(1) | YES |  | NULL |  |  |
| not_available_reason | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| PRIMARY | oapp_week_range_limit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
