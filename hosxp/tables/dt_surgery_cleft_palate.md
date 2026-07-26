# `dt_surgery_cleft_palate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_cleft_palate_id | int(11) | NO | PRI | 0 |  |  |
| dt_cleft_pal_diag_chk1 | varchar(100) | YES |  | NULL |  |  |
| dt_cleft_pal_diag_chk2 | varchar(100) | YES |  | NULL |  |  |
| dt_cleft_pal_diag_chk3 | varchar(100) | YES |  | NULL |  |  |
| dt_cleft_pal_sur_technique | text | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_add_date | date | YES |  | NULL |  |  |
| dt_surgery_edit_date | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_surgery_cleft_palate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
