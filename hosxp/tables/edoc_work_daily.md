# `edoc_work_daily`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_work_daily_id | int(11) | NO | PRI | 0 |  |  |
| edoc_work_daily_date | date | YES |  | NULL |  |  |
| edoc_work_daily_detail | text | YES |  | NULL |  |  |
| edoc_work_daily_problem | text | YES |  | NULL |  |  |
| edoc_work_daily_out | char(1) | YES |  | NULL |  |  |
| edoc_work_daily_out_place | varchar(100) | YES |  | NULL |  |  |
| edoc_work_daily_datetime | datetime | YES |  | NULL |  |  |
| edoc_work_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_work_daily_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
