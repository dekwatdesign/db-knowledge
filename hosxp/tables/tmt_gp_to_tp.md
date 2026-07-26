# `tmt_gp_to_tp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| gp_code | varchar(10) | YES | MUL | NULL |  |  |
| tp_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni | gp_code | yes | 1 |
| ix_uni | tp_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "gp_code": "1000015",
    "tp_code": "1000036"
  },
  {
    "gp_code": "1000062",
    "tp_code": "1000089"
  },
  {
    "gp_code": "1000101",
    "tp_code": "1000129"
  },
  {
    "gp_code": "1000140",
    "tp_code": "1000164"
  },
  {
    "gp_code": "1000193",
    "tp_code": "1000210"
  },
  {
    "gp_code": "1000193",
    "tp_code": "1007713"
  },
  {
    "gp_code": "1000193",
    "tp_code": "1267580"
  },
  {
    "gp_code": "1000247",
    "tp_code": "1000268"
  }
]
```
