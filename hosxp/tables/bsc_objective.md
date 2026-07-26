# `bsc_objective`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bsc_objective_id | int(11) | NO | PRI | 0 |  |  |
| bsc_objective_name | varchar(200) | YES |  | NULL |  |  |
| bsc_perspective_id | int(11) | YES | MUL | NULL |  |  |
| bsc_objective_desc_text | longtext | YES |  | NULL |  |  |
| bsc_measure_text | longtext | YES |  | NULL |  |  |
| bsc_target_text | longtext | YES |  | NULL |  |  |
| bsc_str_initiative_text | longtext | YES |  | NULL |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |
| project_count | int(11) | YES |  | NULL |  |  |
| total_budget | double(15,3) | YES |  | NULL |  |  |
| total_income | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bsc_perspective_id | bsc_perspective_id | no | 1 |
| PRIMARY | bsc_objective_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
