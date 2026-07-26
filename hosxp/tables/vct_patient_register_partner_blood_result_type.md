# `vct_patient_register_partner_blood_result_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vct_patient_register_partner_blood_result_type_id | int(11) | NO | PRI | 0 |  |  |
| vct_patient_register_partner_blood_result_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vct_patient_register_partner_blood_result_type_name | vct_patient_register_partner_blood_result_type_name | yes | 1 |
| PRIMARY | vct_patient_register_partner_blood_result_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "vct_patient_register_partner_blood_result_type_id": 1,
    "vct_patient_register_partner_blood_result_type_name": "Negative",
    "hos_guid": null
  },
  {
    "vct_patient_register_partner_blood_result_type_id": 2,
    "vct_patient_register_partner_blood_result_type_name": "Indeterminate",
    "hos_guid": null
  },
  {
    "vct_patient_register_partner_blood_result_type_id": 3,
    "vct_patient_register_partner_blood_result_type_name": "Positive",
    "hos_guid": null
  }
]
```
