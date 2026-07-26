# `examination_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| examination_item_id | int(11) | NO | PRI | 0 |  |  |
| examination_name | varchar(200) | YES | UNI | NULL |  |  |
| examination_type_id | int(11) | YES | MUL | NULL |  |  |
| ref_id | int(11) | YES |  | NULL |  |  |
| update_flag | int(11) | YES |  | NULL |  |  |
| ref_subtype_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_examination_name | examination_name | yes | 1 |
| ix_type_ref_id | examination_type_id | yes | 1 |
| ix_type_ref_id | ref_id | yes | 2 |
| ix_type_ref_id_index | examination_type_id | yes | 1 |
| ix_type_ref_id_index | ref_id | yes | 2 |
| ix_type_ref_id_index | ref_subtype_id | yes | 3 |
| PRIMARY | examination_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "examination_item_id": 1,
    "examination_name": "CBC",
    "examination_type_id": 2,
    "ref_id": 62,
    "update_flag": 1,
    "ref_subtype_id": 0
  },
  {
    "examination_item_id": 2,
    "examination_name": "Coagulogram",
    "examination_type_id": 1,
    "ref_id": 2,
    "update_flag": 1,
    "ref_subtype_id": 0
  },
  {
    "examination_item_id": 3,
    "examination_name": "DIFFERENTIAL",
    "examination_type_id": 1,
    "ref_id": 14,
    "update_flag": 1,
    "ref_subtype_id": 0
  },
  {
    "examination_item_id": 4,
    "examination_name": "Electrolyt (NA+,K+,CI-CO2)",
    "examination_type_id": 1,
    "ref_id": 13,
    "update_flag": 1,
    "ref_subtype_id": 0
  },
  {
    "examination_item_id": 5,
    "examination_name": "Lipid profile (Cholesterol, HDL, chol,  LDL ,chol TG)",
    "examination_type_id": 1,
    "ref_id": 10,
    "update_flag": 1,
    "ref_subtype_id": 0
  },
  {
    "examination_item_id": 6,
    "examination_name": "Liver  Function Test",
    "examination_type_id": 1,
    "ref_id": 9,
    "update_flag": 1,
    "ref_subtype_id": 0
  },
  {
    "examination_item_id": 7,
    "examination_name": "Pharmarcogenomics",
    "examination_type_id": 1,
    "ref_id": 16,
    "update_flag": 1,
    "ref_subtype_id": 0
  },
  {
    "examination_item_id": 8,
    "examination_name": "RBC MORPHOLOGY",
    "examination_type_id": 1,
    "ref_id": 15,
    "update_flag": 1,
    "ref_subtype_id": 0
  }
]
```
