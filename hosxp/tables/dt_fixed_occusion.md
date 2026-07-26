# `dt_fixed_occusion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_fixed_occusion_id | int(11) | NO | PRI | 0 |  |  |
| dt_tooth_class_id1 | int(11) | YES |  | NULL |  |  |
| dt_tooth_class_id2 | int(11) | YES |  | NULL |  |  |
| dt_tooth_class_id3 | int(11) | YES |  | NULL |  |  |
| dt_tooth_class_id4 | int(11) | YES |  | NULL |  |  |
| dt_fixed_occusal_id | int(11) | YES | MUL | NULL |  |  |
| dt_fixed_occusal_id2 | int(11) | YES |  | NULL |  |  |
| dt_fixed_occusion_work_note1 | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_occusion_non_note1 | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_occusion_pro_note1 | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_occusion_work_note2 | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_occusion_non_note2 | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_occusion_pro_note2 | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_tooth_class_id1_note | varchar(150) | YES |  | NULL |  |  |
| dt_tooth_class_id2_note | varchar(150) | YES |  | NULL |  |  |
| dt_tooth_class_id3_note | varchar(150) | YES |  | NULL |  |  |
| dt_tooth_class_id4_note | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_fixed_main_id | dt_fixed_main_id | no | 1 |
| ix_dt_fixed_occusal_id | dt_fixed_occusal_id | no | 1 |
| PRIMARY | dt_fixed_occusion_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
