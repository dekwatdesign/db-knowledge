# `ipt_diagnosis_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_diagnosis_log_id | int(11) | NO | PRI | 0 |  |  |
| ipt_diagnosis_log_date | date | YES |  | NULL |  |  |
| ipt_diagnosis_log_time | time | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipt_diagnosis_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_diagnosis_log_id": 5242,
    "ipt_diagnosis_log_date": "2022-12-08",
    "ipt_diagnosis_log_time": "9:12:45",
    "an": "650001916",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ipt_diagnosis_log_id": 5243,
    "ipt_diagnosis_log_date": "2022-12-08",
    "ipt_diagnosis_log_time": "9:12:46",
    "an": "650001916",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ipt_diagnosis_log_id": 5244,
    "ipt_diagnosis_log_date": "2022-12-08",
    "ipt_diagnosis_log_time": "11:06:57",
    "an": "650002216",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ipt_diagnosis_log_id": 5245,
    "ipt_diagnosis_log_date": "2022-12-08",
    "ipt_diagnosis_log_time": "11:10:53",
    "an": "650002215",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ipt_diagnosis_log_id": 5246,
    "ipt_diagnosis_log_date": "2022-12-08",
    "ipt_diagnosis_log_time": "11:11:25",
    "an": "650002217",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ipt_diagnosis_log_id": 5247,
    "ipt_diagnosis_log_date": "2022-12-08",
    "ipt_diagnosis_log_time": "13:13:18",
    "an": "650002159",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ipt_diagnosis_log_id": 5248,
    "ipt_diagnosis_log_date": "2022-12-08",
    "ipt_diagnosis_log_time": "13:15:52",
    "an": "650002149",
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "ipt_diagnosis_log_id": 5249,
    "ipt_diagnosis_log_date": "2022-12-08",
    "ipt_diagnosis_log_time": "13:18:52",
    "an": "650002102",
    "staff": "[MASKED_FULLNAME]"
  }
]
```
