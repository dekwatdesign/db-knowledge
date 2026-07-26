# `lab_patho_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_type_id | int(11) | NO | PRI | 0 |  |  |
| lab_patho_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_patho_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "lab_patho_type_id": 1,
    "lab_patho_type_name": "Pathology"
  },
  {
    "lab_patho_type_id": 2,
    "lab_patho_type_name": "FNA"
  },
  {
    "lab_patho_type_id": 3,
    "lab_patho_type_name": "Cytology"
  },
  {
    "lab_patho_type_id": 4,
    "lab_patho_type_name": "Papsmear"
  }
]
```
