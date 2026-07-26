# `ipd_nurse_work_shift`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_work_shift_id | int(11) | NO | PRI | 0 |  |  |
| shift_date | date | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| ipd_nurse_shift_id | int(11) | YES |  | NULL |  |  |
| shift_note | text | YES |  | NULL |  |  |
| bed00 | varchar(10) | YES |  | NULL |  |  |
| bed01 | varchar(10) | YES |  | NULL |  |  |
| bed02 | varchar(10) | YES |  | NULL |  |  |
| bed03 | varchar(10) | YES |  | NULL |  |  |
| bed04 | varchar(10) | YES |  | NULL |  |  |
| bed05 | varchar(10) | YES |  | NULL |  |  |
| bed06 | varchar(10) | YES |  | NULL |  |  |
| bed07 | varchar(10) | YES |  | NULL |  |  |
| bed08 | varchar(10) | YES |  | NULL |  |  |
| bed09 | varchar(10) | YES |  | NULL |  |  |
| bed10 | varchar(10) | YES |  | NULL |  |  |
| bed11 | varchar(10) | YES |  | NULL |  |  |
| bed12 | varchar(10) | YES |  | NULL |  |  |
| bed13 | varchar(10) | YES |  | NULL |  |  |
| bed14 | varchar(10) | YES |  | NULL |  |  |
| bed15 | varchar(10) | YES |  | NULL |  |  |
| bed16 | varchar(10) | YES |  | NULL |  |  |
| bed17 | varchar(10) | YES |  | NULL |  |  |
| bed18 | varchar(10) | YES |  | NULL |  |  |
| bed19 | varchar(10) | YES |  | NULL |  |  |
| bed20 | varchar(10) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| bed01_flag | varchar(10) | YES |  | NULL |  |  |
| bed02_flag | varchar(10) | YES |  | NULL |  |  |
| bed03_flag | varchar(10) | YES |  | NULL |  |  |
| bed04_flag | varchar(10) | YES |  | NULL |  |  |
| bed05_flag | varchar(10) | YES |  | NULL |  |  |
| bed06_flag | varchar(10) | YES |  | NULL |  |  |
| bed07_flag | varchar(10) | YES |  | NULL |  |  |
| bed08_flag | varchar(10) | YES |  | NULL |  |  |
| bed09_flag | varchar(10) | YES |  | NULL |  |  |
| bed10_flag | varchar(10) | YES |  | NULL |  |  |
| bed11_flag | varchar(10) | YES |  | NULL |  |  |
| bed12_flag | varchar(10) | YES |  | NULL |  |  |
| bed13_flag | varchar(10) | YES |  | NULL |  |  |
| bed14_flag | varchar(10) | YES |  | NULL |  |  |
| bed15_flag | varchar(10) | YES |  | NULL |  |  |
| bed16_flag | varchar(10) | YES |  | NULL |  |  |
| bed17_flag | varchar(10) | YES |  | NULL |  |  |
| bed18_flag | varchar(10) | YES |  | NULL |  |  |
| bed19_flag | varchar(10) | YES |  | NULL |  |  |
| bed20_flag | varchar(10) | YES |  | NULL |  |  |
| ipd_nurse_shift_position_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_unique | doctor_code | yes | 1 |
| ix_unique | ipd_nurse_shift_id | yes | 2 |
| ix_unique | shift_date | yes | 3 |
| ix_ward_doctor_code_shift | ipd_nurse_work_shift_id | no | 1 |
| ix_ward_doctor_code_shift | doctor_code | no | 2 |
| ix_ward_doctor_code_shift | ward | no | 3 |
| ix_ward_doctor_code_shift_index | doctor_code | no | 1 |
| ix_ward_doctor_code_shift_index | ipd_nurse_work_shift_id | no | 2 |
| ix_ward_doctor_code_shift_index | ward | no | 3 |
| PRIMARY | ipd_nurse_work_shift_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
