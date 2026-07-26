# `tmt_gp_to_gpu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| gp_code | varchar(7) | NO | PRI |  |  |  |
| gpu_code | varchar(10) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | gp_code | yes | 1 |
| PRIMARY | gpu_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "gp_code": "1000015",
    "gpu_code": "1000027"
  },
  {
    "gp_code": "1000062",
    "gpu_code": "1000070"
  },
  {
    "gp_code": "1000101",
    "gpu_code": "1000117"
  },
  {
    "gp_code": "1000140",
    "gpu_code": "1000155"
  },
  {
    "gp_code": "1000193",
    "gpu_code": "1000206"
  },
  {
    "gp_code": "1000193",
    "gpu_code": "1007709"
  },
  {
    "gp_code": "1000247",
    "gpu_code": "1000252"
  },
  {
    "gp_code": "1000247",
    "gpu_code": "1153925"
  }
]
```
