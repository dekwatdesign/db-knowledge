# `dt_case_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_case_request_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| dt_case_request_date | date | YES |  | NULL |  |  |
| dt_case_request_time | time | YES |  | NULL |  |  |
| dt_case_request_finish | char(1) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| dt_case_request_confirm | char(1) | YES |  | NULL |  |  |
| dt_case_request_sum | int(11) | YES |  | NULL |  |  |
| dt_case_request_disp_sum | int(11) | YES |  | NULL |  |  |
| dt_case_request_transfer_sum | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_adviser | varchar(6) | YES |  | NULL |  |  |
| dt_case_request_approve | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_case_request_transfer_sum | dt_case_request_transfer_sum | no | 1 |
| PRIMARY | dt_case_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
