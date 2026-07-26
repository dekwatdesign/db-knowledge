# `ipd_med_trolley_batch`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_med_trolley_batch_id | int(11) | NO | PRI | 0 |  |  |
| ipd_med_trolley_id | int(11) | YES |  | NULL |  |  |
| ipd_med_trolley_batch_date | date | YES |  | NULL |  |  |
| ipd_med_trolley_batch_time | time | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| prep_staff | varchar(50) | YES |  | NULL |  |  |
| prep_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ipd_med_trolley_batch_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
