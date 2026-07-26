# `drug_incompatibility_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_incompatibility_type_id | int(11) | NO | PRI | 0 |  |  |
| drug_incompatibility_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drug_incompatibility_type_name | drug_incompatibility_type_name | yes | 1 |
| PRIMARY | drug_incompatibility_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "drug_incompatibility_type_id": 2,
    "drug_incompatibility_type_name": "Chemical"
  },
  {
    "drug_incompatibility_type_id": 3,
    "drug_incompatibility_type_name": "Equivocal Compatibility"
  },
  {
    "drug_incompatibility_type_id": 4,
    "drug_incompatibility_type_name": "Solution instability"
  },
  {
    "drug_incompatibility_type_id": 5,
    "drug_incompatibility_type_name": "Therapeutic incompatibility"
  },
  {
    "drug_incompatibility_type_id": 1,
    "drug_incompatibility_type_name": "Visual"
  }
]
```
