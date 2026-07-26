# `report_sks`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| report_sks_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| row_number | int(11) | YES |  | NULL |  |  |
| bookno | varchar(100) | YES |  | NULL |  |  |
| billno | varchar(100) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| rcpt01 | double(15,3) | YES |  | NULL |  |  |
| rcpt03 | double(15,3) | YES |  | NULL |  |  |
| rcpt_sum | double(15,3) | YES |  | NULL |  |  |
| total_sum | double(15,3) | YES |  | NULL |  |  |
| patient_name | varchar(250) | YES |  | NULL |  |  |
| bill_date | date | YES |  | NULL |  |  |
| staff_name | varchar(150) | YES |  | NULL |  |  |
| staff_position | varchar(150) | YES |  | NULL |  |  |
| bill_name | varchar(200) | YES |  | NULL |  |  |
| billcode | varchar(10) | YES |  | NULL |  |  |
| billnumber | varchar(10) | YES |  | NULL |  |  |
| std_group | char(2) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| page_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| finance_number | finance_number | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | report_sks_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
