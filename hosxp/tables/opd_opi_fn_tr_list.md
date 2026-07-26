# `opd_opi_fn_tr_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_opi_fn_tr_list_id | int(11) | NO | PRI | 0 |  |  |
| opd_opi_fn_tr_date | date | YES |  | NULL |  |  |
| opd_opi_fn_tr_time | time | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| transfer_amount | double(15,3) | YES |  | NULL |  |  |
| opd_opi_fn_tr_staff | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| cancel_tr | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opd_opi_fn_tr_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_opi_fn_tr_list_id": 1,
    "opd_opi_fn_tr_date": "2020-04-03",
    "opd_opi_fn_tr_time": "15:26:39",
    "vn": "620815082936",
    "transfer_amount": -100.0,
    "opd_opi_fn_tr_staff": "yuwa135",
    "hos_guid": null,
    "cancel_tr": null
  },
  {
    "opd_opi_fn_tr_list_id": 2,
    "opd_opi_fn_tr_date": "2020-04-03",
    "opd_opi_fn_tr_time": "15:33:38",
    "vn": "620805095307",
    "transfer_amount": -70.0,
    "opd_opi_fn_tr_staff": "chatchawal",
    "hos_guid": null,
    "cancel_tr": null
  },
  {
    "opd_opi_fn_tr_list_id": 3,
    "opd_opi_fn_tr_date": "2020-04-03",
    "opd_opi_fn_tr_time": "15:33:44",
    "vn": "620806091743",
    "transfer_amount": 50.0,
    "opd_opi_fn_tr_staff": "chatchawal",
    "hos_guid": null,
    "cancel_tr": null
  },
  {
    "opd_opi_fn_tr_list_id": 4,
    "opd_opi_fn_tr_date": "2020-04-03",
    "opd_opi_fn_tr_time": "15:33:49",
    "vn": "620807110036",
    "transfer_amount": 0.0,
    "opd_opi_fn_tr_staff": "chatchawal",
    "hos_guid": null,
    "cancel_tr": null
  },
  {
    "opd_opi_fn_tr_list_id": 5,
    "opd_opi_fn_tr_date": "2020-04-03",
    "opd_opi_fn_tr_time": "15:34:17",
    "vn": "620816110533",
    "transfer_amount": 0.0,
    "opd_opi_fn_tr_staff": "chatchawal",
    "hos_guid": null,
    "cancel_tr": null
  },
  {
    "opd_opi_fn_tr_list_id": 6,
    "opd_opi_fn_tr_date": "2020-04-03",
    "opd_opi_fn_tr_time": "15:34:56",
    "vn": "620828112306",
    "transfer_amount": 0.0,
    "opd_opi_fn_tr_staff": "chatchawal",
    "hos_guid": null,
    "cancel_tr": null
  },
  {
    "opd_opi_fn_tr_list_id": 7,
    "opd_opi_fn_tr_date": "2021-05-20",
    "opd_opi_fn_tr_time": "10:20:49",
    "vn": "630320142527",
    "transfer_amount": 0.0,
    "opd_opi_fn_tr_staff": "yuwa135",
    "hos_guid": null,
    "cancel_tr": null
  },
  {
    "opd_opi_fn_tr_list_id": 8,
    "opd_opi_fn_tr_date": "2021-05-20",
    "opd_opi_fn_tr_time": "10:20:50",
    "vn": "630323093044",
    "transfer_amount": 0.0,
    "opd_opi_fn_tr_staff": "yuwa135",
    "hos_guid": null,
    "cancel_tr": null
  }
]
```
