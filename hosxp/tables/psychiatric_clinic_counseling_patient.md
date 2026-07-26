# `psychiatric_clinic_counseling_patient`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_counseling_patient_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_counseling_patient_date | date | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_code | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_hn | varchar(13) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_name | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_sex | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_birthday | date | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_religion | char(2) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_occupation | char(3) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_marry_status | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_education | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_revenue | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_address | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_tel | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_contact | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_counseling_patient_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
