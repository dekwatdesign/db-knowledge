# `inv_durable_good_depric`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_depric_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_depric_year | int(11) | YES |  | NULL |  |  |
| inv_durable_good_depric_blc | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_depric_date | date | YES |  | NULL |  |  |
| inv_durable_good_depric_staff | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_depric_price | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_depric_rate | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_depric_cal_age | char(1) | YES |  | NULL |  |  |
| inv_durable_good_depric_cal_date | char(1) | YES |  | NULL |  |  |
| inv_durable_good_depric_cal_pc | char(1) | YES |  | NULL |  |  |
| inv_durable_good_depric_pc | int(11) | YES |  | NULL |  |  |
| depric_cal_age | char(1) | YES |  | NULL |  |  |
| depric_cal_date | char(1) | YES |  | NULL |  |  |
| period_no | int(11) | YES |  | NULL |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |
| acc_period | int(11) | YES | MUL | NULL |  |  |
| monthly_depreciation_amount | double(22,6) | YES |  | NULL |  |  |
| accu_depreciation_amount | double(22,6) | YES |  | NULL |  |  |
| item_remain_value | double(15,3) | YES |  | NULL |  |  |
| acc_transfer | char(1) | YES |  | NULL |  |  |
| acc_journal_id | int(11) | YES |  | NULL |  |  |
| day_count | int(11) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| ass_no | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_durable_good_depric_index | acc_period | no | 1 |
| ix_durable_good_depric_index | bdg_year | no | 2 |
| ix_durable_good_depric_index | inv_durable_good_id | no | 3 |
| PRIMARY | inv_durable_good_depric_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
