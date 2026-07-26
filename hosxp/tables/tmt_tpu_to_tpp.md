# `tmt_tpu_to_tpp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tpu_code | varchar(15) | YES |  | NULL |  |  |
| tpp_code | varchar(15) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | tpp_code | yes | 1 |
| ix_unique | tpu_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tpu_code": "1044126",
    "tpp_code": "1044142"
  },
  {
    "tpu_code": "1044161",
    "tpp_code": "1044188"
  },
  {
    "tpu_code": "1044190",
    "tpp_code": "1044212"
  },
  {
    "tpu_code": "1044231",
    "tpp_code": "1044254"
  },
  {
    "tpu_code": "1044231",
    "tpp_code": "1044277"
  },
  {
    "tpu_code": "1044296",
    "tpp_code": "1044310"
  },
  {
    "tpu_code": "1044296",
    "tpp_code": "1044334"
  },
  {
    "tpu_code": "1044375",
    "tpp_code": "1044399"
  }
]
```
