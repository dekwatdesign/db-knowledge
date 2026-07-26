# `dt_lab_request_work`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_request_work_id | int(11) | NO | PRI | 0 |  |  |
| dt_lab_request_work_date | date | YES |  | NULL |  |  |
| dt_lab_request_work_time | time | YES |  | NULL |  |  |
| dt_lab_request_work_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_request_work_depcode | char(3) | YES |  | NULL |  |  |
| dt_lab_request_work_accept | char(1) | YES |  | NULL |  |  |
| dt_lab_request_accept_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_request_accept_datetime | datetime | YES |  | NULL |  |  |
| dt_lab_request_work_note | text | YES |  | NULL |  |  |
| dt_lab_order_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_lab_request_work_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
