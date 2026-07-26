# `tmt_tp_to_tpu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tp_code | varchar(10) | NO | PRI |  |  |  |
| tpu_code | varchar(10) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | tp_code | yes | 1 |
| PRIMARY | tpu_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tp_code": "1000036",
    "tpu_code": "1000043"
  },
  {
    "tp_code": "1000089",
    "tpu_code": "1000091"
  },
  {
    "tp_code": "1000129",
    "tpu_code": "1000138"
  },
  {
    "tp_code": "1000164",
    "tpu_code": "1000172"
  },
  {
    "tp_code": "1000210",
    "tpu_code": "1000223"
  },
  {
    "tp_code": "1000268",
    "tpu_code": "1000275"
  },
  {
    "tp_code": "1000281",
    "tpu_code": "1000299"
  },
  {
    "tp_code": "1000332",
    "tpu_code": "1000345"
  }
]
```
