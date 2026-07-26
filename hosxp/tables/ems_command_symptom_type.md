# `ems_command_symptom_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_symptom_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_symptom_type_name | varchar(200) | YES | UNI | NULL |  |  |
| ems_command_symptom_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_symptom_type_name | ems_command_symptom_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_symptom_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ems_command_symptom_type_id": 1,
    "ems_command_symptom_type_name": "ปวดท้อง หลัง เชิงกราน และขาหนีบ",
    "ems_command_symptom_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_symptom_type_id": 2,
    "ems_command_symptom_type_name": "แอนนาฟิแลกซีส ปฏิกิริยาภูมิแพ้",
    "ems_command_symptom_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_symptom_type_id": 3,
    "ems_command_symptom_type_name": "สัตว์กัด",
    "ems_command_symptom_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_symptom_type_id": 4,
    "ems_command_symptom_type_name": "เลือดออกไม่ใช่จากการบาดเจ็บ",
    "ems_command_symptom_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_symptom_type_id": 5,
    "ems_command_symptom_type_name": "หายใจลำบาก",
    "ems_command_symptom_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_symptom_type_id": 6,
    "ems_command_symptom_type_name": "หัวใจหยุดเต้น",
    "ems_command_symptom_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_symptom_type_id": 7,
    "ems_command_symptom_type_name": "เจ็บแน่นทรวงอก หัวใจ",
    "ems_command_symptom_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_symptom_type_id": 8,
    "ems_command_symptom_type_name": "สำลักอุดทางเดินหายใจ",
    "ems_command_symptom_type_code": null,
    "hos_guid": null
  }
]
```
