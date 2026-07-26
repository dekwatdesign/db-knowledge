# `rx_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| doctor | varchar(7) | NO | PRI |  |  |  |
| rx_time | time | YES |  | NULL |  |  |
| rx_no | int(11) | YES |  | NULL |  |  |
| lock_diagnosis | char(1) | YES |  | NULL |  |  |
| prepare_rx | char(1) | YES | MUL | NULL |  |  |
| prepare_staff | varchar(25) | YES |  | NULL |  |  |
| prepare_datetime | datetime | YES | MUL | NULL |  |  |
| rx_date | date | YES | MUL | NULL |  |  |
| finance_checkin | char(1) | YES | MUL | NULL |  |  |
| finance_checkin_com | varchar(20) | YES |  | NULL |  |  |
| finance_checkin_datetime | datetime | YES |  | NULL |  |  |
| rcpt_depcode | char(3) | YES | MUL | NULL |  |  |
| send_depcode | char(3) | YES |  | NULL |  |  |
| rcpt_print | char(1) | YES |  | NULL |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| prepare_rx_count | int(11) | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor | doctor | no | 1 |
| ix_depcode | depcode | no | 1 |
| ix_doctor_date | doctor | no | 1 |
| ix_doctor_date | rx_date | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_ix_financecheckin | finance_checkin | no | 1 |
| ix_ix_prepare_rx | prepare_rx | no | 1 |
| ix_ix_rcpt_depcode | rcpt_depcode | no | 1 |
| ix_prepare_datetime | prepare_datetime | no | 1 |
| ix_rxdate | rx_date | no | 1 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | doctor | yes | 2 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "1xxxxxxxxxxxx",
    "doctor": "212",
    "rx_time": "13:54:37",
    "rx_no": 208106,
    "lock_diagnosis": null,
    "prepare_rx": "N",
    "prepare_staff": null,
    "prepare_datetime": null,
    "rx_date": "2009-06-22",
    "finance_checkin": null,
    "finance_checkin_com": null,
    "finance_checkin_datetime": null,
    "rcpt_depcode": null,
    "send_depcode": null,
    "rcpt_print": null,
    "depcode": "054",
    "prepare_rx_count": null,
    "entry_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060000",
    "doctor": "157",
    "rx_time": "9:26:58",
    "rx_no": 21956,
    "lock_diagnosis": null,
    "prepare_rx": "N",
    "prepare_staff": null,
    "prepare_datetime": null,
    "rx_date": "2011-10-10",
    "finance_checkin": null,
    "finance_checkin_com": null,
    "finance_checkin_datetime": null,
    "rcpt_depcode": null,
    "send_depcode": null,
    "rcpt_print": null,
    "depcode": "017",
    "prepare_rx_count": null,
    "entry_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060000",
    "doctor": "212",
    "rx_time": "16:54:45",
    "rx_no": 21987,
    "lock_diagnosis": null,
    "prepare_rx": "N",
    "prepare_staff": null,
    "prepare_datetime": null,
    "rx_date": "2011-10-10",
    "finance_checkin": null,
    "finance_checkin_com": null,
    "finance_checkin_datetime": null,
    "rcpt_depcode": null,
    "send_depcode": null,
    "rcpt_print": null,
    "depcode": "013",
    "prepare_rx_count": null,
    "entry_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060000",
    "doctor": "218",
    "rx_time": "16:02:06",
    "rx_no": 21892,
    "lock_diagnosis": null,
    "prepare_rx": "N",
    "prepare_staff": null,
    "prepare_datetime": null,
    "rx_date": "2011-10-10",
    "finance_checkin": null,
    "finance_checkin_com": null,
    "finance_checkin_datetime": null,
    "rcpt_depcode": null,
    "send_depcode": null,
    "rcpt_print": null,
    "depcode": "013",
    "prepare_rx_count": null,
    "entry_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060001",
    "doctor": "218",
    "rx_time": "16:03:07",
    "rx_no": 21894,
    "lock_diagnosis": null,
    "prepare_rx": "N",
    "prepare_staff": null,
    "prepare_datetime": null,
    "rx_date": "2011-10-10",
    "finance_checkin": null,
    "finance_checkin_com": null,
    "finance_checkin_datetime": null,
    "rcpt_depcode": null,
    "send_depcode": null,
    "rcpt_print": null,
    "depcode": "013",
    "prepare_rx_count": null,
    "entry_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060002",
    "doctor": "218",
    "rx_time": "16:07:48",
    "rx_no": 21900,
    "lock_diagnosis": null,
    "prepare_rx": "N",
    "prepare_staff": null,
    "prepare_datetime": null,
    "rx_date": "2011-10-10",
    "finance_checkin": null,
    "finance_checkin_com": null,
    "finance_checkin_datetime": null,
    "rcpt_depcode": null,
    "send_depcode": null,
    "rcpt_print": null,
    "depcode": "013",
    "prepare_rx_count": null,
    "entry_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060003",
    "doctor": "218",
    "rx_time": "16:08:56",
    "rx_no": 21902,
    "lock_diagnosis": null,
    "prepare_rx": "N",
    "prepare_staff": null,
    "prepare_datetime": null,
    "rx_date": "2011-10-10",
    "finance_checkin": null,
    "finance_checkin_com": null,
    "finance_checkin_datetime": null,
    "rcpt_depcode": null,
    "send_depcode": null,
    "rcpt_print": null,
    "depcode": "013",
    "prepare_rx_count": null,
    "entry_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060006",
    "doctor": "218",
    "rx_time": "10:23:40",
    "rx_no": 21997,
    "lock_diagnosis": null,
    "prepare_rx": "N",
    "prepare_staff": null,
    "prepare_datetime": null,
    "rx_date": "2011-10-10",
    "finance_checkin": null,
    "finance_checkin_com": null,
    "finance_checkin_datetime": null,
    "rcpt_depcode": null,
    "send_depcode": null,
    "rcpt_print": null,
    "depcode": "017",
    "prepare_rx_count": null,
    "entry_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
