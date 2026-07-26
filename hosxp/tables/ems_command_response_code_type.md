# `ems_command_response_code_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_response_code_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_response_code_type_name | varchar(200) | YES | UNI | NULL |  |  |
| ems_command_response_code_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_response_code_type_name | ems_command_response_code_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_response_code_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ems_command_response_code_type_id": 1,
    "ems_command_response_code_type_name": "แดง (วิกฤติ)",
    "ems_command_response_code_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_response_code_type_id": 2,
    "ems_command_response_code_type_name": "เหลือง (เร่งด่วน)",
    "ems_command_response_code_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_response_code_type_id": 3,
    "ems_command_response_code_type_name": "เขียว (ไม่รุนแรง)",
    "ems_command_response_code_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_response_code_type_id": 4,
    "ems_command_response_code_type_name": "ขาว (ทั่วไป)",
    "ems_command_response_code_type_code": null,
    "hos_guid": null
  }
]
```
