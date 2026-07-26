# `clinic_hd_asm_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_asm_type_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_asm_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_hd_asm_type_name | clinic_hd_asm_type_name | yes | 1 |
| PRIMARY | clinic_hd_asm_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "clinic_hd_asm_type_id": 1,
    "clinic_hd_asm_type_name": "Anxiety"
  },
  {
    "clinic_hd_asm_type_id": 2,
    "clinic_hd_asm_type_name": "Sleep disturbance"
  },
  {
    "clinic_hd_asm_type_id": 3,
    "clinic_hd_asm_type_name": "Nuasea/Vomitting"
  },
  {
    "clinic_hd_asm_type_id": 4,
    "clinic_hd_asm_type_name": "Anorexia"
  },
  {
    "clinic_hd_asm_type_id": 5,
    "clinic_hd_asm_type_name": "Headache"
  },
  {
    "clinic_hd_asm_type_id": 6,
    "clinic_hd_asm_type_name": "Fever"
  },
  {
    "clinic_hd_asm_type_id": 7,
    "clinic_hd_asm_type_name": "Itching"
  },
  {
    "clinic_hd_asm_type_id": 8,
    "clinic_hd_asm_type_name": "Engorged neck vein"
  }
]
```
