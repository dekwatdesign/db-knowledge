# `physic_pe_palpation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_palpation_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_palpation_name | varchar(200) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_palpation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_palpation_id": 1,
    "physic_pe_palpation_name": "Trp at Right Trapezius Muscle",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_palpation_id": 2,
    "physic_pe_palpation_name": "Trp at Left Trapezius Muscle",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_palpation_id": 3,
    "physic_pe_palpation_name": "Trp at Right Supraspinatus Muscle",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_palpation_id": 4,
    "physic_pe_palpation_name": "Trp at Left Supraspinatus Muscle",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_palpation_id": 5,
    "physic_pe_palpation_name": "Trp at Right Infraspinatus Muscle",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_palpation_id": 6,
    "physic_pe_palpation_name": "Trp at Left Infraspinatus Muscle",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_palpation_id": 7,
    "physic_pe_palpation_name": "Trp at Right Tere Minor",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  },
  {
    "physic_pe_palpation_id": 8,
    "physic_pe_palpation_name": "Trp at Left Tere Minor",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  }
]
```
