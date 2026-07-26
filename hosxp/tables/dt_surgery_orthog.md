# `dt_surgery_orthog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_orthog_id | int(11) | NO | PRI | 0 |  |  |
| dt_orthog_dev_dor_chk | varchar(10) | YES |  | NULL |  |  |
| dt_orthog_dev_col_chk | varchar(10) | YES |  | NULL |  |  |
| dt_orthog_maxillary_chk | varchar(10) | YES |  | NULL |  |  |
| dt_orthog_maxillary_rt | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_maxillary_lf | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_dev_dor_rt | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_dev_dor_lf | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_dev_col_rt | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_dev_col_lf | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_incom_chk | varchar(10) | YES |  | NULL |  |  |
| dt_orthog_incom_val | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_upper_val | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_gum_ant_val | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_gum_post_rt | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_gum_post_lf | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_sym_up_rt | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_sym_up_lf | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_sym_low_rt | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_sym_low_lf | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_sym_chin_rt | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_sym_chin_lf | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_prof_chk | varchar(50) | YES |  | NULL |  |  |
| dt_orthog_overjet_val | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_overbite_val | double(11,1) | YES |  | NULL |  |  |
| dt_orthog_crossbite_chk | varchar(10) | YES |  | NULL |  |  |
| dt_orthog_crossbite_txt | varchar(100) | YES |  | NULL |  |  |
| dt_orthog_sci_chk | varchar(10) | YES |  | NULL |  |  |
| dt_orthog_sci_txt | varchar(100) | YES |  | NULL |  |  |
| dt_orthog_ang_mol_rt_chk | varchar(20) | YES |  | NULL |  |  |
| dt_orthog_ang_mol_lt_chk | varchar(20) | YES |  | NULL |  |  |
| dt_orthog_ang_mol_rt_txt | varchar(100) | YES |  | NULL |  |  |
| dt_orthog_ang_mol_lt_txt | varchar(100) | YES |  | NULL |  |  |
| dt_orthog_ang_can_rt_chk | varchar(20) | YES |  | NULL |  |  |
| dt_orthog_ang_can_lt_chk | varchar(20) | YES |  | NULL |  |  |
| dt_orthog_ang_can_rt_txt | varchar(100) | YES |  | NULL |  |  |
| dt_orthog_ang_can_lt_txt | varchar(100) | YES |  | NULL |  |  |
| dt_orthog_miss_chk | varchar(10) | YES |  | NULL |  |  |
| dt_orthog_imp_chk | varchar(10) | YES |  | NULL |  |  |
| dt_orthog_tmj_chk | varchar(10) | YES |  | NULL |  |  |
| dt_orthog_surgical_note | text | YES |  | NULL |  |  |
| dt_orthog_miss_txt | varchar(100) | YES |  | NULL |  |  |
| dt_orthog_imp_txt | varchar(100) | YES |  | NULL |  |  |
| dt_orthog_tmj_txt | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_surgery_orthog_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
