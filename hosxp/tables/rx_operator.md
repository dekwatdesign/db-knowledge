# `rx_operator`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_operator_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| lock_order | char(1) | YES |  | NULL |  |  |
| login | varchar(50) | YES | MUL | NULL |  |  |
| rx_time | time | YES |  | NULL |  |  |
| pay | char(1) | YES |  | NULL |  |  |
| rx_print | char(1) | YES |  | NULL |  |  |
| check_staff | varchar(25) | YES |  | NULL |  |  |
| pay_staff | varchar(25) | YES |  | NULL |  |  |
| print_count | int(11) | YES |  | NULL |  |  |
| confirm_staff | varchar(25) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| prepare_rx | char(1) | YES |  | NULL |  |  |
| order_date | date | YES | MUL | NULL |  |  |
| prepare_staff | varchar(25) | YES |  | NULL |  |  |
| prepare_date_time | datetime | YES |  | NULL |  |  |
| print_rcpt | char(1) | YES |  | NULL |  |  |
| allow_rx_edit | char(1) | YES |  | NULL |  |  |
| rx_depcode | varchar(3) | YES |  | NULL |  |  |
| pay_depcode | varchar(3) | YES |  | NULL |  |  |
| print_depcode | varchar(3) | YES |  | NULL |  |  |
| call_time | time | YES |  | NULL |  |  |
| call_pay | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_order_date | order_date | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_login_unique | vn | yes | 1 |
| ix_vn_login_unique | login | yes | 2 |
| ix_vn_login_unique_index | login | yes | 1 |
| ix_vn_login_unique_index | vn | yes | 2 |
| PRIMARY | rx_operator_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rx_operator_id": 1,
    "vn": "541005183503",
    "lock_order": null,
    "login": "bms",
    "rx_time": "20:58:57",
    "pay": null,
    "rx_print": "Y",
    "check_staff": null,
    "pay_staff": null,
    "print_count": 8,
    "confirm_staff": null,
    "note": null,
    "prepare_rx": "N",
    "order_date": null,
    "prepare_staff": null,
    "prepare_date_time": null,
    "print_rcpt": null,
    "allow_rx_edit": null,
    "rx_depcode": "030",
    "pay_depcode": null,
    "print_depcode": "030",
    "call_time": null,
    "call_pay": null,
    "hos_guid": null
  },
  {
    "rx_operator_id": 2,
    "vn": "541007091925",
    "lock_order": null,
    "login": "yuwa027",
    "rx_time": "10:39:33",
    "pay": null,
    "rx_print": null,
    "check_staff": null,
    "pay_staff": null,
    "print_count": 1,
    "confirm_staff": null,
    "note": null,
    "prepare_rx": "N",
    "order_date": null,
    "prepare_staff": null,
    "prepare_date_time": null,
    "print_rcpt": null,
    "allow_rx_edit": null,
    "rx_depcode": "030",
    "pay_depcode": null,
    "print_depcode": "030",
    "call_time": null,
    "call_pay": null,
    "hos_guid": null
  },
  {
    "rx_operator_id": 3,
    "vn": "541007091925",
    "lock_order": "N",
    "login": "yuwa024",
    "rx_time": "10:12:36",
    "pay": "Y",
    "rx_print": null,
    "check_staff": "",
    "pay_staff": "",
    "print_count": 1,
    "confirm_staff": "",
    "note": "Prescribing error Depakine CR 500 mg เขียน 200 mg",
    "prepare_rx": null,
    "order_date": null,
    "prepare_staff": null,
    "prepare_date_time": null,
    "print_rcpt": null,
    "allow_rx_edit": null,
    "rx_depcode": null,
    "pay_depcode": "030",
    "print_depcode": "030",
    "call_time": null,
    "call_pay": null,
    "hos_guid": null
  },
  {
    "rx_operator_id": 4,
    "vn": "541007091946",
    "lock_order": "N",
    "login": "yuwa027",
    "rx_time": "10:54:29",
    "pay": "Y",
    "rx_print": null,
    "check_staff": "245",
    "pay_staff": "086",
    "print_count": 2,
    "confirm_staff": "086",
    "note": null,
    "prepare_rx": "N",
    "order_date": null,
    "prepare_staff": null,
    "prepare_date_time": null,
    "print_rcpt": null,
    "allow_rx_edit": null,
    "rx_depcode": "030",
    "pay_depcode": "030",
    "print_depcode": "030",
    "call_time": null,
    "call_pay": null,
    "hos_guid": null
  },
  {
    "rx_operator_id": 5,
    "vn": "541007091946",
    "lock_order": null,
    "login": "bms",
    "rx_time": "10:37:00",
    "pay": null,
    "rx_print": null,
    "check_staff": null,
    "pay_staff": null,
    "print_count": 6,
    "confirm_staff": null,
    "note": null,
    "prepare_rx": "N",
    "order_date": null,
    "prepare_staff": null,
    "prepare_date_time": null,
    "print_rcpt": null,
    "allow_rx_edit": null,
    "rx_depcode": "030",
    "pay_depcode": null,
    "print_depcode": "030",
    "call_time": null,
    "call_pay": null,
    "hos_guid": null
  },
  {
    "rx_operator_id": 6,
    "vn": "541007092344",
    "lock_order": "N",
    "login": "yuwa027",
    "rx_time": "10:44:00",
    "pay": "Y",
    "rx_print": null,
    "check_staff": "245",
    "pay_staff": "086",
    "print_count": 2,
    "confirm_staff": "086",
    "note": null,
    "prepare_rx": "N",
    "order_date": null,
    "prepare_staff": null,
    "prepare_date_time": null,
    "print_rcpt": null,
    "allow_rx_edit": null,
    "rx_depcode": "030",
    "pay_depcode": "030",
    "print_depcode": "030",
    "call_time": null,
    "call_pay": null,
    "hos_guid": null
  },
  {
    "rx_operator_id": 7,
    "vn": "541007091806",
    "lock_order": "N",
    "login": "yuwa027",
    "rx_time": "10:47:24",
    "pay": "Y",
    "rx_print": null,
    "check_staff": "245",
    "pay_staff": "086",
    "print_count": 2,
    "confirm_staff": "086",
    "note": null,
    "prepare_rx": "N",
    "order_date": null,
    "prepare_staff": null,
    "prepare_date_time": null,
    "print_rcpt": null,
    "allow_rx_edit": null,
    "rx_depcode": "030",
    "pay_depcode": "030",
    "print_depcode": "030",
    "call_time": null,
    "call_pay": null,
    "hos_guid": null
  },
  {
    "rx_operator_id": 8,
    "vn": "541007110427",
    "lock_order": "N",
    "login": "yuwa027",
    "rx_time": "12:07:41",
    "pay": "Y",
    "rx_print": null,
    "check_staff": "245",
    "pay_staff": "086",
    "print_count": 3,
    "confirm_staff": "086",
    "note": null,
    "prepare_rx": "N",
    "order_date": null,
    "prepare_staff": null,
    "prepare_date_time": null,
    "print_rcpt": null,
    "allow_rx_edit": null,
    "rx_depcode": "030",
    "pay_depcode": "030",
    "print_depcode": "030",
    "call_time": null,
    "call_pay": null,
    "hos_guid": null
  }
]
```
