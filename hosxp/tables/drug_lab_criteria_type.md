# `drug_lab_criteria_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_lab_criteria_type_id | int(11) | NO | PRI | 0 |  |  |
| drug_lab_criteria_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drug_lab_criteria_type_name | drug_lab_criteria_type_name | yes | 1 |
| PRIMARY | drug_lab_criteria_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "drug_lab_criteria_type_id": 1,
    "drug_lab_criteria_type_name": "ผล Lab >="
  },
  {
    "drug_lab_criteria_type_id": 2,
    "drug_lab_criteria_type_name": "ผล Lab <="
  },
  {
    "drug_lab_criteria_type_id": 3,
    "drug_lab_criteria_type_name": "ผล Lab อยู่ในช่วง"
  },
  {
    "drug_lab_criteria_type_id": 4,
    "drug_lab_criteria_type_name": "ผล Lab ไม่อยู่ในช่วง"
  }
]
```
