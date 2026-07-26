# `lab_access_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| log_number | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| log_date_time | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES | MUL | NULL |  |  |
| doctor_code | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_staff | staff | no | 1 |
| lab_order_number | lab_order_number | no | 1 |
| PRIMARY | log_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "log_number": 2476,
    "lab_order_number": 19182,
    "log_date_time": "2022-12-09 09:28:41",
    "staff": "[MASKED_FULLNAME]",
    "doctor_code": null
  },
  {
    "log_number": 2477,
    "lab_order_number": 19183,
    "log_date_time": "2022-12-09 09:29:47",
    "staff": "[MASKED_FULLNAME]",
    "doctor_code": null
  },
  {
    "log_number": 2478,
    "lab_order_number": 19184,
    "log_date_time": "2022-12-09 09:29:58",
    "staff": "[MASKED_FULLNAME]",
    "doctor_code": null
  },
  {
    "log_number": 2479,
    "lab_order_number": 18955,
    "log_date_time": "2022-12-09 12:21:10",
    "staff": "[MASKED_FULLNAME]",
    "doctor_code": null
  },
  {
    "log_number": 2480,
    "lab_order_number": 18954,
    "log_date_time": "2022-12-09 12:21:30",
    "staff": "[MASKED_FULLNAME]",
    "doctor_code": null
  },
  {
    "log_number": 2481,
    "lab_order_number": 18953,
    "log_date_time": "2022-12-09 12:21:45",
    "staff": "[MASKED_FULLNAME]",
    "doctor_code": null
  },
  {
    "log_number": 2482,
    "lab_order_number": 19194,
    "log_date_time": "2022-12-14 11:12:51",
    "staff": "[MASKED_FULLNAME]",
    "doctor_code": null
  },
  {
    "log_number": 2483,
    "lab_order_number": 19209,
    "log_date_time": "2022-12-15 12:42:34",
    "staff": "[MASKED_FULLNAME]",
    "doctor_code": null
  }
]
```
