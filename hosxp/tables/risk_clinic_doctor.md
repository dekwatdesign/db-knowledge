# `risk_clinic_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_clinic_doctor_id | int(11) | NO | PRI | 0 |  |  |
| risk_clinic_doctor_name | varchar(50) | YES |  | NULL |  |  |
| risk_clinic_doctor_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_clinic_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "risk_clinic_doctor_id": 10,
    "risk_clinic_doctor_name": "[MASKED_FULLNAME]",
    "risk_clinic_doctor_code": "0",
    "hos_guid": null
  },
  {
    "risk_clinic_doctor_id": 20,
    "risk_clinic_doctor_name": "[MASKED_FULLNAME]",
    "risk_clinic_doctor_code": "1",
    "hos_guid": null
  },
  {
    "risk_clinic_doctor_id": 30,
    "risk_clinic_doctor_name": "[MASKED_FULLNAME]",
    "risk_clinic_doctor_code": "2",
    "hos_guid": null
  },
  {
    "risk_clinic_doctor_id": 40,
    "risk_clinic_doctor_name": "[MASKED_FULLNAME]",
    "risk_clinic_doctor_code": "3",
    "hos_guid": null
  },
  {
    "risk_clinic_doctor_id": 50,
    "risk_clinic_doctor_name": "[MASKED_FULLNAME]",
    "risk_clinic_doctor_code": "4",
    "hos_guid": null
  },
  {
    "risk_clinic_doctor_id": 60,
    "risk_clinic_doctor_name": "[MASKED_FULLNAME]",
    "risk_clinic_doctor_code": "5",
    "hos_guid": null
  },
  {
    "risk_clinic_doctor_id": 70,
    "risk_clinic_doctor_name": "[MASKED_FULLNAME]",
    "risk_clinic_doctor_code": "6",
    "hos_guid": null
  },
  {
    "risk_clinic_doctor_id": 80,
    "risk_clinic_doctor_name": "[MASKED_FULLNAME]",
    "risk_clinic_doctor_code": "7",
    "hos_guid": null
  }
]
```
