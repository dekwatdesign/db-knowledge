# `stock_item_regist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| regno | varchar(50) | NO | PRI |  |  |  |
| standard_code | varchar(15) | YES | MUL | NULL |  |  |
| tcode | varchar(50) | YES |  | NULL |  |  |
| company_code | varchar(10) | YES | MUL | NULL |  |  |
| trade_name | varchar(150) | YES | MUL | NULL |  |  |
| dosage_form | varchar(100) | YES |  | NULL |  |  |
| strength | varchar(150) | YES |  | NULL |  |  |
| manufacturer | varchar(150) | YES |  | NULL |  |  |
| country | varchar(100) | YES |  | NULL |  |  |
| atc_group | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| company_code | company_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | regno | yes | 1 |
| standard_code | standard_code | no | 1 |
| trade_name | trade_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
