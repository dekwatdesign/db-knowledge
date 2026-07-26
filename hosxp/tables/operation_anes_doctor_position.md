# `operation_anes_doctor_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_doctor_position_id | int(11) | NO | PRI | 0 |  |  |
| operation_anes_doctor_position_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_anes_doctor_position_name | operation_anes_doctor_position_name | yes | 1 |
| PRIMARY | operation_anes_doctor_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "operation_anes_doctor_position_id": 1,
    "operation_anes_doctor_position_name": "ผู้ดมยา",
    "hos_guid": null
  },
  {
    "operation_anes_doctor_position_id": 2,
    "operation_anes_doctor_position_name": "ผู้ควบคุม",
    "hos_guid": null
  }
]
```
