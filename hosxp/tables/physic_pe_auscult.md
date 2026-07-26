# `physic_pe_auscult`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_auscult_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_auscult_name | varchar(200) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_auscult_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_auscult_id": 1,
    "physic_pe_auscult_name": "Lung Clear",
    "active_status": "Y",
    "physic_pe_patient_type_id": 6
  },
  {
    "physic_pe_auscult_id": 2,
    "physic_pe_auscult_name": "Crepitation(Coarse)",
    "active_status": "Y",
    "physic_pe_patient_type_id": 6
  },
  {
    "physic_pe_auscult_id": 3,
    "physic_pe_auscult_name": "Crepitation(Medium)",
    "active_status": "Y",
    "physic_pe_patient_type_id": 6
  },
  {
    "physic_pe_auscult_id": 4,
    "physic_pe_auscult_name": "Crepitation(Fine)",
    "active_status": "Y",
    "physic_pe_patient_type_id": 6
  },
  {
    "physic_pe_auscult_id": 5,
    "physic_pe_auscult_name": "Rhonchi",
    "active_status": "Y",
    "physic_pe_patient_type_id": 6
  },
  {
    "physic_pe_auscult_id": 6,
    "physic_pe_auscult_name": "Wheezing",
    "active_status": "Y",
    "physic_pe_patient_type_id": 6
  },
  {
    "physic_pe_auscult_id": 7,
    "physic_pe_auscult_name": "อื่นๆ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 6
  },
  {
    "physic_pe_auscult_id": 8,
    "physic_pe_auscult_name": "Lung Clear",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  }
]
```
