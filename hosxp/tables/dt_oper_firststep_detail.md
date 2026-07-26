# `dt_oper_firststep_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_oper_firststep_detail_id | int(11) | NO | PRI | 0 |  |  |
| dt_oper_firststep_tip_cusp | varchar(20) | YES |  | NULL |  |  |
| dt_tooth_surface1 | varchar(50) | YES |  | NULL |  |  |
| dt_tooth_class_id | int(11) | YES |  | NULL |  |  |
| dtarea_code1 | varchar(15) | YES |  | NULL |  |  |
| dt_tooth_surface2 | varchar(50) | YES |  | NULL |  |  |
| dt_tooth_surface3 | varchar(50) | YES |  | NULL |  |  |
| dt_tooth_surface4 | varchar(50) | YES |  | NULL |  |  |
| dt_tooth_surface5 | varchar(50) | YES |  | NULL |  |  |
| dt_oper_firststep_id | int(11) | YES |  | NULL |  |  |
| dt_oper_main_id | int(11) | YES |  | NULL |  |  |
| dt_tooth_surface | varchar(100) | YES |  | NULL |  |  |
| dt_oper_icd10tm | varchar(7) | YES |  | NULL |  |  |
| dt_oper_icd10 | varchar(7) | YES |  | NULL |  |  |
| dt_oper_icd9 | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_oper_firststep_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
