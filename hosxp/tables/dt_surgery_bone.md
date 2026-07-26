# `dt_surgery_bone`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_bone_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_bone_area | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_bone_anes_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_bone_dor_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_bone_dor_chk_grp | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_bone_rec_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_bone_rec_chk_grp | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_bone_anes_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_bone_la_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_bone_la_qty | int(11) | YES |  | NULL |  |  |
| dt_surgery_bone_diag1 | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_bone_diag2 | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_bone_auto_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_bone_auto_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_bone_auto_bl_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_bone_auto_par_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_bone_auto_volume | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_bone_sub_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_bone_sub_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_bone_sub_volume | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_bone_addi_note | text | YES |  | NULL |  |  |
| dt_surgery_bone_begin_time | time | YES |  | NULL |  |  |
| dt_surgery_bone_end_time | time | YES |  | NULL |  |  |
| dt_surgery_bone_special_chk | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_bone_special_note | longtext | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_bone_date | date | YES |  | NULL |  |  |
| dt_surgery_bone_mem_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_bone_mem_volume | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_bone_mem_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_bone_add_date | date | YES |  | NULL |  |  |
| dt_surgery_bone_edit_date | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main11 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_bone_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
