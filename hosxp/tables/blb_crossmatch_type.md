# `blb_crossmatch_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_crossmatch_type_id | int(11) | NO | PRI | 0 |  |  |
| blb_crossmatch_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_crossmatch_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "blb_crossmatch_type_id": 1,
    "blb_crossmatch_type_name": "IS"
  },
  {
    "blb_crossmatch_type_id": 2,
    "blb_crossmatch_type_name": "37C"
  },
  {
    "blb_crossmatch_type_id": 3,
    "blb_crossmatch_type_name": "IAT"
  },
  {
    "blb_crossmatch_type_id": 4,
    "blb_crossmatch_type_name": "Result"
  },
  {
    "blb_crossmatch_type_id": 5,
    "blb_crossmatch_type_name": "CCC"
  }
]
```
