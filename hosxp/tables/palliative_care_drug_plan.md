# `palliative_care_drug_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_drug_plan_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_drug_icode | char(10) | YES |  | NULL |  |  |
| palliative_care_drug_plan_date | date | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| palliative_care_patient_register_id | int(11) | YES |  | NULL |  |  |
| palliative_care_drug_plan_amount | int(11) | YES |  | NULL |  |  |
| doctor_code | char(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_drug_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
