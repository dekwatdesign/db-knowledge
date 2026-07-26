# `stock_drug_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| item_id | int(11) | NO | PRI | 0 |  |  |
| item_drug_account | char(1) | YES |  | NULL |  |  |
| item_account_type | char(3) | YES |  | NULL |  |  |
| item_dosage_form | varchar(50) | YES |  | NULL |  |  |
| pharmacology_group_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| pharmacology_group2 | int(11) | YES |  | NULL |  |  |
| pharmacology_group3 | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
