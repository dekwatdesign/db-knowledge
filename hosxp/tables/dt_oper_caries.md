# `dt_oper_caries`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_oper_caries_id | int(11) | NO | PRI | 0 |  |  |
| dt_oper_caries_remove_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_caries_remove_comp | varchar(20) | YES |  | NULL |  |  |
| dt_oper_caries_control_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_caries_control_grpchk | varchar(100) | YES |  | NULL |  |  |
| dt_oper_caries_ccabrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_cgibrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_crmbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caires_czinbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caires_cor_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_caries_stepwise_chk | varchar(50) | YES |  | NULL |  |  |
| dt_oper_caries_stepwise_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_stepwise_grpchk | varchar(100) | YES |  | NULL |  |  |
| dt_oper_caries_scbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_sgibrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_srmbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caires_szinbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_sor_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_caries_indirect_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_caries_indirect_grpchk | varchar(100) | YES |  | NULL |  |  |
| dt_oper_caries_icalbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_igibrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_irmbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caires_izinbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_ior_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_caries_direct_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_caries_pulp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_caries_lacation_note | text | YES |  | NULL |  |  |
| dt_oper_caries_symtom_chk | varchar(150) | YES |  | NULL |  |  |
| dt_oper_caries_symtom_note | varchar(255) | YES |  | NULL |  |  |
| dt_oper_caries_systom_value | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_dpulp_grpchk | varchar(100) | YES |  | NULL |  |  |
| dt_oper_caries_dcalbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_dglbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_drmbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_size_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_stepwise_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_control_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_main_id | int(11) | YES |  | NULL |  |  |
| dt_oper_mositure_id | int(11) | YES |  | NULL |  |  |
| dt_oper_prognosis_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_dzinbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_dor_note | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_oper_mositure35 | dt_oper_control_id | no | 1 |
| ix_Refdt_oper_size26 | dt_oper_size_id | no | 1 |
| ix_Refdt_oper_stepwise31 | dt_oper_stepwise_id | no | 1 |
| PRIMARY | dt_oper_caries_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
