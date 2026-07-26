# `opd_allergy_symptom_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_allergy_symptom_type_id | int(11) | NO | PRI | 0 |  |  |
| opd_allergy_symtom_type_name | varchar(200) | YES | UNI | NULL |  |  |
| provis_export_code | varchar(3) | YES |  | NULL |  |  |
| icd10 | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_allergy_symtom_type_name | opd_allergy_symtom_type_name | yes | 1 |
| PRIMARY | opd_allergy_symptom_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_allergy_symptom_type_id": 1,
    "opd_allergy_symtom_type_name": "Drug-induced autoimmune hemolytic anemia",
    "provis_export_code": "01",
    "icd10": "D590"
  },
  {
    "opd_allergy_symptom_type_id": 2,
    "opd_allergy_symtom_type_name": "Drug-induced non autoimmune hemolytic anemia",
    "provis_export_code": "02",
    "icd10": "D592"
  },
  {
    "opd_allergy_symptom_type_id": 3,
    "opd_allergy_symtom_type_name": "Transient acquired pure red cell aplasic",
    "provis_export_code": "03",
    "icd10": "D601"
  },
  {
    "opd_allergy_symptom_type_id": 4,
    "opd_allergy_symtom_type_name": "Drug-induced aplastic anemia",
    "provis_export_code": "04",
    "icd10": "D611"
  },
  {
    "opd_allergy_symptom_type_id": 5,
    "opd_allergy_symtom_type_name": "Secondary sideroblastic anemia due to drugs and toxic",
    "provis_export_code": "05",
    "icd10": "D642"
  },
  {
    "opd_allergy_symptom_type_id": 6,
    "opd_allergy_symtom_type_name": "Haemorrhagic disorders due to circulating anticoagulants",
    "provis_export_code": "06",
    "icd10": "D683"
  },
  {
    "opd_allergy_symptom_type_id": 7,
    "opd_allergy_symtom_type_name": "Agranolocytosis",
    "provis_export_code": "07",
    "icd10": "D70"
  },
  {
    "opd_allergy_symptom_type_id": 8,
    "opd_allergy_symtom_type_name": "Malignant neuroleptic syndrome",
    "provis_export_code": "08",
    "icd10": "G210"
  }
]
```
