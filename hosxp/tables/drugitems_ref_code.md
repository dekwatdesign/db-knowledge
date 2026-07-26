# `drugitems_ref_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_ref_code_id | int(11) | NO | PRI | 0 |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| drugitems_ref_code_type_id | int(11) | YES |  | NULL |  |  |
| ref_code | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | drugitems_ref_code_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugitems_ref_code_id": 1,
    "icode": "1000002",
    "drugitems_ref_code_type_id": 1,
    "ref_code": "100008190003471120381506"
  },
  {
    "drugitems_ref_code_id": 2,
    "icode": "1000004",
    "drugitems_ref_code_type_id": 1,
    "ref_code": "100008190000450230581506"
  },
  {
    "drugitems_ref_code_id": 3,
    "icode": "1000008",
    "drugitems_ref_code_type_id": 1,
    "ref_code": "101208017002781130781674"
  },
  {
    "drugitems_ref_code_id": 4,
    "icode": "1000010",
    "drugitems_ref_code_type_id": 1,
    "ref_code": "100388000000531310181506"
  },
  {
    "drugitems_ref_code_id": 5,
    "icode": "1000011",
    "drugitems_ref_code_type_id": 1,
    "ref_code": "100070000004203120381506"
  },
  {
    "drugitems_ref_code_id": 6,
    "icode": "1000013",
    "drugitems_ref_code_type_id": 1,
    "ref_code": "100070000000920430481506"
  },
  {
    "drugitems_ref_code_id": 7,
    "icode": "1000014",
    "drugitems_ref_code_type_id": 1,
    "ref_code": "101804000050160241581506"
  },
  {
    "drugitems_ref_code_id": 8,
    "icode": "1000015",
    "drugitems_ref_code_type_id": 1,
    "ref_code": "101804000020190141581673"
  }
]
```
