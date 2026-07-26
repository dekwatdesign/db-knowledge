# `icd11_inclusion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(10) | NO | PRI | NULL |  |  |
| ordinal | int(11) | NO | PRI | NULL |  |  |
| label | varchar(500) | NO |  | NULL |  |  |
| ref_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | code | yes | 1 |
| PRIMARY | ordinal | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "MB20.0",
    "ordinal": 0,
    "label": "Semicoma",
    "ref_code": null
  },
  {
    "code": "XH79L3",
    "ordinal": 0,
    "label": "Malignant lymphoma, mixed cell type, follicular",
    "ref_code": null
  },
  {
    "code": "XH79L3",
    "ordinal": 1,
    "label": "Malignant lymphoma, mixed cell type, nodular",
    "ref_code": null
  },
  {
    "code": "XH79L3",
    "ordinal": 2,
    "label": "Malignant lymphoma, mixed lymphocytic-histiocytic, nodular",
    "ref_code": null
  },
  {
    "code": "XH79L3",
    "ordinal": 3,
    "label": "Malignant lymphoma, mixed small cleaved and large cell, follicular",
    "ref_code": null
  },
  {
    "code": "ND12.0",
    "ordinal": 0,
    "label": "laceration of skin of ankle or foot",
    "ref_code": null
  },
  {
    "code": "DB60.0",
    "ordinal": 0,
    "label": "Haemorrhoids (bleeding) without prolapse outside of anal canal",
    "ref_code": null
  },
  {
    "code": "SF97",
    "ordinal": 0,
    "label": "Life-gate fire depletion pattern (TM1)",
    "ref_code": null
  }
]
```
