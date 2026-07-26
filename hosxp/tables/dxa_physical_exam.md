# `dxa_physical_exam`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_physical_exam_id | int(11) | YES |  | NULL |  |  |
| dxa_physical_exam_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dxa_physical_exam_id": 92,
    "dxa_physical_exam_name": "เท้าไม่มีแรงลุกเดิน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_physical_exam_id": 91,
    "dxa_physical_exam_name": "ชาปลายมือปลายเท้า",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_physical_exam_id": 90,
    "dxa_physical_exam_name": "ตรวจพบสารไข่ขาว 3+ ถึง 4+",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_physical_exam_id": 89,
    "dxa_physical_exam_name": "ปัสสาวะใส",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_physical_exam_id": 88,
    "dxa_physical_exam_name": "อุจจาระสีซีดขาวกว่าปกติ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_physical_exam_id": 87,
    "dxa_physical_exam_name": "ท้องบวม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_physical_exam_id": 86,
    "dxa_physical_exam_name": "จุดแดงจ้ำเขียว",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_physical_exam_id": 85,
    "dxa_physical_exam_name": "กดเจ็บบริเวณชายโครงขวา",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
