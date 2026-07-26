# `opi_disp_ds_calc_1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_disp_ds_calc_1_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| dose_1_check | char(1) | YES |  | NULL |  |  |
| dose_2_check | char(1) | YES |  | NULL |  |  |
| dose_3_check | char(1) | YES |  | NULL |  |  |
| dose_4_check | char(1) | YES |  | NULL |  |  |
| dose_1_unit | int(11) | YES |  | NULL |  |  |
| dose_2_unit | int(11) | YES |  | NULL |  |  |
| dose_3_unit | int(11) | YES |  | NULL |  |  |
| dose_4_unit | int(11) | YES |  | NULL |  |  |
| dose_1_acpc_type_id | int(11) | YES |  | NULL |  |  |
| dose_2_acpc_type_id | int(11) | YES |  | NULL |  |  |
| dose_3_acpc_type_id | int(11) | YES |  | NULL |  |  |
| dose_4_acpc_type_id | int(11) | YES |  | NULL |  |  |
| unit_per_day | int(11) | YES |  | NULL |  |  |
| day_per_qty | double(15,3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| line1 | varchar(250) | YES |  | NULL |  |  |
| line2 | varchar(250) | YES |  | NULL |  |  |
| line3 | varchar(250) | YES |  | NULL |  |  |
| line4 | varchar(250) | YES |  | NULL |  |  |
| dose_note | varchar(200) | YES |  | NULL |  |  |
| total_day | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | yes | 1 |
| PRIMARY | opi_disp_ds_calc_1_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
