# `dt_surgery_impact`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_impact_id | int(11) | NO | PRI | 0 |  |  |
| dtarea | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_impact_angu_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_impact_posi_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_impact_class_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_impact_tissue_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_impact_rel_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_impact_rel_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_impact_peri_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_impact_peri_area | varchar(250) | YES |  | NULL |  |  |
| dt_surgery_impact_begin_time | time | YES |  | NULL |  |  |
| dt_surgery_impact_end_time | time | YES |  | NULL |  |  |
| dt_surgery_impact_comp_note | text | YES |  | NULL |  |  |
| dt_surgery_impact_post_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_impact_post_date | date | YES |  | NULL |  |  |
| dt_surgery_impact_pa_area | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_impact_in_area | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_impact_post_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_relate_type_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_add_or_edit_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main2 | dt_surgery_main_id | no | 1 |
| ix_Refdt_surgery_relate_type1 | dt_surgery_relate_type_id | no | 1 |
| PRIMARY | dt_surgery_impact_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
