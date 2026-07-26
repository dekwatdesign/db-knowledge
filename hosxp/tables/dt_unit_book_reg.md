# `dt_unit_book_reg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_unit_book_reg_id | int(11) | NO | PRI | 0 |  |  |
| reg_date | date | YES |  | NULL |  |  |
| reg_time | time | YES |  | NULL |  |  |
| reg_doctor | varchar(6) | YES |  | NULL |  |  |
| reg_depcode | char(3) | YES |  | NULL |  |  |
| dt_unit_id | int(11) | YES | MUL | NULL |  |  |
| unit_use_date | date | YES |  | NULL |  |  |
| unit_use_time | time | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| unit_approve_doctor | char(3) | YES |  | NULL |  |  |
| dt_case_request_disp_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| dt_unit_book_time_type_id | int(11) | YES | MUL | NULL |  |  |
| dt_unit_book_approve_type_id | int(11) | YES | MUL | NULL |  |  |
| receive_unit | char(1) | YES |  | NULL |  |  |
| receive_unit_date | date | YES |  | NULL |  |  |
| receive_unit_time | time | YES |  | NULL |  |  |
| dt_unit_reg_status_id | int(11) | YES | MUL | NULL |  |  |
| reg_note | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_case_request_disp_id | dt_case_request_disp_id | no | 1 |
| ix_dt_unit_book_approve_type_id | dt_unit_book_approve_type_id | no | 1 |
| ix_dt_unit_book_time_type_id | dt_unit_book_time_type_id | no | 1 |
| ix_dt_unit_id | dt_unit_id | no | 1 |
| ix_dt_unit_reg_status_id | dt_unit_reg_status_id | no | 1 |
| PRIMARY | dt_unit_book_reg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
