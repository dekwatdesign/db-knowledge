# `dt_pedia_visit_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_visit_plan_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_visit_plan_no | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_visit_plan_vn | int(11) | YES |  | NULL |  |  |
| dt_pedia_visit_plan_procedure | text | YES |  | NULL |  |  |
| dt_pedia_visit_plan_fee | double(15,2) | YES |  | NULL |  |  |
| dtarea_code | varchar(10) | YES | MUL | NULL |  |  |
| dt_tooth_surface_name | varchar(50) | YES | MUL | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_pedia_visit_plan_class | varchar(20) | YES |  | NULL |  |  |
| dt_tooth_surface_id | int(11) | YES | MUL | NULL |  |  |
| dt_pedia_visit_plan_tick | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_main8 | dt_pedia_main_id | no | 1 |
| ix_Refdt_pedia_vp_sur49 | dt_tooth_surface_name | no | 1 |
| ix_Refdt_pedia_vp_sur49_index | dt_tooth_surface_id | no | 1 |
| ix_Refdt_pedia_vp_tooth48 | dtarea_code | no | 1 |
| PRIMARY | dt_pedia_visit_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
