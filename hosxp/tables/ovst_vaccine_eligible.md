# `ovst_vaccine_eligible`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_vaccine_eligible_id | int(11) | NO | PRI | 0 |  |  |
| eligible_status | varchar(250) | YES |  | NULL |  |  |
| eligible_note | varchar(250) | YES |  | NULL |  |  |
| eligible_check_datetime | datetime | YES |  | NULL |  |  |
| eligible_check_status_code | int(11) | YES |  | NULL |  |  |
| eligible_check_staff | varchar(50) | YES |  | NULL |  |  |
| claim_status_code | int(11) | YES |  | NULL |  |  |
| claim_status | varchar(250) | YES |  | NULL |  |  |
| claim_note | varchar(250) | YES |  | NULL |  |  |
| claim_transaction_uid | varchar(100) | YES |  | NULL |  |  |
| claim_staff | varchar(50) | YES |  | NULL |  |  |
| claim_datetime | datetime | YES |  | NULL |  |  |
| claim_nhso_pay_status | varchar(250) | YES |  | NULL |  |  |
| claim_nhso_pay_check_datetime | datetime | YES |  | NULL |  |  |
| claim_nhso_pay_check_staff | varchar(50) | YES |  | NULL |  |  |
| mohpromt_did_status | varchar(100) | YES |  | NULL |  |  |
| mohpromt_did_check_datetime | datetime | YES |  | NULL |  |  |
| ovst_vaccine_id | int(11) | YES |  | NULL |  |  |
| ovst_nhso_eligible_id | int(11) | YES | MUL | NULL |  |  |
| ref_key_code | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ovst_vaccine_id_index | ovst_nhso_eligible_id | yes | 1 |
| ix_ovst_vaccine_id_index | ovst_vaccine_id | yes | 2 |
| ix_ovst_vaccine_id_index | ref_key_code | yes | 3 |
| PRIMARY | ovst_vaccine_eligible_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
