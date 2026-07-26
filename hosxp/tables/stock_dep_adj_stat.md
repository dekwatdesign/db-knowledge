# `stock_dep_adj_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_adj_stat_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stat_date | date | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| stat_time | time | YES |  | NULL |  |  |
| stat_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_dep_adj_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
