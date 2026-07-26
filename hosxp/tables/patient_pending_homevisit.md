# `patient_pending_homevisit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_pending_homevisit_id | int(11) | NO | PRI | 0 |  |  |
| patient_pending_homevisit_data | date | YES |  | NULL |  |  |
| status | char(1) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| note | longtext | YES |  | NULL |  |  |
| staff_name | varchar(200) | YES |  | NULL |  |  |
| pname | varchar(15) | YES |  | NULL |  |  |
| fname | varchar(30) | YES |  | NULL |  |  |
| lname | varchar(30) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| cc | longtext | YES |  | NULL |  |  |
| hpi | longtext | YES |  | NULL |  |  |
| diag_text | longtext | YES |  | NULL |  |  |
| problem_text | longtext | YES |  | NULL |  |  |
| hospcode_name | varchar(100) | YES |  | NULL |  |  |
| patient_hhc_disease_group_id | int(11) | YES |  | NULL |  |  |
| oldcode | varchar(16) | YES |  | NULL |  |  |
| vs_bps | decimal(10,0) | YES |  | NULL |  |  |
| vs_bpd | decimal(10,0) | YES |  | NULL |  |  |
| vs_hr | decimal(10,0) | YES |  | NULL |  |  |
| vs_pulse | decimal(10,0) | YES |  | NULL |  |  |
| vs_rr | decimal(10,0) | YES |  | NULL |  |  |
| vs_bw | decimal(10,0) | YES |  | NULL |  |  |
| vs_temperature | decimal(10,0) | YES |  | NULL |  |  |
| vs_height | int(11) | YES |  | NULL |  |  |
| patient_type | varchar(5) | YES |  | NULL |  |  |
| admission_date | date | YES |  | NULL |  |  |
| spclty_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_pending_homevisit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
