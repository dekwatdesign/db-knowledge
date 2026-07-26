# `sct_unit_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sct_unit_code | varchar(20) | NO | PRI |  |  |  |
| sct_unit_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_sct_unit_name | sct_unit_name | yes | 1 |
| PRIMARY | sct_unit_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sct_unit_code": "732936001",
    "sct_unit_name": "Tablet (unit of presentation)"
  },
  {
    "sct_unit_code": "732937005",
    "sct_unit_name": "Capsule (unit of presentation)"
  },
  {
    "sct_unit_code": "732978007",
    "sct_unit_name": "Ampule (unit of presentation)"
  },
  {
    "sct_unit_code": "732980001",
    "sct_unit_name": "Applicator (unit of presentation)"
  },
  {
    "sct_unit_code": "732981002",
    "sct_unit_name": "Actuation (unit of presentation)"
  },
  {
    "sct_unit_code": "732982009",
    "sct_unit_name": "Bag (unit of presentation)"
  },
  {
    "sct_unit_code": "732983004",
    "sct_unit_name": "Barrel (unit of presentation)"
  },
  {
    "sct_unit_code": "732984005",
    "sct_unit_name": "Blister (unit of presentation)"
  }
]
```
