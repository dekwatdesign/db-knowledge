# `dt_surgery_prep`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_prep_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_prep_hight_area | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_prep_hight_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_prep_hight_chk_grp | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_prep_ftomy_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_prep_shallow_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_prep_shallow_area | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_prep_vestibu_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_prep_vestibu_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_prep_hyper_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_prep_hyper_area | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_prep_excision_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_prep_excision_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_prep_ex_other_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_prep_ex_other_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_prep_inade_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_prep_inade_chk_grp | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_prep_grow_chk_grp | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_prep_exos_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_prep_exos_area | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_prep_torus_chk | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_prep_torus_chk_grp | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_prep_begin_time | time | YES |  | NULL |  |  |
| dt_surgery_prep_end_time | time | YES |  | NULL |  |  |
| dt_surgery_prep_surgical_note | longtext | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_prep_date | date | YES |  | NULL |  |  |
| dt_surgery_add_or_edit_date | datetime | YES |  | NULL |  |  |
| dt_surgery_prep_ftomy_note | varchar(500) | YES |  | NULL |  |  |
| dt_surgery_prep_comp_note | text | YES |  | NULL |  |  |
| dt_surgery_post_oper_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_day_occ | date | YES |  | NULL |  |  |
| dt_surgery_pares_area | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_infec_area | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_prep_crow_chk_grp | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_prep_oper | varchar(200) | YES |  | NULL |  |  |
| dt_all_area | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main3 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_prep_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
