# `bb_blood_bag_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_blood_bag_detail_id | int(11) | NO | PRI | 0 |  |  |
| bb_blood_source_id | int(11) | YES |  | NULL |  |  |
| bb_blood_bag_id | int(11) | YES |  | NULL |  |  |
| bb_blood_product_group_id | int(11) | YES |  | NULL |  |  |
| bb_blood_cc | int(11) | YES |  | NULL |  |  |
| bb_blood_pay_id | int(11) | YES |  | NULL |  |  |
| bb_blood_pay_type | char(1) | YES |  | NULL |  |  |
| bb_blood_pay | char(1) | YES |  | NULL |  |  |
| bb_blood_pay_system | char(1) | YES |  | NULL |  |  |
| bb_blood_pay_expire | date | YES |  | NULL |  |  |
| bb_blood_expire | date | YES |  | NULL |  |  |
| bb_blood_history | varchar(50) | YES |  | NULL |  |  |
| bb_blood_pdate | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_blood_bag_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
