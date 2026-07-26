# `arv_drug_resist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| arv_drug_resist_id | int(11) | NO | PRI | 0 |  |  |
| arv_drug_resist_name | varchar(100) | YES |  | NULL |  |  |
| arv_drug_resist_group_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_arv_drug_resist_group_id | arv_drug_resist_group_id | no | 1 |
| PRIMARY | arv_drug_resist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
