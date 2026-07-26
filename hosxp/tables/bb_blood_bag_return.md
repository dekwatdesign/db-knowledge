# `bb_blood_bag_return`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_blood_bag_return_id | int(11) | NO | PRI | 0 |  |  |
| bb_blood_bag_return_date | date | YES |  | NULL |  |  |
| bb_blood_bag_unit_id | varchar(11) | YES |  | NULL |  |  |
| bb_blood_product_group_id | int(11) | YES |  | NULL |  |  |
| bb_blood_bag_detail_id | int(11) | YES |  | NULL |  |  |
| bb_blood_pay_id | int(11) | YES |  | NULL |  |  |
| bb_blood_pay_type | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_blood_bag_return_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
