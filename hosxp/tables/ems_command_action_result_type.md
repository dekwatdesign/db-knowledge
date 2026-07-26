# `ems_command_action_result_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_action_result_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_action_result_type_name | varchar(200) | YES | UNI | NULL |  |  |
| ems_command_action_result_type_code | varchar(10) | YES |  | NULL |  |  |
| ems_command_service_result_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_action_result_type_name | ems_command_action_result_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_action_result_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ems_command_action_result_type_id": 1,
    "ems_command_action_result_type_name": "รักษาและนำส่ง",
    "ems_command_action_result_type_code": null,
    "ems_command_service_result_type_id": 1,
    "hos_guid": null
  },
  {
    "ems_command_action_result_type_id": 2,
    "ems_command_action_result_type_name": "รักษาไม่นำส่ง",
    "ems_command_action_result_type_code": null,
    "ems_command_service_result_type_id": 1,
    "hos_guid": null
  },
  {
    "ems_command_action_result_type_id": 3,
    "ems_command_action_result_type_name": "รักษาและเสียชีวิตระหว่างนำส่ง",
    "ems_command_action_result_type_code": null,
    "ems_command_service_result_type_id": 1,
    "hos_guid": null
  },
  {
    "ems_command_action_result_type_id": 4,
    "ems_command_action_result_type_name": "เสียชีวิต ณ จุดเกิดเหตุ",
    "ems_command_action_result_type_code": null,
    "ems_command_service_result_type_id": 1,
    "hos_guid": null
  },
  {
    "ems_command_action_result_type_id": 5,
    "ems_command_action_result_type_name": "ผู้ป่วยปฏิเสธการรักษา / ไม่ประสงค์จะไป รพ.",
    "ems_command_action_result_type_code": null,
    "ems_command_service_result_type_id": 2,
    "hos_guid": null
  },
  {
    "ems_command_action_result_type_id": 6,
    "ems_command_action_result_type_name": "ยกเลิก",
    "ems_command_action_result_type_code": null,
    "ems_command_service_result_type_id": 2,
    "hos_guid": null
  },
  {
    "ems_command_action_result_type_id": 7,
    "ems_command_action_result_type_name": "ไม่พบเหตุ",
    "ems_command_action_result_type_code": null,
    "ems_command_service_result_type_id": 2,
    "hos_guid": null
  },
  {
    "ems_command_action_result_type_id": 8,
    "ems_command_action_result_type_name": "เสียชีวิตก่อนชุดปฏิบัติการไปถึง",
    "ems_command_action_result_type_code": null,
    "ems_command_service_result_type_id": 2,
    "hos_guid": null
  }
]
```
