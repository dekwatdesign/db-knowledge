# `arv_drug_effect_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| arv_drug_effect_list_id | int(11) | NO | PRI | 0 |  |  |
| arv_drug_effect_id | int(11) | YES | MUL | NULL |  |  |
| arv_drug_resist_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_arv_drug_effect_id | arv_drug_effect_id | no | 1 |
| ix_arv_drug_resist_id | arv_drug_resist_id | no | 1 |
| PRIMARY | arv_drug_effect_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
