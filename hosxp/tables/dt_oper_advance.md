# `dt_oper_advance`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_oper_advance_id | int(11) | NO | PRI | 0 |  |  |
| dt_oper_adv_endo_tt_tck | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_work_type | varchar(50) | YES |  | NULL |  |  |
| dt_oper_adv_work_pas_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pre_de_tck | varchar(50) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pre_de_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_non_pinc | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_non_pre_inc | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pre_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pre_value | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pre_mar_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pre_mar_al | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pre_mar_gi | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_type_tck | varchar(50) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_type_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_com_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_com_y_n | varchar(10) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_csha_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_adh_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_com_pic | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_por_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_bnd_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_psha_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat1_cebnd_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat2_type_tck | varchar(50) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat2_type_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat2_stl_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat2_stl_ot_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat2_csha_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat2_cbnd_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat2_rsha_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat2_rbnd_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_mat2_ot_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_cm_tck | varchar(50) | YES |  | NULL |  |  |
| dt_oper_adv_ven_cm_non_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_cm_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_cm_am_q_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_cm_am_p_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_cm_co_q_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_cm_co_p_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_cm_ot_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_tck | varchar(50) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_pbnd_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_pre_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_pre_lab | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_ptype_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_ptype_tck | varchar(50) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cpst_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cpst_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cptype_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cpt_ot_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cdsn_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_qty | int(11) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_lp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_lp_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_lp11 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_lp12 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_lp21 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_lp22 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_lp31 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_lp32 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_lp41 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cd_lp42 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_brand_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cmp_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cmpzi_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cmpgi_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cmprc_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cmpot_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cmc_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cmczi_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cmcgi_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cmcrc_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_pst_cmcot_txt | varchar(200) | YES |  | NULL |  |  |
| dt_oper_adv_ven_note | text | YES |  | NULL |  |  |
| dt_oper_main_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_oper_advance_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
