# `sks_dispense_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_dispense_status_id | int(11) | NO | PRI | 0 |  |  |
| sks_dispense_status_name | varchar(150) | YES | UNI | NULL |  |  |
| sks_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sks_dispense_status_name | sks_dispense_status_name | yes | 1 |
| PRIMARY | sks_dispense_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "sks_dispense_status_id": 1,
    "sks_dispense_status_name": "รับยาแล้ว",
    "sks_code": "1",
    "hos_guid": null
  },
  {
    "sks_dispense_status_id": 2,
    "sks_dispense_status_name": "แก้ไข, คืนยาหรือเปลี่ยนยา",
    "sks_code": "2",
    "hos_guid": null
  },
  {
    "sks_dispense_status_id": 3,
    "sks_dispense_status_name": "แก้ไข, เบิกผิดพลาด",
    "sks_code": "3",
    "hos_guid": null
  },
  {
    "sks_dispense_status_id": 9,
    "sks_dispense_status_name": "ยกเลิก, ไม่มีการจ่ายยา",
    "sks_code": "0",
    "hos_guid": null
  }
]
```
