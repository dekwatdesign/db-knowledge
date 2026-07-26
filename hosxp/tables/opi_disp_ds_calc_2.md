# `opi_disp_ds_calc_2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_disp_ds_calc_2_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| dose | double(15,3) | YES |  | NULL |  |  |
| dose_1_check | char(1) | YES |  | NULL |  |  |
| dose_2_check | char(1) | YES |  | NULL |  |  |
| every_day_check | char(1) | YES |  | NULL |  |  |
| day1_check | char(1) | YES |  | NULL |  |  |
| day2_check | char(1) | YES |  | NULL |  |  |
| day3_check | char(1) | YES |  | NULL |  |  |
| day4_check | char(1) | YES |  | NULL |  |  |
| day5_check | char(1) | YES |  | NULL |  |  |
| day6_check | char(1) | YES |  | NULL |  |  |
| day7_check | char(1) | YES |  | NULL |  |  |
| date_start | date | YES |  | NULL |  |  |
| date_finish | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| line1 | varchar(150) | YES |  | NULL |  |  |
| line2 | varchar(150) | YES |  | NULL |  |  |
| line3 | varchar(150) | YES |  | NULL |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| line4 | varchar(150) | YES |  | NULL |  |  |
| fu_wk | int(11) | YES |  | NULL |  |  |
| short_description | varchar(200) | YES |  | NULL |  |  |
| is_off | char(1) | YES |  | NULL |  |  |
| off_date | date | YES |  | NULL |  |  |
| off_doctor | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_opi_guid | opi_guid | yes | 1 |
| PRIMARY | opi_disp_ds_calc_2_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
