# `patient_hhc_care_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_care_list_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_plan_id | int(11) | YES | MUL | NULL |  |  |
| patient_hhc_care_type_id | int(11) | YES |  | NULL |  |  |
| patient_hhc_care_list_text | varchar(200) | YES |  | NULL |  |  |
| patient_hhc_care_check | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_hhc_plan_id | patient_hhc_plan_id | no | 1 |
| PRIMARY | patient_hhc_care_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
