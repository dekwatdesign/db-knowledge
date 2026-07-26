# `ksklog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ksklog_id | int(11) | NO | PRI | 0 |  |  |
| logtime | datetime | YES |  | NULL |  |  |
| loginname | varchar(250) | YES |  | NULL |  |  |
| tablename | varchar(50) | YES | MUL | NULL |  |  |
| modifytype | varchar(50) | YES |  | NULL |  |  |
| detail | varchar(250) | YES | MUL | NULL |  |  |
| old_delta | longtext | YES |  | NULL |  |  |
| new_delta | longtext | YES |  | NULL |  |  |
| log_id | int(11) | YES |  | NULL |  |  |
| computer_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ix_detail | detail | no | 1 |
| ix_ix_tablename | tablename | no | 1 |
| PRIMARY | ksklog_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ksklog_id": 3836442,
    "logtime": "2018-07-19 12:24:49",
    "loginname": "yuwa152",
    "tablename": "Patient",
    "modifytype": "Insert",
    "detail": "610001246",
    "old_delta": null,
    "new_delta": "[MASKED_FULLNAME]",
    "log_id": 1385366,
    "computer_name": "MRL1-YUWA",
    "hos_guid": null
  },
  {
    "ksklog_id": 3836441,
    "logtime": "2018-07-19 12:24:16",
    "loginname": "yuwa214",
    "tablename": "SCREEN",
    "modifytype": "EDIT",
    "detail": "610719110018",
    "old_delta": null,
    "new_delta": null,
    "log_id": null,
    "computer_name": "DESKTOP-AVVEHF6",
    "hos_guid": null
  },
  {
    "ksklog_id": 3836440,
    "logtime": "2018-07-19 12:24:32",
    "loginname": "yuwa027",
    "tablename": "RX",
    "modifytype": "EDIT",
    "detail": "610719111003",
    "old_delta": null,
    "new_delta": null,
    "log_id": null,
    "computer_name": "MED01-YUWA",
    "hos_guid": null
  },
  {
    "ksklog_id": 3836439,
    "logtime": "2018-07-19 12:22:58",
    "loginname": "yuwa157",
    "tablename": "SCREEN",
    "modifytype": "EDIT",
    "detail": "610719103048",
    "old_delta": null,
    "new_delta": null,
    "log_id": null,
    "computer_name": "COM0001-PC",
    "hos_guid": null
  },
  {
    "ksklog_id": 3836438,
    "logtime": "2018-07-19 12:22:55",
    "loginname": "yuwa027",
    "tablename": "RX",
    "modifytype": "EDIT",
    "detail": "610719111003",
    "old_delta": null,
    "new_delta": null,
    "log_id": null,
    "computer_name": "MED01-YUWA",
    "hos_guid": null
  },
  {
    "ksklog_id": 3836431,
    "logtime": "2018-07-19 12:21:10",
    "loginname": "yuwa027",
    "tablename": "RX",
    "modifytype": "EDIT",
    "detail": "610719103022",
    "old_delta": null,
    "new_delta": null,
    "log_id": null,
    "computer_name": "MED01-YUWA",
    "hos_guid": null
  },
  {
    "ksklog_id": 3836432,
    "logtime": "2018-07-19 12:20:45",
    "loginname": "yuwa214",
    "tablename": "SCREEN",
    "modifytype": "EDIT",
    "detail": "610719103032",
    "old_delta": null,
    "new_delta": null,
    "log_id": null,
    "computer_name": "DESKTOP-AVVEHF6",
    "hos_guid": null
  },
  {
    "ksklog_id": 3836433,
    "logtime": "2018-07-19 12:21:19",
    "loginname": "yuwa226",
    "tablename": "DOCTOR",
    "modifytype": "EDIT",
    "detail": "610719092803",
    "old_delta": null,
    "new_delta": null,
    "log_id": null,
    "computer_name": "EXAM2-YUWA",
    "hos_guid": null
  }
]
```
