# `icd11_postcoord_axis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(10) | NO | PRI | NULL |  |  |
| axis_name | varchar(100) | NO | PRI | NULL |  |  |
| is_required | char(1) | YES |  | NULL |  |  |
| allow_multiple | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | axis_name | yes | 1 |
| PRIMARY | code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "LB74.4",
    "axis_name": "laterality",
    "is_required": "N",
    "allow_multiple": "NotAllowed"
  },
  {
    "code": "NC56.4",
    "axis_name": "laterality",
    "is_required": "N",
    "allow_multiple": "NotAllowed"
  },
  {
    "code": "NC56.4",
    "axis_name": "specificAnatomy",
    "is_required": "N",
    "allow_multiple": "AllowAlways"
  },
  {
    "code": "NC56.4",
    "axis_name": "associatedWith",
    "is_required": "N",
    "allow_multiple": "AllowAlways"
  },
  {
    "code": "NC56.4Y",
    "axis_name": "laterality",
    "is_required": "N",
    "allow_multiple": "NotAllowed"
  },
  {
    "code": "NC56.4Y",
    "axis_name": "specificAnatomy",
    "is_required": "N",
    "allow_multiple": "AllowAlways"
  },
  {
    "code": "NC56.4Y",
    "axis_name": "associatedWith",
    "is_required": "N",
    "allow_multiple": "AllowAlways"
  },
  {
    "code": "NC56.4Z",
    "axis_name": "laterality",
    "is_required": "N",
    "allow_multiple": "NotAllowed"
  }
]
```
