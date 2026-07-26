# `doctor_reconciliation_command`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_reconciliation_command_id | int(11) | NO | PRI | 0 |  |  |
| doctor_reconciliation_command_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_reconciliation_command_name | doctor_reconciliation_command_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_reconciliation_command_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "doctor_reconciliation_command_id": 1,
    "doctor_reconciliation_command_name": "ใช้ต่อ",
    "hos_guid": null
  },
  {
    "doctor_reconciliation_command_id": 2,
    "doctor_reconciliation_command_name": "ปรับเปลี่ยน",
    "hos_guid": null
  },
  {
    "doctor_reconciliation_command_id": 3,
    "doctor_reconciliation_command_name": "หยุดใช้",
    "hos_guid": null
  }
]
```
