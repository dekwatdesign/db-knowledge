# `village_store_cfgt_evaluate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_store_cfgt_evaluate_id | int(11) | NO | PRI | 0 |  |  |
| village_store_id | int(11) | YES | MUL | NULL |  |  |
| bdg_year | int(11) | YES | MUL | NULL |  |  |
| evaluate_date | date | YES |  | NULL |  |  |
| pass_cfgt | char(1) | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bdg_year | bdg_year | no | 1 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_store_id | village_store_id | no | 1 |
| PRIMARY | village_store_cfgt_evaluate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
