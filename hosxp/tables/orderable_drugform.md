# `orderable_drugform`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| orderable_drugform_id | int(11) | NO | PRI | 0 |  |  |
| code | varchar(20) | YES | UNI | NULL |  |  |
| display | varchar(100) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code | code | yes | 1 |
| ix_display | display | yes | 1 |
| PRIMARY | orderable_drugform_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "orderable_drugform_id": 1,
    "code": "DROP",
    "display": "Drops"
  },
  {
    "orderable_drugform_id": 2,
    "code": "PUFF",
    "display": "Puff"
  },
  {
    "orderable_drugform_id": 3,
    "code": "SCOOP",
    "display": "Scoops"
  },
  {
    "orderable_drugform_id": 4,
    "code": "SPRY",
    "display": "Sprays"
  },
  {
    "orderable_drugform_id": 5,
    "code": "AER",
    "display": "Aerosol"
  },
  {
    "orderable_drugform_id": 6,
    "code": "DERMSPRY",
    "display": "Dermal Spray"
  },
  {
    "orderable_drugform_id": 7,
    "code": "FOAM",
    "display": "Foam"
  },
  {
    "orderable_drugform_id": 8,
    "code": "INHL",
    "display": "Inhalant"
  }
]
```
