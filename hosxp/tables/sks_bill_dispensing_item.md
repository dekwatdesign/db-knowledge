# `sks_bill_dispensing_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_bill_dispensing_item_id | int(11) | NO | PRI | 0 |  |  |
| sks_bill_dispensing_id | int(11) | YES |  | NULL |  |  |
| product_category | char(1) | YES |  | NULL |  |  |
| hospital_drug_id | varchar(100) | YES |  | NULL |  |  |
| drug_id | varchar(25) | YES |  | NULL |  |  |
| dfs_code | varchar(100) | YES |  | NULL |  |  |
| dfs_text | varchar(200) | YES |  | NULL |  |  |
| pack_size | varchar(50) | YES |  | NULL |  |  |
| sig_code | varchar(150) | YES |  | NULL |  |  |
| sig_text | varchar(250) | YES |  | NULL |  |  |
| quantity | int(11) | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| charge_amount | double(15,3) | YES |  | NULL |  |  |
| reimb_price | double(15,3) | YES |  | NULL |  |  |
| reimb_amount | double(15,3) | YES |  | NULL |  |  |
| product_selection | char(1) | YES |  | NULL |  |  |
| refill | char(1) | YES |  | NULL |  |  |
| claim_control | char(2) | YES |  | NULL |  |  |
| claim_category | varchar(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | sks_bill_dispensing_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
