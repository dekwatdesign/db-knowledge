# `dt_surgery_cort`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_cort_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_cord_area | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cort_diag | text | YES |  | NULL |  |  |
| dt_surgery_cort_graft_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_cort_graft_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cort_auto_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cort_auto_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_cort_auto_bl_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_cort_auto_par_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_cort_auto_volume | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_cort_sub_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_cort_sub_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cort_sub_volume | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_cort_addi_note | longtext | YES |  | NULL |  |  |
| dt_surgery_cort_post_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_cort_post_chk_grp | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cort_post_other | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_cort_date | date | YES |  | NULL |  |  |
| dt_surgery_cort_add | date | YES |  | NULL |  |  |
| dt_surgery_cort_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main13 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_cort_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
