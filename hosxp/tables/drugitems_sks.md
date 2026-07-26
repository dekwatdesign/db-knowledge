# `drugitems_sks`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_sks_id | int(11) | NO | PRI | 0 |  |  |
| icode | char(7) | YES | UNI | NULL |  |  |
| export_opd | char(1) | YES |  | NULL |  |  |
| export_ipd | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | yes | 1 |
| PRIMARY | drugitems_sks_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugitems_sks_id": 1,
    "icode": "1000082",
    "export_opd": "Y",
    "export_ipd": "Y"
  },
  {
    "drugitems_sks_id": 2,
    "icode": "1000100",
    "export_opd": "Y",
    "export_ipd": "Y"
  },
  {
    "drugitems_sks_id": 3,
    "icode": "1550001",
    "export_opd": "Y",
    "export_ipd": "Y"
  },
  {
    "drugitems_sks_id": 4,
    "icode": "1550002",
    "export_opd": "Y",
    "export_ipd": "Y"
  },
  {
    "drugitems_sks_id": 5,
    "icode": "1580003",
    "export_opd": "Y",
    "export_ipd": "Y"
  },
  {
    "drugitems_sks_id": 6,
    "icode": "1000001",
    "export_opd": "Y",
    "export_ipd": "Y"
  },
  {
    "drugitems_sks_id": 7,
    "icode": "1000002",
    "export_opd": "Y",
    "export_ipd": "Y"
  },
  {
    "drugitems_sks_id": 8,
    "icode": "1000003",
    "export_opd": "Y",
    "export_ipd": "Y"
  }
]
```
