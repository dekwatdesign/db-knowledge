# `ckup_patient_comp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_patient_comp_id | int(11) | NO | PRI | 0 |  |  |
| ckup_patient_comp_active | char(1) | YES |  | NULL |  |  |
| ckup_patient_comp_regdate | date | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| ckup_comp_id | int(11) | YES | MUL | NULL |  |  |
| ckup_comp_position_id | int(11) | YES | MUL | NULL |  |  |
| patient_hn | varchar(12) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| ckup_patient_comp_type_id | int(11) | YES | MUL | NULL |  |  |
| emp_id | int(11) | YES | MUL | NULL |  |  |
| ckup_patient_pname | varchar(50) | YES |  | NULL |  |  |
| ckup_patient_fname | varchar(250) | YES |  | NULL |  |  |
| ckup_patient_lname | varchar(250) | YES |  | NULL |  |  |
| ckup_patient_birthdate | date | YES |  | NULL |  |  |
| ckup_patient_age | double(13,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_comp_id | ckup_comp_id | no | 1 |
| ix_ckup_comp_position_id | ckup_comp_position_id | no | 1 |
| ix_ckup_patient_comp_type_id | ckup_patient_comp_type_id | no | 1 |
| ix_emp_id | emp_id | no | 1 |
| PRIMARY | ckup_patient_comp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
