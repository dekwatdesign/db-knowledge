# `dt_case_request_acpt_tsf`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_case_request_acpt_tsf_id | int(11) | NO | PRI | 0 |  |  |
| dt_case_request_disp_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_id | int(11) | YES | MUL | NULL |  |  |
| acpt_tsf_date | date | YES |  | NULL |  |  |
| acpt_tsf_time | time | YES |  | NULL |  |  |
| acpt_tsf_from_doctor | varchar(6) | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_case_request_disp_id | dt_case_request_disp_id | no | 1 |
| ix_dt_case_request_id | dt_case_request_id | no | 1 |
| PRIMARY | dt_case_request_acpt_tsf_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
