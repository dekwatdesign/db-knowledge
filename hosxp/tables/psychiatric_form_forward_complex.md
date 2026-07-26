# `psychiatric_form_forward_complex`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_forward_complex_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_date | date | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_problems | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_symptom_now | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_ward_contact_relative | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_ward_conference | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_ward_advise | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_befor_set | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_ward_other | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_case_management | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_neglect | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_community | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_help_result | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_help_problems_after | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_comment | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_nurse | varchar(200) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_commentator | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_last_update | datetime | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_staff | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_nurse_phone | varchar(11) | YES |  | NULL |  |  |
| psychiatric_form_patientcare_id | int(11) | YES |  | NULL |  |  |
| psychiatric_form_forward_complex_hospital_near | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_forward_complex_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
