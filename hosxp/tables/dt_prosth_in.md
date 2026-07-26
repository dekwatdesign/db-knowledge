# `dt_prosth_in`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prosth_in_id | int(11) | NO | PRI | 0 |  |  |
| dt_prosth_in_eden_area1 | varchar(30) | YES |  | NULL |  |  |
| dt_prosth_in_eden_area_tooth1 | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_in_eden_area2 | varchar(30) | YES |  | NULL |  |  |
| dt_prosth_in_eden_area_tooth2 | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_in_denture_status | char(3) | YES |  | NULL |  |  |
| dt_prosth_in_denture_type | varchar(30) | YES |  | NULL |  |  |
| dt_prosth_in_denture_area | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_in_fre_type | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_in_fre_type_note | varchar(255) | YES |  | NULL |  |  |
| dt_prosth_in_fre_vest | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_in_fre_vest_note | varchar(255) | YES |  | NULL |  |  |
| dt_prosth_in_fl_mouth_an | double(18,2) | YES |  | NULL |  |  |
| dt_prosth_in_fl_mouth_post | double(18,2) | YES |  | NULL |  |  |
| dt_prosth_in_arch_upper | varchar(255) | YES |  | NULL |  |  |
| dt_prosth_in_arch_lower | varchar(255) | YES |  | NULL |  |  |
| dt_prosth_in_soft_tissue | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_in_inter_dic_type | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_in_inter_dic_note | double(18,2) | YES |  | NULL |  |  |
| dt_prosth_in_inter_dic_lanote | double(18,2) | YES |  | NULL |  |  |
| dt_prosth_in_ridge_class | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_in_ridge_tube | varchar(50) | YES |  | NULL |  |  |
| dt_prosth_in_ridge_tube_note | double(18,2) | YES |  | NULL |  |  |
| dt_prosth_in_tori | varchar(30) | YES |  | NULL |  |  |
| dt_prosth_in_tori_note | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_in_palatal | varchar(10) | YES |  | NULL |  |  |
| dt_prosth_in_lateral | varchar(10) | YES |  | NULL |  |  |
| dt_prosth_in_tonque_size | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_in_tonque_posit | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_in_tonque_pnote | varchar(255) | YES |  | NULL |  |  |
| dt_prosth_in_saliva | varchar(30) | YES |  | NULL |  |  |
| dt_prosth_in_saliva_note | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_prosth_in_con_teeth_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prosth_main41 | dt_prosth_main_id | no | 1 |
| PRIMARY | dt_prosth_in_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
