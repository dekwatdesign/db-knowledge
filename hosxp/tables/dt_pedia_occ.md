# `dt_pedia_occ`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_occ_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_occ_facial | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_occ_overb | double(15,2) | YES |  | NULL |  |  |
| dt_pedia_occ_openb | double(15,2) | YES |  | NULL |  |  |
| dt_pedia_occ_overj | double(15,2) | YES |  | NULL |  |  |
| dt_pedia_occ_dias | double(15,2) | YES |  | NULL |  |  |
| dt_pedia_occ_primary_left | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_occ_primary_right | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_occ_perpanent_left | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_occ_perpanent_right | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_occ_canine_left | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_occ_canine_right | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_occ_mid | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_occ_mid_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_occ_cross | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_occ_cross_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_occ_spac | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_occ_spac_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_occ_gross | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_occ_gross_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_occ_d_dev | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_occ_d_dev_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_occ_tmj_opp | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_occ_tmj_opp_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_occ_tmj_cls | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_occ_tmj_cls_note | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_occ_tmj_op | double(18,2) | YES |  | NULL |  |  |
| dt_pedia_occ_tmj_op_note | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_occ_tmj_op_type | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_occ_tmj_joint | varchar(3) | YES |  | NULL |  |  |
| dt_pedia_occ_tmj_joint_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_occ_behav_coo | varchar(30) | YES |  | NULL |  |  |
| dt_pedia_occ_behav_coo_p | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_pedia_occ_maxillary | varchar(200) | YES |  | NULL |  |  |
| dt_pedia_occ_mandibular | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_main12 | dt_pedia_main_id | no | 1 |
| PRIMARY | dt_pedia_occ_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
