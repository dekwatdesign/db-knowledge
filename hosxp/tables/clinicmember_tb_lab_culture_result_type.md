# `clinicmember_tb_lab_culture_result_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_lab_culture_result_type_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_tb_lab_culture_result_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_tb_lab_culture_type_name | clinicmember_tb_lab_culture_result_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_tb_lab_culture_result_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "clinicmember_tb_lab_culture_result_type_id": 1,
    "clinicmember_tb_lab_culture_result_type_name": "Pending",
    "hos_guid": null
  },
  {
    "clinicmember_tb_lab_culture_result_type_id": 2,
    "clinicmember_tb_lab_culture_result_type_name": "Growth",
    "hos_guid": null
  },
  {
    "clinicmember_tb_lab_culture_result_type_id": 3,
    "clinicmember_tb_lab_culture_result_type_name": "No Growth",
    "hos_guid": null
  },
  {
    "clinicmember_tb_lab_culture_result_type_id": 4,
    "clinicmember_tb_lab_culture_result_type_name": "Contaminate",
    "hos_guid": null
  },
  {
    "clinicmember_tb_lab_culture_result_type_id": 5,
    "clinicmember_tb_lab_culture_result_type_name": "NTM",
    "hos_guid": null
  }
]
```
