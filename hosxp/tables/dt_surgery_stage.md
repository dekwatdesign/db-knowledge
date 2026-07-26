# `dt_surgery_stage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_stage_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_stage_date | date | YES |  | NULL |  |  |
| dt_surgery_stage_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_stage_bone_area | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_stage_bone_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_stage_can_val | double(15,2) | YES |  | NULL |  |  |
| dt_surgery_stage_blk_val | double(15,2) | YES |  | NULL |  |  |
| dt_surgery_stage_bone | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_stage_bone_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_stage_used_chk | varchar(30) | YES |  | NULL |  |  |
| dt_surgery_stage_used_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_stage_used_size | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_stage_soft_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_stage_soft_chk_grp | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_stage_qty_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_stage_size1 | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_stage_size2 | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_stage_size3 | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_stage_par | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_stage_mem_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_stage_type_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_stage_type_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_stage_prf_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_stage_sur_note | text | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dtarea | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_add_date | date | YES |  | NULL |  |  |
| dt_surgery_edit_datetime | datetime | YES |  | NULL |  |  |
| dt_surgery_oper_imp_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main9 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_stage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
