# `provis_medication_unit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_medication_unit_code | varchar(10) | NO | PRI |  |  |  |
| provis_medication_unit_name | varchar(100) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_provis_medication_unit_name | provis_medication_unit_name | yes | 1 |
| PRIMARY | provis_medication_unit_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "provis_medication_unit_code": "001",
    "provis_medication_unit_name": "กระป๋อง"
  },
  {
    "provis_medication_unit_code": "002",
    "provis_medication_unit_name": "กระปุก"
  },
  {
    "provis_medication_unit_code": "003",
    "provis_medication_unit_name": "กล่อง"
  },
  {
    "provis_medication_unit_code": "004",
    "provis_medication_unit_name": "ก้อน"
  },
  {
    "provis_medication_unit_code": "005",
    "provis_medication_unit_name": "แกลลอน"
  },
  {
    "provis_medication_unit_code": "006",
    "provis_medication_unit_name": "ขวด"
  },
  {
    "provis_medication_unit_code": "007",
    "provis_medication_unit_name": "คาทริดจ์"
  },
  {
    "provis_medication_unit_code": "008",
    "provis_medication_unit_name": "คู่"
  }
]
```
