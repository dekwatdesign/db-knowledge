# `tmt_gpu_to_gpp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| gpu_code | varchar(15) | YES |  | NULL |  |  |
| gpp_code | varchar(15) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | gpp_code | yes | 1 |
| ix_unique | gpu_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "gpu_code": "835287",
    "gpp_code": "1044135"
  },
  {
    "gpu_code": "973387",
    "gpp_code": "1044174"
  },
  {
    "gpu_code": "809737",
    "gpp_code": "1044208"
  },
  {
    "gpu_code": "994521",
    "gpp_code": "1044249"
  },
  {
    "gpu_code": "994521",
    "gpp_code": "1044265"
  },
  {
    "gpu_code": "955577",
    "gpp_code": "1044306"
  },
  {
    "gpu_code": "955577",
    "gpp_code": "1044323"
  },
  {
    "gpu_code": "1044352",
    "gpp_code": "1044381"
  }
]
```
