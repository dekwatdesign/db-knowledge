# `contract_partner`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| contract_id | int(11) | NO | PRI | 0 |  |  |
| contract_name | varchar(150) | YES | MUL | NULL |  |  |
| contract_detail | longblob | YES |  | NULL |  |  |
| contract_begin_date | date | YES |  | NULL |  |  |
| contract_end_date | date | YES |  | NULL |  |  |
| contract_discount_percent | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_contract_name | contract_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | contract_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
