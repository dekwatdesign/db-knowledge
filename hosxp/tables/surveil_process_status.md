# `surveil_process_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| surveil_process_status_id | int(11) | NO | PRI | 0 |  |  |
| surveil_process_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_surveil_process_status_name | surveil_process_status_name | yes | 1 |
| PRIMARY | surveil_process_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "surveil_process_status_id": 1,
    "surveil_process_status_name": "ผ่านการตรวจสอบแล้ว",
    "hos_guid": null
  },
  {
    "surveil_process_status_id": 2,
    "surveil_process_status_name": "ให้ตรวจสอบรหัสโรค",
    "hos_guid": null
  },
  {
    "surveil_process_status_id": 3,
    "surveil_process_status_name": "ให้ตรวจสอบที่อยู่ขณะป่วย",
    "hos_guid": null
  },
  {
    "surveil_process_status_id": 4,
    "surveil_process_status_name": "ให้ตรวจสอบวันที่เริ่มป่วย",
    "hos_guid": null
  },
  {
    "surveil_process_status_id": 5,
    "surveil_process_status_name": "ให้ตรวจสอบวันที่พบผู้ป่วย",
    "hos_guid": null
  },
  {
    "surveil_process_status_id": 6,
    "surveil_process_status_name": "ให้ตรวจสอบสภาพผู้ป่วย",
    "hos_guid": null
  },
  {
    "surveil_process_status_id": 9,
    "surveil_process_status_name": "รอการตรวจสอบ",
    "hos_guid": null
  }
]
```
