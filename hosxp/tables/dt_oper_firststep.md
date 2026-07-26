# `dt_oper_firststep`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_oper_firststep_id | int(11) | NO | PRI | 0 |  |  |
| dt_oper_firststep_begining_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_sengrp_chk | varchar(100) | YES |  | NULL |  |  |
| dt_oper_firststep_duration | int(11) | YES |  | NULL |  |  |
| dt_oper_firststep_unit | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_value | int(11) | YES |  | NULL |  |  |
| dt_oper_firststep_ept2_value | int(11) | YES |  | NULL |  |  |
| dt_oper_firststep_percusion | varchar(50) | YES |  | NULL |  |  |
| dt_oper_firststep_xray_note | text | YES |  | NULL |  |  |
| dt_oper_firststep_other_note | text | YES |  | NULL |  |  |
| dt_oper_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_tooth_surface | varchar(250) | YES | MUL | NULL |  |  |
| dt_tooth_class_id | int(11) | YES | MUL | NULL |  |  |
| dtarea_code1 | varchar(10) | YES |  | NULL |  |  |
| dtarea_code2 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_tip_cusp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_dofp_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_dofpgrp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_cold_test_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_cold_test_rdo | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_oss_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ossgrp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_pm_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_pmgrp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_sinp_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_sinpgrp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_eptgrp2_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_eptgrp1_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_tofpgrp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_percss_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_stoab_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_hx_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_xray_find_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_dofp_specify_note | text | YES |  | NULL |  |  |
| dt_oper_firststep_tofp_other_note | text | YES |  | NULL |  |  |
| dt_oper_firststep_other_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_pm_specify_note | text | YES |  | NULL |  |  |
| dt_tooth_surface1 | varchar(50) | YES |  | NULL |  |  |
| dt_tooth_surface2 | varchar(50) | YES |  | NULL |  |  |
| dt_tooth_surface3 | varchar(50) | YES |  | NULL |  |  |
| dt_tooth_surface4 | varchar(50) | YES |  | NULL |  |  |
| dt_tooth_surface5 | varchar(50) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_b1 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_l1 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_mb1 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_db1 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_ml1 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_dl1 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_b1 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_l1 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_mb1 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_db1 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_ml1 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_dl1 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_b2 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_l2 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_mb2 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_db2 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_ml2 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_not_dl2 | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_b2 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_l2 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_mb2 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_db2 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_ml2 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_ept_cur_dl2 | double(15,2) | YES |  | NULL |  |  |
| dt_oper_firststep_continuous_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_sens_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_sensgrp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_sens_note | text | YES |  | NULL |  |  |
| dt_oper_firststep_hx_confirm | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_tofp_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_percssb_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_percssb_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_percssl_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_percssl_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_percssmb_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_percssmb_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_percssdb_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_percssdb_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_percssml_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_percssml_grp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_firststep_percssdl_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_firststep_percssdl_grp | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_oper_main1 | dt_oper_main_id | no | 1 |
| ix_Refdt_tooth_class4 | dt_tooth_class_id | no | 1 |
| ix_Refdt_tooth_surface2 | dt_tooth_surface | no | 1 |
| PRIMARY | dt_oper_firststep_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
