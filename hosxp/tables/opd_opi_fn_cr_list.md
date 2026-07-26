# `opd_opi_fn_cr_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_opi_fn_cr_list_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| opd_opi_fn_cr_date | date | YES |  | NULL |  |  |
| opd_opi_fn_cr_time | time | YES |  | NULL |  |  |
| opd_opi_fn_cr_staff | varchar(50) | YES |  | NULL |  |  |
| clear_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| status_ok | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fn | finance_number | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opd_opi_fn_cr_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_opi_fn_cr_list_id": 1,
    "vn": "620806091743",
    "pttype": "02",
    "opd_opi_fn_cr_date": "2020-04-03",
    "opd_opi_fn_cr_time": "15:38:01",
    "opd_opi_fn_cr_staff": "chatchawal",
    "clear_amount": 50.0,
    "hos_guid": null,
    "finance_number": "0261786",
    "status_ok": "Y"
  },
  {
    "opd_opi_fn_cr_list_id": 2,
    "vn": "670507122011",
    "pttype": "74",
    "opd_opi_fn_cr_date": "2024-05-07",
    "opd_opi_fn_cr_time": "13:18:41",
    "opd_opi_fn_cr_staff": "yuwa414",
    "clear_amount": 365.0,
    "hos_guid": null,
    "finance_number": "0293917",
    "status_ok": "Y"
  },
  {
    "opd_opi_fn_cr_list_id": 3,
    "vn": "670507125722",
    "pttype": "74",
    "opd_opi_fn_cr_date": "2024-05-07",
    "opd_opi_fn_cr_time": "13:24:46",
    "opd_opi_fn_cr_staff": "yuwa414",
    "clear_amount": 2187.5,
    "hos_guid": null,
    "finance_number": "0293918",
    "status_ok": "Y"
  },
  {
    "opd_opi_fn_cr_list_id": 4,
    "vn": "670507130020",
    "pttype": "74",
    "opd_opi_fn_cr_date": "2024-05-07",
    "opd_opi_fn_cr_time": "13:50:14",
    "opd_opi_fn_cr_staff": "yuwa414",
    "clear_amount": 2480.0,
    "hos_guid": null,
    "finance_number": "0293920",
    "status_ok": "Y"
  },
  {
    "opd_opi_fn_cr_list_id": 5,
    "vn": "670507131956",
    "pttype": "74",
    "opd_opi_fn_cr_date": "2024-05-07",
    "opd_opi_fn_cr_time": "13:52:02",
    "opd_opi_fn_cr_staff": "yuwa414",
    "clear_amount": 548.75,
    "hos_guid": null,
    "finance_number": "0293921",
    "status_ok": "Y"
  },
  {
    "opd_opi_fn_cr_list_id": 6,
    "vn": "670507123036",
    "pttype": "74",
    "opd_opi_fn_cr_date": "2024-05-07",
    "opd_opi_fn_cr_time": "14:04:59",
    "opd_opi_fn_cr_staff": "yuwa414",
    "clear_amount": 1714.0,
    "hos_guid": null,
    "finance_number": "0293923",
    "status_ok": "Y"
  },
  {
    "opd_opi_fn_cr_list_id": 7,
    "vn": "670507143000",
    "pttype": "11",
    "opd_opi_fn_cr_date": "2024-05-07",
    "opd_opi_fn_cr_time": "14:08:07",
    "opd_opi_fn_cr_staff": "yuwa414",
    "clear_amount": 550.0,
    "hos_guid": null,
    "finance_number": "0293924",
    "status_ok": "Y"
  },
  {
    "opd_opi_fn_cr_list_id": 8,
    "vn": "670507140505",
    "pttype": "74",
    "opd_opi_fn_cr_date": "2024-05-07",
    "opd_opi_fn_cr_time": "14:36:44",
    "opd_opi_fn_cr_staff": "yuwa414",
    "clear_amount": 160.0,
    "hos_guid": null,
    "finance_number": "0293926",
    "status_ok": "Y"
  }
]
```
