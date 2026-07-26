# `dt_endo_previous_tx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_endo_previous_tx_id | int(11) | NO | PRI | 0 |  |  |
| dt_endo_previous_none | char(1) | YES |  | NULL |  |  |
| dt_endo_previous_chk | varchar(150) | YES |  | NULL |  |  |
| dt_endo_previous_note | longtext | YES |  | NULL |  |  |
| dt_endo_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_endo_main31 | dt_endo_main_id | no | 1 |
| PRIMARY | dt_endo_previous_tx_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
