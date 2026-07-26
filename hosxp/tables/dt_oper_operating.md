# `dt_oper_operating`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_oper_operating_id | char(10) | NO | PRI |  |  |  |
| dt_oper_operating_athetic_chk | varchar(30) | YES |  | NULL |  |  |
| dt_oper_operating_iso_chk | varchar(30) | YES |  | NULL |  |  |
| dt_oper_operating_iso_grp_chk | varchar(100) | YES |  | NULL |  |  |
| dt_oper_operating_iso_other | varchar(100) | YES |  | NULL |  |  |
| dt_oper_technique_type_id | int(11) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| dt_oper_amount_id | int(11) | YES |  | NULL |  |  |
| dt_oper_packing_id | int(11) | YES |  | NULL |  |  |
| dt_oper_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_step1_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_step2_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_step3_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_oper_amount7 | dt_oper_technique_type_id | no | 1 |
| ix_Refdt_oper_main8 | dt_oper_main_id | no | 1 |
| ix_Refdt_oper_packing9 | dt_oper_step1_id | no | 1 |
| ix_Refdt_tooth_class12 | dt_oper_step3_id | no | 1 |
| ix_Refdt_tooth_surface10 | dt_oper_step2_id | no | 1 |
| PRIMARY | dt_oper_operating_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
