# `patient_emr_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_emr_log_id | int(11) | NO | PRI | 0 |  |  |
| access_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| computer | varchar(100) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| PRIMARY | patient_emr_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_emr_log_id": 129069,
    "access_datetime": "2022-12-09 08:19:02",
    "staff": "[MASKED_FULLNAME]",
    "computer": "A63-0046",
    "hn": "640000094"
  },
  {
    "patient_emr_log_id": 129070,
    "access_datetime": "2022-12-09 08:22:29",
    "staff": "[MASKED_FULLNAME]",
    "computer": "A63-0046",
    "hn": "650005751"
  },
  {
    "patient_emr_log_id": 129071,
    "access_datetime": "2022-12-09 08:33:46",
    "staff": "[MASKED_FULLNAME]",
    "computer": "A63-0046",
    "hn": "570000679"
  },
  {
    "patient_emr_log_id": 129072,
    "access_datetime": "2022-12-09 08:36:48",
    "staff": "[MASKED_FULLNAME]",
    "computer": "A63-0046",
    "hn": "650003936"
  },
  {
    "patient_emr_log_id": 129073,
    "access_datetime": "2022-12-09 08:39:26",
    "staff": "[MASKED_FULLNAME]",
    "computer": "A63-0046",
    "hn": "600000819"
  },
  {
    "patient_emr_log_id": 129074,
    "access_datetime": "2022-12-09 08:45:04",
    "staff": "[MASKED_FULLNAME]",
    "computer": "A63-0045",
    "hn": "650005616"
  },
  {
    "patient_emr_log_id": 129075,
    "access_datetime": "2022-12-09 09:01:02",
    "staff": "[MASKED_FULLNAME]",
    "computer": "A63-0007",
    "hn": "540001922"
  },
  {
    "patient_emr_log_id": 129076,
    "access_datetime": "2022-12-09 09:01:12",
    "staff": "[MASKED_FULLNAME]",
    "computer": "A63-0007",
    "hn": "600000671"
  }
]
```
