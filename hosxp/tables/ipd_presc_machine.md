# `ipd_presc_machine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_presc_machine_id | int(11) | NO | PRI | 0 |  |  |
| presc_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| pname | varchar(15) | YES |  | NULL |  |  |
| fname | varchar(30) | YES |  | NULL |  |  |
| lname | varchar(30) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| dname | varchar(150) | YES |  | NULL |  |  |
| qty | double(15,3) | YES |  | NULL |  |  |
| dose | double(15,3) | YES |  | NULL |  |  |
| modify_datetime | datetime | YES |  | NULL |  |  |
| modify_staff | varchar(25) | YES |  | NULL |  |  |
| modify_computer | varchar(30) | YES |  | NULL |  |  |
| print_sticker | char(1) | YES |  | NULL |  |  |
| usage_code | varchar(10) | YES |  | NULL |  |  |
| usage_line1 | varchar(150) | YES |  | NULL |  |  |
| usage_line2 | varchar(150) | YES |  | NULL |  |  |
| usage_line3 | varchar(150) | YES |  | NULL |  |  |
| usage_line4 | varchar(150) | YES |  | NULL |  |  |
| usage_unit_code | varchar(10) | YES |  | NULL |  |  |
| usage_unit_name | varchar(150) | YES |  | NULL |  |  |
| frequency_code | varchar(10) | YES |  | NULL |  |  |
| frequency_name | varchar(200) | YES |  | NULL |  |  |
| time_code | varchar(10) | YES |  | NULL |  |  |
| time_name | varchar(150) | YES |  | NULL |  |  |
| dose_usage_unit_name | varchar(150) | YES |  | NULL |  |  |
| ward | varchar(7) | YES |  | NULL |  |  |
| wname | varchar(150) | YES |  | NULL |  |  |
| roomno | varchar(6) | YES |  | NULL |  |  |
| rname | varchar(150) | YES |  | NULL |  |  |
| bedno | varchar(6) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| med_plan_number | int(11) | YES |  | NULL |  |  |
| ipd_medication_machine_id | int(11) | YES |  | NULL |  |  |
| seq | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| doctor_name | varchar(100) | YES |  | NULL |  |  |
| patientdob | date | YES |  | NULL |  |  |
| tomachineno | varchar(2) | YES |  | NULL |  |  |
| prescriptiondate | date | YES |  | NULL |  |  |
| dispensstatus | int(11) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| rx_time | time | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| machine_confirm | char(1) | YES |  | NULL |  |  |
| machine_confirm_datetime | datetime | YES |  | NULL |  |  |
| ipd_presc_machine_batch_id | int(11) | YES | MUL | NULL |  |  |
| batch_status | char(1) | YES |  | NULL |  |  |
| total_an | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an_rxno | an | no | 1 |
| ix_an_rxno | presc_id | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_ipd_presc_machine_batch_id | ipd_presc_machine_batch_id | no | 1 |
| PRIMARY | ipd_presc_machine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
