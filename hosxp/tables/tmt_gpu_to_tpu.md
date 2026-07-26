# `tmt_gpu_to_tpu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| gpu_code | varchar(10) | NO | PRI |  |  |  |
| tpu_code | varchar(10) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | gpu_code | yes | 1 |
| PRIMARY | tpu_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "gpu_code": "1000027",
    "tpu_code": "1000043"
  },
  {
    "gpu_code": "1000070",
    "tpu_code": "1000091"
  },
  {
    "gpu_code": "1000117",
    "tpu_code": "1000138"
  },
  {
    "gpu_code": "1000155",
    "tpu_code": "1000172"
  },
  {
    "gpu_code": "1000206",
    "tpu_code": "1000223"
  },
  {
    "gpu_code": "1000252",
    "tpu_code": "1000275"
  },
  {
    "gpu_code": "1000321",
    "tpu_code": "1000345"
  },
  {
    "gpu_code": "1000321",
    "tpu_code": "1322556"
  }
]
```
