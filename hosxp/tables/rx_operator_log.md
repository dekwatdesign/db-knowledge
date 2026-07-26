# `rx_operator_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_operator_log_id | int(11) | NO | PRI | 0 |  |  |
| log_datetime | datetime | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| log_staff | varchar(50) | YES |  | NULL |  |  |
| check_staff | varchar(6) | YES |  | NULL |  |  |
| pay_staff | varchar(6) | YES |  | NULL |  |  |
| confirm_staff | varchar(6) | YES |  | NULL |  |  |
| prepare_staff | varchar(35) | YES |  | NULL |  |  |
| log_type | varchar(10) | YES |  | NULL |  |  |
| entry_staff | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | rx_operator_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rx_operator_log_id": 249650,
    "log_datetime": "2022-12-09 09:44:02",
    "vn": "651209093014",
    "log_staff": null,
    "check_staff": "182",
    "pay_staff": "361",
    "confirm_staff": "276",
    "prepare_staff": null,
    "log_type": "New",
    "entry_staff": "yuwa218"
  },
  {
    "rx_operator_log_id": 249651,
    "log_datetime": "2022-12-09 09:46:37",
    "vn": "651209093030",
    "log_staff": null,
    "check_staff": "182",
    "pay_staff": "361",
    "confirm_staff": "276",
    "prepare_staff": null,
    "log_type": "Edit",
    "entry_staff": "yuwa218"
  },
  {
    "rx_operator_log_id": 249652,
    "log_datetime": "2022-12-09 09:52:58",
    "vn": "651209085729",
    "log_staff": null,
    "check_staff": "182",
    "pay_staff": "361",
    "confirm_staff": "276",
    "prepare_staff": null,
    "log_type": "Edit",
    "entry_staff": "yuwa218"
  },
  {
    "rx_operator_log_id": 249653,
    "log_datetime": "2022-12-09 09:53:35",
    "vn": "651209085729",
    "log_staff": null,
    "check_staff": "182",
    "pay_staff": "361",
    "confirm_staff": "276",
    "prepare_staff": null,
    "log_type": "Edit",
    "entry_staff": "yuwa218"
  },
  {
    "rx_operator_log_id": 249654,
    "log_datetime": "2022-12-09 09:54:55",
    "vn": "651209083016",
    "log_staff": null,
    "check_staff": "182",
    "pay_staff": "361",
    "confirm_staff": "276",
    "prepare_staff": null,
    "log_type": "New",
    "entry_staff": "yuwa218"
  },
  {
    "rx_operator_log_id": 249655,
    "log_datetime": "2022-12-09 09:56:30",
    "vn": "651209083008",
    "log_staff": null,
    "check_staff": "182",
    "pay_staff": "361",
    "confirm_staff": "276",
    "prepare_staff": null,
    "log_type": "New",
    "entry_staff": "yuwa218"
  },
  {
    "rx_operator_log_id": 249656,
    "log_datetime": "2022-12-09 09:57:32",
    "vn": "651209093016",
    "log_staff": null,
    "check_staff": "182",
    "pay_staff": "361",
    "confirm_staff": "276",
    "prepare_staff": null,
    "log_type": "New",
    "entry_staff": "yuwa218"
  },
  {
    "rx_operator_log_id": 249657,
    "log_datetime": "2022-12-09 10:11:25",
    "vn": "651209091233",
    "log_staff": null,
    "check_staff": "182",
    "pay_staff": "361",
    "confirm_staff": "276",
    "prepare_staff": null,
    "log_type": "Edit",
    "entry_staff": "yuwa218"
  }
]
```
