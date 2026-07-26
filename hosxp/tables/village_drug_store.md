# `village_drug_store`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_drug_store_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| village_drug_store_type_id | int(11) | YES |  | NULL |  |  |
| village_drug_store_name | varchar(250) | YES |  | NULL |  |  |
| village_drug_store_owner_name | varchar(250) | YES |  | NULL |  |  |
| village_drug_store_register_date | date | YES |  | NULL |  |  |
| village_drug_store_addr1 | varchar(250) | YES |  | NULL |  |  |
| village_drug_store_addr2 | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| gis_latitude | varchar(100) | YES |  | NULL |  |  |
| gis_longitude | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_id | village_id | no | 1 |
| PRIMARY | village_drug_store_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
