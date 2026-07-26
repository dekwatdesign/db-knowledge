# `patient_seafood_allergy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_seafood_allergy_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| seafood_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_seafood_allergy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_seafood_allergy_id": 1,
    "hn": "530058454",
    "seafood_name": "1",
    "hos_guid": null
  },
  {
    "patient_seafood_allergy_id": 2,
    "hn": "530058454",
    "seafood_name": "1. ปลาหมึก",
    "hos_guid": null
  },
  {
    "patient_seafood_allergy_id": 8,
    "hn": "530032951",
    "seafood_name": "แพ้กุ้ง ปากบวมเจ่อ ผื่นลมพิษ",
    "hos_guid": null
  },
  {
    "patient_seafood_allergy_id": 12,
    "hn": "530068854",
    "seafood_name": "แพ้กุ้ง อาหารทะเล มีผื่นคัน, ไอมาก",
    "hos_guid": null
  },
  {
    "patient_seafood_allergy_id": 14,
    "hn": "570002006",
    "seafood_name": "แพ้กุ้ง มีผืน",
    "hos_guid": null
  },
  {
    "patient_seafood_allergy_id": 15,
    "hn": "530096448",
    "seafood_name": "แพ้กุ้ง มีผื่น",
    "hos_guid": null
  },
  {
    "patient_seafood_allergy_id": 19,
    "hn": "560001665",
    "seafood_name": "แพ้ถั่วไม่ระบุชนิด ผล skin test positive ผื่นคัน",
    "hos_guid": null
  },
  {
    "patient_seafood_allergy_id": 20,
    "hn": "560001665",
    "seafood_name": null,
    "hos_guid": null
  }
]
```
