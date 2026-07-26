# `village_drug_store_picture`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_drug_store_picture_id | int(11) | NO | PRI | 0 |  |  |
| village_drug_store_id | int(11) | YES | MUL | NULL |  |  |
| village_drug_store_picture_blob | longblob | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_drug_store_id | village_drug_store_id | no | 1 |
| PRIMARY | village_drug_store_picture_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
