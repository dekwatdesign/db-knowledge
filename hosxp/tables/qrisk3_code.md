# `qrisk3_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| qrisk3_code_id | int(11) | NO | PRI | 0 |  |  |
| category | varchar(15) | YES | MUL | NULL |  |  |
| code | int(11) | YES |  | NULL |  |  |
| description | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_category | category | no | 1 |
| ix_category_code | category | yes | 1 |
| ix_category_code | code | yes | 2 |
| PRIMARY | qrisk3_code_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "qrisk3_code_id": 101,
    "category": "ethnicity",
    "code": 1,
    "description": "White or not stated"
  },
  {
    "qrisk3_code_id": 102,
    "category": "ethnicity",
    "code": 2,
    "description": "Indian"
  },
  {
    "qrisk3_code_id": 103,
    "category": "ethnicity",
    "code": 3,
    "description": "Pakistani"
  },
  {
    "qrisk3_code_id": 104,
    "category": "ethnicity",
    "code": 4,
    "description": "Bangladeshi"
  },
  {
    "qrisk3_code_id": 105,
    "category": "ethnicity",
    "code": 5,
    "description": "Other Asian"
  },
  {
    "qrisk3_code_id": 106,
    "category": "ethnicity",
    "code": 6,
    "description": "Black Caribbean"
  },
  {
    "qrisk3_code_id": 107,
    "category": "ethnicity",
    "code": 7,
    "description": "Black African"
  },
  {
    "qrisk3_code_id": 108,
    "category": "ethnicity",
    "code": 8,
    "description": "Chinese"
  }
]
```
