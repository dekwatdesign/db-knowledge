# `iptadm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| admday | int(11) | YES |  | NULL |  |  |
| bedno | varchar(6) | YES | MUL | NULL |  |  |
| bedtype | char(2) | YES | MUL | NULL |  |  |
| indate | date | YES | MUL | NULL |  |  |
| intime | time | YES | MUL | NULL |  |  |
| outdate | date | YES | MUL | NULL |  |  |
| outtime | time | YES | MUL | NULL |  |  |
| rate | double(22,3) | YES |  | NULL |  |  |
| roomno | varchar(4) | YES | MUL | NULL |  |  |
| move_in_ward_datetime | datetime | YES |  | NULL |  |  |
| move_in_bed_datetime | datetime | YES |  | NULL |  |  |
| trx_order_checksum | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| no_rx_machine | char(1) | YES |  | NULL |  |  |
| active_med_profile_count | int(11) | YES |  | NULL |  |  |
| rx_transaction_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| bedno | bedno | no | 1 |
| bedtype | bedtype | no | 1 |
| indate | indate | no | 1 |
| intime | intime | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_roomno_an | an | no | 1 |
| ix_roomno_an | roomno | no | 2 |
| outdate | outdate | no | 1 |
| outtime | outtime | no | 1 |
| PRIMARY | an | yes | 1 |
| roomno | roomno | no | 1 |
| roomno_an | roomno | no | 1 |
| roomno_an | an | no | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "540000786",
    "admday": 12,
    "bedno": "ก401",
    "bedtype": "00",
    "indate": "2011-10-10",
    "intime": "8:00:00",
    "outdate": null,
    "outtime": null,
    "rate": 50.0,
    "roomno": "401",
    "move_in_ward_datetime": "2011-10-13 10:07:01",
    "move_in_bed_datetime": "2011-10-13 10:07:01",
    "trx_order_checksum": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_rx_machine": null,
    "active_med_profile_count": null,
    "rx_transaction_id": null
  },
  {
    "an": "540000787",
    "admday": 16,
    "bedno": "ก402",
    "bedtype": "00",
    "indate": "2011-10-10",
    "intime": "8:00:00",
    "outdate": null,
    "outtime": null,
    "rate": 50.0,
    "roomno": "401",
    "move_in_ward_datetime": "2011-10-13 10:10:57",
    "move_in_bed_datetime": "2011-10-13 10:10:57",
    "trx_order_checksum": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_rx_machine": null,
    "active_med_profile_count": null,
    "rx_transaction_id": null
  },
  {
    "an": "540000788",
    "admday": 15,
    "bedno": "ก403",
    "bedtype": "00",
    "indate": "2011-10-11",
    "intime": "8:00:00",
    "outdate": null,
    "outtime": null,
    "rate": 50.0,
    "roomno": "401",
    "move_in_ward_datetime": "2011-10-13 10:56:15",
    "move_in_bed_datetime": "2011-10-13 10:56:15",
    "trx_order_checksum": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_rx_machine": null,
    "active_med_profile_count": null,
    "rx_transaction_id": null
  },
  {
    "an": "540000789",
    "admday": 15,
    "bedno": "ก404",
    "bedtype": "00",
    "indate": "2011-10-12",
    "intime": "8:00:00",
    "outdate": null,
    "outtime": null,
    "rate": 50.0,
    "roomno": "401",
    "move_in_ward_datetime": "2011-10-13 10:57:43",
    "move_in_bed_datetime": "2011-10-13 10:57:43",
    "trx_order_checksum": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_rx_machine": null,
    "active_med_profile_count": null,
    "rx_transaction_id": null
  },
  {
    "an": "540000791",
    "admday": 15,
    "bedno": "ก405",
    "bedtype": "00",
    "indate": "2011-10-12",
    "intime": "8:00:00",
    "outdate": null,
    "outtime": null,
    "rate": 50.0,
    "roomno": "401",
    "move_in_ward_datetime": "2011-10-13 10:58:56",
    "move_in_bed_datetime": "2011-10-13 10:58:56",
    "trx_order_checksum": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_rx_machine": null,
    "active_med_profile_count": null,
    "rx_transaction_id": null
  },
  {
    "an": "540000792",
    "admday": 15,
    "bedno": "ก406",
    "bedtype": "00",
    "indate": "2011-10-12",
    "intime": "8:00:00",
    "outdate": null,
    "outtime": null,
    "rate": 50.0,
    "roomno": "401",
    "move_in_ward_datetime": "2011-10-13 10:59:54",
    "move_in_bed_datetime": "2011-10-13 10:59:54",
    "trx_order_checksum": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_rx_machine": null,
    "active_med_profile_count": null,
    "rx_transaction_id": null
  },
  {
    "an": "540000793",
    "admday": 12,
    "bedno": "ก201",
    "bedtype": "00",
    "indate": "2011-10-10",
    "intime": "8:00:00",
    "outdate": null,
    "outtime": null,
    "rate": 50.0,
    "roomno": "001",
    "move_in_ward_datetime": "2011-10-13 11:25:55",
    "move_in_bed_datetime": "2011-10-13 11:25:55",
    "trx_order_checksum": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_rx_machine": null,
    "active_med_profile_count": null,
    "rx_transaction_id": null
  },
  {
    "an": "540000794",
    "admday": 12,
    "bedno": "ก202",
    "bedtype": "00",
    "indate": "2011-10-10",
    "intime": "8:00:00",
    "outdate": null,
    "outtime": null,
    "rate": 50.0,
    "roomno": "001",
    "move_in_ward_datetime": "2011-10-13 11:28:41",
    "move_in_bed_datetime": "2011-10-13 11:28:41",
    "trx_order_checksum": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "no_rx_machine": null,
    "active_med_profile_count": null,
    "rx_transaction_id": null
  }
]
```
