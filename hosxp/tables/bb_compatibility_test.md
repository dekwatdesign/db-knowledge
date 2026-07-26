# `bb_compatibility_test`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_compatibility_test_id | int(11) | NO | PRI | 0 |  |  |
| bb_blood_request_id | int(11) | YES |  | NULL |  |  |
| bb_ctestno | int(11) | YES |  | NULL |  |  |
| bb_blood_bag_unit_id | varchar(11) | YES |  | NULL |  |  |
| bb_axrt | char(2) | YES |  | NULL |  |  |
| bb_ax37 | char(2) | YES |  | NULL |  |  |
| bb_axat | char(2) | YES |  | NULL |  |  |
| bb_bxrt | char(2) | YES |  | NULL |  |  |
| bb_bx37 | char(2) | YES |  | NULL |  |  |
| bb_bxat | char(2) | YES |  | NULL |  |  |
| bb_cres | char(1) | YES |  | NULL |  |  |
| bb_cusr | varchar(30) | YES |  | NULL |  |  |
| bb_cdatetime | varchar(20) | YES |  | NULL |  |  |
| bb_blood_product_group_id | int(11) | YES |  | NULL |  |  |
| bb_blood_bag_detail_id | int(11) | YES |  | NULL |  |  |
| bb_blood_pay | char(1) | YES |  | NULL |  |  |
| bb_blood_pay_system | char(1) | YES |  | NULL |  |  |
| bb_blood_pay_expire | date | YES |  | NULL |  |  |
| bb_symptom | varchar(255) | YES |  | NULL |  |  |
| bb_blood_pay_staff | varchar(50) | YES |  | NULL |  |  |
| bb_blood_pay_date | datetime | YES |  | NULL |  |  |
| bb_method | varchar(10) | YES |  | NULL |  |  |
| bb_cusr2 | varchar(30) | YES |  | NULL |  |  |
| bb_print | char(1) | YES |  | NULL |  |  |
| bb_blood_pay_staff2 | varchar(50) | YES |  | NULL |  |  |
| bb_blood_unlock | char(1) | YES |  | NULL |  |  |
| bb_unlock_lastupd | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_compatibility_test_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
