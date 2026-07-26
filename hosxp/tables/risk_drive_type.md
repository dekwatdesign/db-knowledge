# `risk_drive_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_drive_type_id | int(11) | NO | PRI | 0 |  |  |
| risk_drive_name | varchar(50) | YES |  | NULL |  |  |
| risk_drive_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_drive_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "risk_drive_type_id": 10,
    "risk_drive_name": "ไม่ขับขี่/ไม่โดยสาร",
    "risk_drive_code": "0",
    "hos_guid": null
  },
  {
    "risk_drive_type_id": 20,
    "risk_drive_name": "ขับขี่/โดยสาร และใส่หมวกกันน็อก / คาดเข็มขัดนิรภัย",
    "risk_drive_code": "1",
    "hos_guid": null
  },
  {
    "risk_drive_type_id": 30,
    "risk_drive_name": "ขับขี่/โดยสาร และใส่หมวกกันน็อก / คาดเข็มขัดนิรภัย",
    "risk_drive_code": "2",
    "hos_guid": null
  },
  {
    "risk_drive_type_id": 40,
    "risk_drive_name": "ขับขี่/โดยสาร และใส่หมวกกันน็อก / คาดเข็มขัดนิรภัย",
    "risk_drive_code": "3",
    "hos_guid": null
  }
]
```
