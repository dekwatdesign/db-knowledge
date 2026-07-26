# `palliative_care_drug_profile`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_drug_profile_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_drug_profile_date | date | YES |  | NULL |  |  |
| palliative_care_drug_usage_code | char(7) | YES |  | NULL |  |  |
| palliative_care_drug_profile_amount | double(13,3) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| palliative_care_patient_register_id | int(11) | YES |  | NULL |  |  |
| palliative_care_drug_icode | char(7) | YES |  | NULL |  |  |
| palliative_care_drug_profile_drug_name | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_id | int(11) | YES |  | NULL |  |  |
| palliative_care_drug_profile_receive_hospcode | char(10) | YES |  | NULL |  |  |
| palliative_care_drug_profile_receive_date | date | YES |  | NULL |  |  |
| palliative_care_drug_profile_exp_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_drug_profile_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
