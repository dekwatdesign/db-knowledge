# `opd_presc_machine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_presc_machine_id | int(11) | NO | PRI | 0 |  |  |
| medication_machine_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
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
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| med_plan_number | int(11) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| rx_queue | int(11) | YES |  | NULL |  |  |
| seq | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| doctor_name | varchar(100) | YES |  | NULL |  |  |
| patientdob | date | YES |  | NULL |  |  |
| tomachineno | varchar(2) | YES |  | NULL |  |  |
| prescriptiondate | date | YES |  | NULL |  |  |
| dispensstatus | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opd_presc_machine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
