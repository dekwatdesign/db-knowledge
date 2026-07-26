# `patient_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_log_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| log_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(30) | YES |  | NULL |  |  |
| old_delta | longtext | YES |  | NULL |  |  |
| new_delta | longtext | YES |  | NULL |  |  |
| begin_time | datetime | YES |  | NULL |  |  |
| end_time | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| PRIMARY | patient_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_log_id": 170058,
    "hn": "650006003",
    "log_datetime": "2022-12-09 07:58:07",
    "staff": "[MASKED_FULLNAME]",
    "old_delta": null,
    "new_delta": "[MASKED_FULLNAME]",
    "begin_time": "1899-12-30 00:00:00",
    "end_time": "2022-12-09 07:58:07"
  },
  {
    "patient_log_id": 170059,
    "hn": "650006004",
    "log_datetime": "2022-12-09 08:09:22",
    "staff": "[MASKED_FULLNAME]",
    "old_delta": null,
    "new_delta": "[MASKED_FULLNAME]",
    "begin_time": "2022-12-09 07:58:10",
    "end_time": "2022-12-09 08:09:22"
  },
  {
    "patient_log_id": 170060,
    "hn": "650000891",
    "log_datetime": "2022-12-09 08:10:04",
    "staff": "[MASKED_FULLNAME]",
    "old_delta": "[MASKED_FULLNAME]",
    "new_delta": "[MASKED_FULLNAME]",
    "begin_time": "2022-12-09 08:10:02",
    "end_time": "2022-12-09 08:10:04"
  },
  {
    "patient_log_id": 170061,
    "hn": "650006005",
    "log_datetime": "2022-12-09 08:25:49",
    "staff": "[MASKED_FULLNAME]",
    "old_delta": null,
    "new_delta": "[MASKED_FULLNAME]",
    "begin_time": "2022-12-09 08:10:07",
    "end_time": "2022-12-09 08:25:49"
  },
  {
    "patient_log_id": 170062,
    "hn": "650006006",
    "log_datetime": "2022-12-09 08:47:02",
    "staff": "[MASKED_FULLNAME]",
    "old_delta": null,
    "new_delta": "[MASKED_FULLNAME]",
    "begin_time": "2022-12-09 08:25:52",
    "end_time": "2022-12-09 08:47:02"
  },
  {
    "patient_log_id": 170063,
    "hn": "650006007",
    "log_datetime": "2022-12-09 09:07:48",
    "staff": "[MASKED_FULLNAME]",
    "old_delta": null,
    "new_delta": "[MASKED_FULLNAME]",
    "begin_time": "2022-12-09 08:47:05",
    "end_time": "2022-12-09 09:07:48"
  },
  {
    "patient_log_id": 170064,
    "hn": "650006008",
    "log_datetime": "2022-12-09 09:42:48",
    "staff": "[MASKED_FULLNAME]",
    "old_delta": null,
    "new_delta": "[MASKED_FULLNAME]",
    "begin_time": "2022-12-09 09:07:50",
    "end_time": "2022-12-09 09:42:48"
  },
  {
    "patient_log_id": 170065,
    "hn": "630000129",
    "log_datetime": "2022-12-09 09:45:59",
    "staff": "[MASKED_FULLNAME]",
    "old_delta": "[MASKED_FULLNAME]",
    "new_delta": "[MASKED_FULLNAME]",
    "begin_time": "2022-12-09 09:45:56",
    "end_time": "2022-12-09 09:45:59"
  }
]
```
