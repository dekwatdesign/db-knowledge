# `tmt_gpp_to_tpp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| gpp_code | varchar(15) | YES | MUL | NULL |  |  |
| tpp_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | gpp_code | yes | 1 |
| ix_unique | tpp_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "gpp_code": "1044135",
    "tpp_code": "1044142"
  },
  {
    "gpp_code": "1044174",
    "tpp_code": "1044188"
  },
  {
    "gpp_code": "1044174",
    "tpp_code": "1099469"
  },
  {
    "gpp_code": "1044174",
    "tpp_code": "1236717"
  },
  {
    "gpp_code": "1044174",
    "tpp_code": "1243562"
  },
  {
    "gpp_code": "1044174",
    "tpp_code": "1280434"
  },
  {
    "gpp_code": "1044174",
    "tpp_code": "1292202"
  },
  {
    "gpp_code": "1044174",
    "tpp_code": "1330488"
  }
]
```
