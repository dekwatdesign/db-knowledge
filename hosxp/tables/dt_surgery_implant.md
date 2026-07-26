# `dt_surgery_implant`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_implant_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_implant_cc | text | YES |  | NULL |  |  |
| dt_surgery_implant_diag | text | YES |  | NULL |  |  |
| doctorcode1 | varchar(10) | YES |  | NULL |  |  |
| doctorcode2 | varchar(10) | YES |  | NULL |  |  |
| dtarea | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_stage_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_implant_type_op_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_implant_op_week | int(11) | YES |  | NULL |  |  |
| dt_surgery_implant_op_days | int(11) | YES |  | NULL |  |  |
| dt_surgery_implant_stage_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_implant_sys_area1 | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_implant_sys1 | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_implant_sys_meter1 | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_implant_sys_leng1 | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_implant_sys2 | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_implant_sys_area2 | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_implant_sys_meter2 | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_implant_sys_leng2 | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_implant_con_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_implant_ridge_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_implant_ridge_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_implant_intruc_note | text | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_implant_torque | int(11) | YES |  | NULL |  |  |
| dt_surgery_implant_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main8 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_implant_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
