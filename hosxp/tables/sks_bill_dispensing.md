# `sks_bill_dispensing`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_bill_dispensing_id | int(11) | NO | PRI | 0 |  |  |
| sks_bill_id | int(11) | YES |  | NULL |  |  |
| provider_id | char(5) | YES |  | NULL |  |  |
| dispense_id | varchar(25) | YES |  | NULL |  |  |
| invoice_no | varchar(25) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| prescription_date | datetime | YES |  | NULL |  |  |
| prescriber | varchar(20) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| charge_amount | double(15,3) | YES |  | NULL |  |  |
| claim_amount | double(15,3) | YES |  | NULL |  |  |
| paid_amount | double(15,3) | YES |  | NULL |  |  |
| other_amount | double(15,3) | YES |  | NULL |  |  |
| reimburser | varchar(2) | YES |  | NULL |  |  |
| benefit_plan | varchar(2) | YES |  | NULL |  |  |
| dispense_status | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | sks_bill_dispensing_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
