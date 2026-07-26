# `inv_durable_good_calibration`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_cali_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_cali_detail | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_cali_menuf | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_cali_model | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_cali_sn | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_cali_idno | varchar(250) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_cali_addr | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_cali_sec | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_cali_temp | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_cali_cdate | date | YES |  | NULL |  |  |
| inv_durable_good_cali_adate | date | YES |  | NULL |  |  |
| inv_durable_good_id | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_cali_approve | char(1) | YES |  | NULL |  |  |
| inv_durable_good_cali_note | text | YES |  | NULL |  |  |
| inv_durable_good_cali_scan | longblob | YES |  | NULL |  |  |
| inv_durable_good_cali_filename | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_cali_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
