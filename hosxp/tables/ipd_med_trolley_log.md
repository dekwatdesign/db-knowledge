# `ipd_med_trolley_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_med_trolley_log_id | int(11) | NO | PRI | 0 |  |  |
| ipd_med_trolley_bed_id | int(11) | YES | MUL | NULL |  |  |
| open_datetime | datetime | YES |  | NULL |  |  |
| open_staff | varchar(50) | YES |  | NULL |  |  |
| open_device | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_med_trolley_bed_id | ipd_med_trolley_bed_id | no | 1 |
| PRIMARY | ipd_med_trolley_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
