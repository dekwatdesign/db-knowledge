# `dt_fixed_recall9`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_fixed_recall9_id | int(11) | NO | PRI | 0 |  |  |
| dt_fixed_recall9_grp_chk | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_recall9_over_year | int(11) | YES |  | NULL |  |  |
| dt_fixed_recall9_over_month | int(11) | YES |  | NULL |  |  |
| dt_fixed_recall9_note | text | YES |  | NULL |  |  |
| dt_fixed_recall_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_fixed_main_id | dt_fixed_recall_id | no | 1 |
| PRIMARY | dt_fixed_recall9_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
