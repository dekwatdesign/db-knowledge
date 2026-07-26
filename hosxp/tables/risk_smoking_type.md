# `risk_smoking_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_smoking_type_id | int(11) | NO | PRI | 0 |  |  |
| risk_smoking_type_name | varchar(50) | YES |  | NULL |  |  |
| risk_smoking_type_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_smoking_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "risk_smoking_type_id": 10,
    "risk_smoking_type_name": "บุหรี่ปกติ",
    "risk_smoking_type_code": "1",
    "hos_guid": null
  },
  {
    "risk_smoking_type_id": 20,
    "risk_smoking_type_name": "บุหรี่พื้นเมือง (ขี้โย) มวนเล็ก",
    "risk_smoking_type_code": "3",
    "hos_guid": null
  },
  {
    "risk_smoking_type_id": 30,
    "risk_smoking_type_name": "บุหรี่พื้นเมือง (ขี้โย) มวนกลาง",
    "risk_smoking_type_code": "5",
    "hos_guid": null
  },
  {
    "risk_smoking_type_id": 40,
    "risk_smoking_type_name": "บุหรี่พื้นเมือง (ขี้โย) มวนใหญ่",
    "risk_smoking_type_code": "7",
    "hos_guid": null
  }
]
```
