# `ovst_sss_service_other`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_sss_service_other_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(50) | YES | MUL | NULL |  |  |
| service_id | varchar(50) | YES |  | NULL |  |  |
| service_class | varchar(2) | YES |  | NULL |  |  |
| hospital_code | varchar(9) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| care_account | varchar(1) | YES |  | NULL |  |  |
| type_service | varchar(2) | YES |  | NULL |  |  |
| type_in | varchar(1) | YES |  | NULL |  |  |
| type_out | varchar(1) | YES |  | NULL |  |  |
| date_appoint | date | YES |  | NULL |  |  |
| service_pid | varchar(25) | YES |  | NULL |  |  |
| clinic | varchar(2) | YES |  | NULL |  |  |
| begin_datetime | datetime | YES |  | NULL |  |  |
| end_datetime | datetime | YES |  | NULL |  |  |
| lc_code | varchar(10) | YES |  | NULL |  |  |
| code_set | varchar(2) | YES |  | NULL |  |  |
| std_code | varchar(20) | YES |  | NULL |  |  |
| service_charge_amount | double(15,3) | YES |  | NULL |  |  |
| completion | char(1) | YES |  | NULL |  |  |
| service_tx_code | varchar(10) | YES |  | NULL |  |  |
| claim_category | varchar(3) | YES |  | NULL |  |  |
| invno | varchar(25) | YES | MUL | NULL |  |  |
| ref_key | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_invno | invno | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_sss_service_other_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
