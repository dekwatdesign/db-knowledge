# `dt_surgery_main`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_main_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| dtarea_impac | varchar(200) | YES |  | NULL |  |  |
| imp_emb_chk | int(11) | YES |  | NULL |  |  |
| auto_tooth_chk | int(11) | YES |  | NULL |  |  |
| cleft_chk | int(11) | YES |  | NULL |  |  |
| caldwell_luc_chk | int(11) | YES |  | NULL |  |  |
| implant_chk | int(11) | YES |  | NULL |  |  |
| sinus_chk | int(11) | YES |  | NULL |  |  |
| bone_graft_chk | int(11) | YES |  | NULL |  |  |
| biopsy_chk | int(11) | YES |  | NULL |  |  |
| surgical_chk | int(11) | YES |  | NULL |  |  |
| laser_chk | int(11) | YES |  | NULL |  |  |
| pathology_chk | int(11) | YES |  | NULL |  |  |
| orthognatic_chk | int(11) | YES |  | NULL |  |  |
| prep_chk | int(11) | YES |  | NULL |  |  |
| post_op_chk | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_surgery_main_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
