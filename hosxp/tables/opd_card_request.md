# `opd_card_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| request_date_time | datetime | YES | MUL | NULL |  |  |
| request_computer | varchar(100) | YES |  | NULL |  |  |
| request_depcode | varchar(25) | YES |  | NULL |  |  |
| request_staff | varchar(25) | YES |  | NULL |  |  |
| print_request | char(1) | YES |  | NULL |  |  |
| print_count | int(11) | YES |  | NULL |  |  |
| checkout_staff | varchar(150) | YES |  | NULL |  |  |
| checkout_date_time | datetime | YES |  | NULL |  |  |
| service_ok | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_hn | hn | no | 1 |
| PRIMARY | vn | yes | 1 |
| request_date_time | request_date_time | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "251125113244",
    "hn": "530172136",
    "request_date_time": "2011-11-24 11:33:15",
    "request_computer": "MRL3-YUWA",
    "request_depcode": "017",
    "request_staff": "yuwa120",
    "print_request": "N",
    "print_count": 1,
    "checkout_staff": null,
    "checkout_date_time": null,
    "service_ok": "N",
    "hos_guid": null
  },
  {
    "vn": "251125113456",
    "hn": "530141354",
    "request_date_time": "2011-11-24 11:35:20",
    "request_computer": "MRL3-YUWA",
    "request_depcode": "017",
    "request_staff": "yuwa120",
    "print_request": "N",
    "print_count": 1,
    "checkout_staff": null,
    "checkout_date_time": null,
    "service_ok": "N",
    "hos_guid": null
  },
  {
    "vn": "251125113735",
    "hn": "530176648",
    "request_date_time": "2011-11-24 11:38:13",
    "request_computer": "MRL3-YUWA",
    "request_depcode": "017",
    "request_staff": "yuwa120",
    "print_request": "N",
    "print_count": 1,
    "checkout_staff": null,
    "checkout_date_time": null,
    "service_ok": "N",
    "hos_guid": null
  },
  {
    "vn": "251125113913",
    "hn": "530144150",
    "request_date_time": "2011-11-24 11:39:33",
    "request_computer": "MRL3-YUWA",
    "request_depcode": "017",
    "request_staff": "yuwa120",
    "print_request": "N",
    "print_count": 1,
    "checkout_staff": null,
    "checkout_date_time": null,
    "service_ok": "N",
    "hos_guid": null
  },
  {
    "vn": "251125114500",
    "hn": "530141154",
    "request_date_time": "2011-11-24 11:45:29",
    "request_computer": "MRL3-YUWA",
    "request_depcode": "017",
    "request_staff": "yuwa120",
    "print_request": "N",
    "print_count": 1,
    "checkout_staff": null,
    "checkout_date_time": null,
    "service_ok": "N",
    "hos_guid": null
  },
  {
    "vn": "541111060002",
    "hn": "530147654",
    "request_date_time": "2011-11-10 10:37:33",
    "request_computer": "MRL3-YUWA",
    "request_depcode": "017",
    "request_staff": "yuwa120",
    "print_request": "N",
    "print_count": 1,
    "checkout_staff": null,
    "checkout_date_time": null,
    "service_ok": "N",
    "hos_guid": null
  },
  {
    "vn": "541111060005",
    "hn": "530190849",
    "request_date_time": "2011-11-10 13:18:38",
    "request_computer": "MRL3-YUWA",
    "request_depcode": "015",
    "request_staff": "yuwa120",
    "print_request": "N",
    "print_count": 1,
    "checkout_staff": null,
    "checkout_date_time": null,
    "service_ok": "N",
    "hos_guid": null
  },
  {
    "vn": "541111060006",
    "hn": "530164551",
    "request_date_time": "2011-11-10 13:19:39",
    "request_computer": "MRL3-YUWA",
    "request_depcode": "015",
    "request_staff": "yuwa120",
    "print_request": "N",
    "print_count": 1,
    "checkout_staff": null,
    "checkout_date_time": null,
    "service_ok": "N",
    "hos_guid": null
  }
]
```
