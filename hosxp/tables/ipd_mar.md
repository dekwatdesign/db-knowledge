# `ipd_mar`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_mar_id | int(11) | NO | PRI | 0 |  |  |
| med_rx_number | int(11) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| med_interval_type_id | int(11) | YES |  | NULL |  |  |
| mar_time | time | YES |  | NULL |  |  |
| mar_date | date | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| sp_use | varchar(7) | YES |  | NULL |  |  |
| orderstatus | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_an | an | no | 1 |
| ix_ix_med_rx_number | med_rx_number | no | 1 |
| PRIMARY | ipd_mar_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_mar_id": 10,
    "med_rx_number": 1831,
    "icode": "3000043",
    "qty": 1,
    "med_interval_type_id": 0,
    "mar_time": "11:44:01",
    "mar_date": "2011-10-13",
    "an": "540000794",
    "drugusage": "",
    "sp_use": "",
    "orderstatus": "",
    "hos_guid": null
  },
  {
    "ipd_mar_id": 11,
    "med_rx_number": 1831,
    "icode": "3000003",
    "qty": 1,
    "med_interval_type_id": 0,
    "mar_time": "11:44:17",
    "mar_date": "2011-10-13",
    "an": "540000794",
    "drugusage": "",
    "sp_use": "",
    "orderstatus": "",
    "hos_guid": null
  },
  {
    "ipd_mar_id": 12,
    "med_rx_number": 1832,
    "icode": "3000043",
    "qty": 1,
    "med_interval_type_id": 0,
    "mar_time": "11:48:57",
    "mar_date": "2011-10-13",
    "an": "540000794",
    "drugusage": "",
    "sp_use": "",
    "orderstatus": "",
    "hos_guid": null
  },
  {
    "ipd_mar_id": 13,
    "med_rx_number": 1832,
    "icode": "3000003",
    "qty": 1,
    "med_interval_type_id": 0,
    "mar_time": "11:49:27",
    "mar_date": "2011-10-13",
    "an": "540000794",
    "drugusage": "",
    "sp_use": "",
    "orderstatus": "",
    "hos_guid": null
  },
  {
    "ipd_mar_id": 20,
    "med_rx_number": 1836,
    "icode": "3000043",
    "qty": 1,
    "med_interval_type_id": 0,
    "mar_time": "13:13:17",
    "mar_date": "2011-10-10",
    "an": "540000786",
    "drugusage": "",
    "sp_use": "",
    "orderstatus": "",
    "hos_guid": null
  },
  {
    "ipd_mar_id": 21,
    "med_rx_number": 1836,
    "icode": "3000003",
    "qty": 1,
    "med_interval_type_id": 0,
    "mar_time": "13:13:30",
    "mar_date": "2011-10-10",
    "an": "540000786",
    "drugusage": "",
    "sp_use": "",
    "orderstatus": "",
    "hos_guid": null
  },
  {
    "ipd_mar_id": 22,
    "med_rx_number": 1836,
    "icode": "3000020",
    "qty": 1,
    "med_interval_type_id": 0,
    "mar_time": "13:14:25",
    "mar_date": "2011-10-10",
    "an": "540000786",
    "drugusage": "",
    "sp_use": "",
    "orderstatus": "",
    "hos_guid": null
  },
  {
    "ipd_mar_id": 29,
    "med_rx_number": 1839,
    "icode": "3000043",
    "qty": 1,
    "med_interval_type_id": 0,
    "mar_time": "13:18:06",
    "mar_date": "2011-10-11",
    "an": "540000786",
    "drugusage": "",
    "sp_use": "",
    "orderstatus": "",
    "hos_guid": null
  }
]
```
