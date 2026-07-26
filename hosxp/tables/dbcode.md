# `dbcode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| idcode | int(11) | NO | PRI | 0 |  |  |
| ChronicL | int(11) | YES |  | NULL |  |  |
| Dcode | int(11) | YES |  | NULL |  |  |
| Th_code | varchar(100) | YES |  | NULL |  |  |
| En_code | varchar(100) | YES |  | NULL |  |  |
| ICD | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | idcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "idcode": 1,
    "ChronicL": 1,
    "Dcode": 1,
    "Th_code": "ไม่มีภาวะแทรกซ้อน",
    "En_code": "Diabetes mellitus",
    "ICD": "See Table ICD-10",
    "hos_guid": null
  },
  {
    "idcode": 2,
    "ChronicL": 1,
    "Dcode": 2,
    "Th_code": "ภาวะแทรกซ้อนทางตา",
    "En_code": "Diabetic retinopathy",
    "ICD": "See Table ICD-10",
    "hos_guid": null
  },
  {
    "idcode": 3,
    "ChronicL": 1,
    "Dcode": 3,
    "Th_code": "ภาวะแทรกซ้อนทางไต",
    "En_code": "Diabetic nephropathy",
    "ICD": "See Table ICD-10",
    "hos_guid": null
  },
  {
    "idcode": 4,
    "ChronicL": 1,
    "Dcode": 4,
    "Th_code": "ภาวะแทรกซ้อนทางระบบประสาท",
    "En_code": "Diabetic neuropathy",
    "ICD": "See Table ICD-10",
    "hos_guid": null
  },
  {
    "idcode": 5,
    "ChronicL": 1,
    "Dcode": 5,
    "Th_code": "ภาวะแทรกซ้อนหลอดเลือดแดง",
    "En_code": "Diabetic mellitus with macrovascular complications",
    "ICD": "See Table ICD-10",
    "hos_guid": null
  },
  {
    "idcode": 6,
    "ChronicL": 1,
    "Dcode": 6,
    "Th_code": "ภาวะแทรกซ้อนต้องตัดอวัยวะ",
    "En_code": "Diabetic mellitus with amputation",
    "ICD": "See Table ICD-10",
    "hos_guid": null
  },
  {
    "idcode": 7,
    "ChronicL": 1,
    "Dcode": 7,
    "Th_code": "ภาวะแทรกซ้อนหลายอย่าง",
    "En_code": "Diabetic mellitus with multiple complications",
    "ICD": "See Table ICD-10",
    "hos_guid": null
  },
  {
    "idcode": 8,
    "ChronicL": 1,
    "Dcode": 8,
    "Th_code": "ภาวะแทรกซ้อนอื่นๆ",
    "En_code": "Diabetic mellitus with other complications",
    "ICD": "See Table ICD-10",
    "hos_guid": null
  }
]
```
