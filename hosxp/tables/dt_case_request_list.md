# `dt_case_request_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_case_request_list_id | int(11) | NO | PRI | 0 |  |  |
| dt_case_request_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_work_type_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_list_qty | int(11) | YES |  | NULL |  |  |
| staff | varchar(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| dt_case_request_clinic_id | int(11) | YES | MUL | NULL |  |  |
| dt_case_request_disp_qty | int(11) | YES |  | NULL |  |  |
| dt_case_request_list_note | varchar(250) | YES |  | NULL |  |  |
| dt_case_request_fdate | date | YES |  | NULL |  |  |
| dt_case_request_ldate | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_case_request_clinic_id | dt_case_request_clinic_id | no | 1 |
| ix_dt_case_request_id | dt_case_request_id | no | 1 |
| ix_dt_case_request_work_type_id | dt_case_request_work_type_id | no | 1 |
| PRIMARY | dt_case_request_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
