# `risk_lab_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_lab_type_id | int(11) | NO | PRI | 0 |  |  |
| risk_lab_name | varchar(50) | YES |  | NULL |  |  |
| risk_lab_code_map | int(11) | YES |  | NULL |  |  |
| risk_lab_default | varchar(50) | YES |  | NULL |  |  |
| risk_lab_desc | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_lab_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "risk_lab_type_id": 10,
    "risk_lab_name": "Sugar",
    "risk_lab_code_map": null,
    "risk_lab_default": "75-115 mg/dl",
    "risk_lab_desc": "ระดับน้ำตาลในเลือด",
    "hos_guid": null
  },
  {
    "risk_lab_type_id": 20,
    "risk_lab_name": "BUN",
    "risk_lab_code_map": null,
    "risk_lab_default": "5-23 mg/dl",
    "risk_lab_desc": "ตรวจการทำงานของไต",
    "hos_guid": null
  },
  {
    "risk_lab_type_id": 30,
    "risk_lab_name": "Creatinine",
    "risk_lab_code_map": null,
    "risk_lab_default": "0.6-1.1 mg/dl",
    "risk_lab_desc": "ตรวจการทำงานของไต",
    "hos_guid": null
  },
  {
    "risk_lab_type_id": 40,
    "risk_lab_name": "Uric Acid",
    "risk_lab_code_map": null,
    "risk_lab_default": "ช=3.4-7.0, ญ=2.4-5.7 mg/dl",
    "risk_lab_desc": "ตรวจหาโรคเก๊าท์หรือไขข้ออักเสบ",
    "hos_guid": null
  },
  {
    "risk_lab_type_id": 50,
    "risk_lab_name": "Cholesterol",
    "risk_lab_code_map": null,
    "risk_lab_default": "น้อยกว่า 200 mg/dl",
    "risk_lab_desc": "ตรวจหาระดับไขมันในเลือด",
    "hos_guid": null
  },
  {
    "risk_lab_type_id": 60,
    "risk_lab_name": "Triglyceride",
    "risk_lab_code_map": null,
    "risk_lab_default": "น้อยกว่า 200 mg/dl",
    "risk_lab_desc": "ตรวจหาระดับไขมันในเลือด",
    "hos_guid": null
  },
  {
    "risk_lab_type_id": 70,
    "risk_lab_name": "HDL-Cholesterol",
    "risk_lab_code_map": null,
    "risk_lab_default": "มากกว่า 35 mg/dl",
    "risk_lab_desc": "ตรวจหาระดับไขมันชนิดดี",
    "hos_guid": null
  },
  {
    "risk_lab_type_id": 80,
    "risk_lab_name": "LDL-Cholesterol",
    "risk_lab_code_map": null,
    "risk_lab_default": "135-159 mg/dl",
    "risk_lab_desc": "ตรวจหาระดับไขมันชนิดเลว",
    "hos_guid": null
  }
]
```
