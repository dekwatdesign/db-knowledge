# `risk_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_clinic_id | int(11) | NO | PRI | 0 |  |  |
| risk_clinic_name | varchar(50) | YES |  | NULL |  |  |
| risk_clinic_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_clinic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "risk_clinic_id": 10,
    "risk_clinic_name": "เบาหวาน (DM)",
    "risk_clinic_code": "DM",
    "hos_guid": null
  },
  {
    "risk_clinic_id": 20,
    "risk_clinic_name": "ไตวายเรื้อรัง (CRF)",
    "risk_clinic_code": "CRF",
    "hos_guid": null
  },
  {
    "risk_clinic_id": 30,
    "risk_clinic_name": "ถุงลมโป่งพอง (COPD)",
    "risk_clinic_code": "COPD",
    "hos_guid": null
  },
  {
    "risk_clinic_id": 40,
    "risk_clinic_name": "ความดันโลหิตสูง (HT)",
    "risk_clinic_code": "HT",
    "hos_guid": null
  },
  {
    "risk_clinic_id": 50,
    "risk_clinic_name": "กล้ามเนื้อหัวใจตาย (MI)",
    "risk_clinic_code": "MI",
    "hos_guid": null
  },
  {
    "risk_clinic_id": 60,
    "risk_clinic_name": "โรคเก๊าท์ (Gout)",
    "risk_clinic_code": "GOUT",
    "hos_guid": null
  },
  {
    "risk_clinic_id": 70,
    "risk_clinic_name": "เส้นเลือดสมอง (Stroke)",
    "risk_clinic_code": "STROK",
    "hos_guid": null
  },
  {
    "risk_clinic_id": 80,
    "risk_clinic_name": "ไม่ทราบ",
    "risk_clinic_code": "NONE",
    "hos_guid": null
  }
]
```
