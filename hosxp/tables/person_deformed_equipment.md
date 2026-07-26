# `person_deformed_equipment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_equipment_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_equipment_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_deformed_equipment_name | person_deformed_equipment_name | yes | 1 |
| PRIMARY | person_deformed_equipment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_deformed_equipment_id": 1,
    "person_deformed_equipment_name": "รถเข็นสำหรับผู้ใหญ่",
    "hos_guid": null
  },
  {
    "person_deformed_equipment_id": 2,
    "person_deformed_equipment_name": "รถเข็นสำหรับเด็ก",
    "hos_guid": null
  },
  {
    "person_deformed_equipment_id": 3,
    "person_deformed_equipment_name": "รถโยกสำหรับผู้ใหญ่",
    "hos_guid": null
  },
  {
    "person_deformed_equipment_id": 4,
    "person_deformed_equipment_name": "รถโยกสำหรับเด็ก",
    "hos_guid": null
  },
  {
    "person_deformed_equipment_id": 5,
    "person_deformed_equipment_name": "ไม้ค้ำยันรักแร้แบบอะลูมิเนียม",
    "hos_guid": null
  },
  {
    "person_deformed_equipment_id": 6,
    "person_deformed_equipment_name": "ไม้เท้าอะลูมิเนียมแบบสามขา",
    "hos_guid": null
  },
  {
    "person_deformed_equipment_id": 7,
    "person_deformed_equipment_name": "ไม้เท้าสำหรับคนตาบอด",
    "hos_guid": null
  },
  {
    "person_deformed_equipment_id": 8,
    "person_deformed_equipment_name": "ไม้เท้า 1 ปุ่ม",
    "hos_guid": null
  }
]
```
