# `dt_endo_txplan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_endo_txplan_id | int(11) | NO | PRI | 0 |  |  |
| dt_endo_main_id | int(11) | YES |  | NULL |  |  |
| dt_endo_txplan_pre_chk | varchar(255) | YES |  | NULL |  |  |
| dt_endo_txplan_pre_note | varchar(500) | YES |  | NULL |  |  |
| dt_endo_txplan_tx_chk | varchar(255) | YES |  | NULL |  |  |
| dt_endo_txplan_tx_note | varchar(500) | YES |  | NULL |  |  |
| dt_endo_txplan_anti_chk | varchar(255) | YES |  | NULL |  |  |
| dt_endo_txplan_anti_note | varchar(500) | YES |  | NULL |  |  |
| dt_endo_txplan_note | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_endo_txplan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
