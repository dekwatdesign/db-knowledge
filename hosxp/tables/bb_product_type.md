# `bb_product_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_product_type_id | int(11) | NO | PRI | 0 |  |  |
| bb_product_type_code | varchar(3) | YES |  | NULL |  |  |
| bb_product_type_name | varchar(200) | YES |  | NULL |  |  |
| bb_product_type_nm | varchar(100) | YES |  | NULL |  |  |
| bb_product_cel | char(1) | YES |  | NULL |  |  |
| bb_product_plt | char(1) | YES |  | NULL |  |  |
| bb_product_pls | char(1) | YES |  | NULL |  |  |
| bb_product_age | int(11) | YES |  | NULL |  |  |
| bb_blood_bag_type_id | int(11) | YES |  | NULL |  |  |
| bb_product_group_id | int(11) | YES |  | NULL |  |  |
| bb_blood_centrifuge_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_product_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
