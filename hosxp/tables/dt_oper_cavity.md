# `dt_oper_cavity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_oper_cavity_id | int(11) | NO | PRI | 0 |  |  |
| dt_oper_cavity_liner_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_cavity_liner_complete | varchar(20) | YES |  | NULL |  |  |
| dt_oper_cavity_base_chk | varchar(10) | YES |  | NULL |  |  |
| dt_oper_cavity_base_complete | varchar(20) | YES |  | NULL |  |  |
| dt_oper_cavity_ption_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_cavity_ption_complete | varchar(20) | YES |  | NULL |  |  |
| dt_oper_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_cavity_liner_grpchk | varchar(255) | YES |  | NULL |  |  |
| dt_oper_cavity_base_grpchk | varchar(255) | YES |  | NULL |  |  |
| dt_oper_caries_calbrand1_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_gicbrand1_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_rmbrand1_id | int(11) | YES |  | NULL |  |  |
| dt_oper_cavity_liner_note | varchar(255) | YES |  | NULL |  |  |
| dt_oper_cavity_base_note | varchar(255) | YES |  | NULL |  |  |
| dt_oper_caries_gicbrand2_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_rmbrand2_id | int(11) | YES |  | NULL |  |  |
| dt_oper_caries_zinbrand2_id | int(11) | YES |  | NULL |  |  |
| dt_oper_zinc_phos_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_oper_main24 | dt_oper_main_id | no | 1 |
| PRIMARY | dt_oper_cavity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
