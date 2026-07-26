# `patient_merge_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_merge_log_id | int(11) | NO | PRI | 0 |  |  |
| source_hn | varchar(9) | YES |  | NULL |  |  |
| dest_hn | varchar(9) | YES |  | NULL |  |  |
| merge_date | date | YES |  | NULL |  |  |
| merge_time | time | YES |  | NULL |  |  |
| merge_computer | varchar(100) | YES |  | NULL |  |  |
| merge_staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_merge_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
