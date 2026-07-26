# `arv_drug_effect`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| arv_drug_effect_id | int(11) | NO | PRI | 0 |  |  |
| arv_drug_effect_items_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| nrti | varchar(100) | YES |  | NULL |  |  |
| nnrti | varchar(100) | YES |  | NULL |  |  |
| pi | varchar(100) | YES |  | NULL |  |  |
| integrase | varchar(100) | YES |  | NULL |  |  |
| resis_other_chk1 | varchar(100) | YES |  | NULL |  |  |
| resis_other_chk2 | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_arv_drug_effect_items_id | arv_drug_effect_items_id | no | 1 |
| ix_hn | hn | no | 1 |
| PRIMARY | arv_drug_effect_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
