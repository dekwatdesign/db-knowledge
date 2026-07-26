# `physic_pe_special_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_special_activity_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_special_activity_name | varchar(150) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_special_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_special_activity_id": 1,
    "physic_pe_special_activity_name": "Neer's impingement test",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_special_activity_id": 2,
    "physic_pe_special_activity_name": "Hawkin-Kennedy impingement test",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_special_activity_id": 3,
    "physic_pe_special_activity_name": "Painful arc",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_special_activity_id": 4,
    "physic_pe_special_activity_name": "Drop arm test",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_special_activity_id": 5,
    "physic_pe_special_activity_name": "Empty can test",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_special_activity_id": 6,
    "physic_pe_special_activity_name": "Yergason's test",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_special_activity_id": 7,
    "physic_pe_special_activity_name": "Speed's test",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_special_activity_id": 8,
    "physic_pe_special_activity_name": "Lift-off test",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  }
]
```
