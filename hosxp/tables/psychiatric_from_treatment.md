# `psychiatric_from_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_from_treatment_id | int(11) | NO | PRI | 0 |  |  |
| deptcode1 | char(3) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| no_other | varchar(30) | YES |  | NULL |  |  |
| no_recieve | varchar(30) | YES |  | NULL |  |  |
| problem | varchar(250) | YES |  | NULL |  |  |
| cause_sent | varchar(250) | YES |  | NULL |  |  |
| technic_use | varchar(250) | YES |  | NULL |  |  |
| date_treatment | date | YES |  | NULL |  |  |
| amount_treatment | int(11) | YES |  | NULL |  |  |
| manner_treatment | varchar(250) | YES |  | NULL |  |  |
| result | varchar(250) | YES |  | NULL |  |  |
| plan_treatment | varchar(50) | YES |  | NULL |  |  |
| doctor_name | varchar(50) | YES |  | NULL |  |  |
| doctor_clinic | varchar(50) | YES |  | NULL |  |  |
| doctor_no | varchar(50) | YES |  | NULL |  |  |
| doctor_no_date | date | YES |  | NULL |  |  |
| deptcode2 | char(3) | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_from_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
