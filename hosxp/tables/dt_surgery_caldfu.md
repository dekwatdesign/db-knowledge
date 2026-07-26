# `dt_surgery_caldfu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_caldfu_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_cald_cause | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_fu_op_day | date | YES |  | NULL |  |  |
| dt_surgery_fu_follow | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_fu_status | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_fu_note | text | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_add_date | date | YES |  | NULL |  |  |
| dt_surgery_edit_date | datetime | YES |  | NULL |  |  |
| dt_surgery_fol_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_surgery_caldfu_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
