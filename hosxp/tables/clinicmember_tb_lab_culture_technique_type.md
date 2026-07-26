# `clinicmember_tb_lab_culture_technique_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_lab_culture_technique_type_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_tb_lab_culture_technique_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_tb_lab_culture_technique_type_name | clinicmember_tb_lab_culture_technique_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_tb_lab_culture_technique_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "clinicmember_tb_lab_culture_technique_type_id": 0,
    "clinicmember_tb_lab_culture_technique_type_name": "ไม่ทราบ",
    "hos_guid": null
  },
  {
    "clinicmember_tb_lab_culture_technique_type_id": 1,
    "clinicmember_tb_lab_culture_technique_type_name": "Solid",
    "hos_guid": null
  },
  {
    "clinicmember_tb_lab_culture_technique_type_id": 2,
    "clinicmember_tb_lab_culture_technique_type_name": "Liquid",
    "hos_guid": null
  },
  {
    "clinicmember_tb_lab_culture_technique_type_id": 9,
    "clinicmember_tb_lab_culture_technique_type_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
