# `handicapped_hhc_care_equipment_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_care_equipment_list_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_care_equipment_list_name | char(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_hhc_care_equipment_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "handicapped_hhc_care_equipment_list_id": 1,
    "handicapped_hhc_care_equipment_list_name": "รถเข็นสำหรับผู้ใหญ่",
    "hos_guid": null
  },
  {
    "handicapped_hhc_care_equipment_list_id": 2,
    "handicapped_hhc_care_equipment_list_name": "รถเข็นสำหรับเด็ก",
    "hos_guid": null
  },
  {
    "handicapped_hhc_care_equipment_list_id": 3,
    "handicapped_hhc_care_equipment_list_name": "รถโยกสำหรับผู้ใหญ่",
    "hos_guid": null
  },
  {
    "handicapped_hhc_care_equipment_list_id": 4,
    "handicapped_hhc_care_equipment_list_name": "รถโยกสำหรับเด็ก",
    "hos_guid": null
  },
  {
    "handicapped_hhc_care_equipment_list_id": 5,
    "handicapped_hhc_care_equipment_list_name": "ไม้ค้ำยันรักแร้แบบอะลูมิเนียม",
    "hos_guid": null
  },
  {
    "handicapped_hhc_care_equipment_list_id": 6,
    "handicapped_hhc_care_equipment_list_name": "ไม้เท้าอะลูมิเนียมแบบสามขา",
    "hos_guid": null
  },
  {
    "handicapped_hhc_care_equipment_list_id": 7,
    "handicapped_hhc_care_equipment_list_name": "ไม้เท้าสำหรับคนตาบอด",
    "hos_guid": null
  },
  {
    "handicapped_hhc_care_equipment_list_id": 8,
    "handicapped_hhc_care_equipment_list_name": "ไม้เท้า 1 ปุ่ม",
    "hos_guid": null
  }
]
```
