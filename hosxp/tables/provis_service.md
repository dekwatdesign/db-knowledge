# `provis_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_service_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| pid | varchar(13) | YES | MUL | NULL |  |  |
| seq | varchar(8) | YES | MUL | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| locate | char(1) | YES |  | NULL |  |  |
| pttype | char(1) | YES |  | NULL |  |  |
| intime | char(1) | YES |  | NULL |  |  |
| price | varchar(11) | YES |  | NULL |  |  |
| instype | varchar(4) | YES |  | NULL |  |  |
| insid | varchar(18) | YES |  | NULL |  |  |
| main | char(5) | YES |  | NULL |  |  |
| pay | varchar(11) | YES |  | NULL |  |  |
| referin | char(1) | YES |  | NULL |  |  |
| referinhos | char(5) | YES |  | NULL |  |  |
| referout | char(1) | YES |  | NULL |  |  |
| referouhos | char(5) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| clinic | char(5) | YES |  | NULL |  |  |
| service_ty | char(1) | YES |  | NULL |  |  |
| cost | char(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_pid | pid | no | 1 |
| ix_seq | seq | no | 1 |
| PRIMARY | provis_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "provis_service_id": 1,
    "export_month": "255301",
    "pid": "0070954",
    "seq": "15406",
    "date_serv": "20100104",
    "locate": "1",
    "pttype": "1",
    "intime": "2",
    "price": "350",
    "instype": "00",
    "insid": "",
    "main": "",
    "pay": "350",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20100105102638",
    "clinic": null,
    "service_ty": null,
    "cost": null
  },
  {
    "provis_service_id": 2,
    "export_month": "255301",
    "pid": "0050192",
    "seq": "15407",
    "date_serv": "20100104",
    "locate": "1",
    "pttype": "1",
    "intime": "2",
    "price": "184",
    "instype": "89",
    "insid": "8946004776",
    "main": "11294",
    "pay": "184",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20100105102638",
    "clinic": null,
    "service_ty": null,
    "cost": null
  },
  {
    "provis_service_id": 3,
    "export_month": "255301",
    "pid": "0053052",
    "seq": "15408",
    "date_serv": "20100104",
    "locate": "1",
    "pttype": "1",
    "intime": "2",
    "price": "149",
    "instype": "71",
    "insid": "ท7142144910",
    "main": "11294",
    "pay": "149",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20100105102638",
    "clinic": null,
    "service_ty": null,
    "cost": null
  },
  {
    "provis_service_id": 4,
    "export_month": "255301",
    "pid": "0004845",
    "seq": "15195",
    "date_serv": "20100104",
    "locate": "1",
    "pttype": "1",
    "intime": "1",
    "price": "50",
    "instype": "02",
    "insid": "",
    "main": "",
    "pay": "50",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20100105102638",
    "clinic": null,
    "service_ty": null,
    "cost": null
  },
  {
    "provis_service_id": 5,
    "export_month": "255301",
    "pid": "000479",
    "seq": "15196",
    "date_serv": "20100104",
    "locate": "1",
    "pttype": "1",
    "intime": "1",
    "price": "50",
    "instype": "02",
    "insid": "",
    "main": "",
    "pay": "50",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20100105102638",
    "clinic": null,
    "service_ty": null,
    "cost": null
  },
  {
    "provis_service_id": 6,
    "export_month": "255301",
    "pid": "003892",
    "seq": "15197",
    "date_serv": "20100104",
    "locate": "1",
    "pttype": "1",
    "intime": "1",
    "price": "50",
    "instype": "02",
    "insid": "",
    "main": "",
    "pay": "50",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20100105102638",
    "clinic": null,
    "service_ty": null,
    "cost": null
  },
  {
    "provis_service_id": 7,
    "export_month": "255301",
    "pid": "0010770",
    "seq": "15198",
    "date_serv": "20100104",
    "locate": "1",
    "pttype": "1",
    "intime": "1",
    "price": "50",
    "instype": "02",
    "insid": "",
    "main": "",
    "pay": "50",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20100105102638",
    "clinic": null,
    "service_ty": null,
    "cost": null
  },
  {
    "provis_service_id": 8,
    "export_month": "255301",
    "pid": "001419",
    "seq": "15199",
    "date_serv": "20100104",
    "locate": "1",
    "pttype": "1",
    "intime": "1",
    "price": "50",
    "instype": "02",
    "insid": "",
    "main": "",
    "pay": "50",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20100105102638",
    "clinic": null,
    "service_ty": null,
    "cost": null
  }
]
```
