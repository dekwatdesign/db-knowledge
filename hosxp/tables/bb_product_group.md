# `bb_product_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_product_group_id | int(11) | NO | PRI | 0 |  |  |
| bb_product_group_code | varchar(3) | YES |  | NULL |  |  |
| bb_product_group_name | varchar(200) | YES |  | NULL |  |  |
| bb_product_group_nm | varchar(100) | YES |  | NULL |  |  |
| bb_price_service | varchar(7) | YES |  | NULL |  |  |
| bb_price_product | varchar(7) | YES |  | NULL |  |  |
| bb_price_redcross | varchar(7) | YES |  | NULL |  |  |
| bb_price_other | varchar(7) | YES |  | NULL |  |  |
| bb_product_abx | varchar(5) | YES |  | NULL |  |  |
| bb_price_gel | varchar(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_product_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
