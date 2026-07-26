# `provis_service_op`

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
| instype | char(4) | YES |  | NULL |  |  |
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
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348888",
    "date_serv": "20130301",
    "locate": "1",
    "pttype": "1",
    "intime": "1",
    "price": "1048",
    "instype": "1100",
    "insid": "",
    "main": "",
    "pay": "1048",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20130304172849",
    "clinic": "00901",
    "service_ty": "1",
    "cost": "72"
  },
  {
    "provis_service_id": 2,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348843",
    "date_serv": "20130301",
    "locate": "1",
    "pttype": "0",
    "intime": "2",
    "price": "200",
    "instype": "0100",
    "insid": "ท7151888732",
    "main": "10685",
    "pay": "0",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20130304172850",
    "clinic": "00901",
    "service_ty": "1",
    "cost": "200"
  },
  {
    "provis_service_id": 3,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348844",
    "date_serv": "20130301",
    "locate": "1",
    "pttype": "1",
    "intime": "2",
    "price": "200",
    "instype": "0100",
    "insid": "ท7165871888",
    "main": "11769",
    "pay": "0",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20130304172851",
    "clinic": "00901",
    "service_ty": "1",
    "cost": "200"
  },
  {
    "provis_service_id": 4,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348890",
    "date_serv": "20130301",
    "locate": "1",
    "pttype": "0",
    "intime": "1",
    "price": "200",
    "instype": "0100",
    "insid": "ท7177724075",
    "main": "10753",
    "pay": "0",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20130304172851",
    "clinic": "00901",
    "service_ty": "1",
    "cost": "200"
  },
  {
    "provis_service_id": 5,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348750",
    "date_serv": "20130301",
    "locate": "1",
    "pttype": "0",
    "intime": "2",
    "price": "1920",
    "instype": "0100",
    "insid": "ท7116725134",
    "main": "10685",
    "pay": "0",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20130304172852",
    "clinic": "00901",
    "service_ty": "1",
    "cost": "1076.6"
  },
  {
    "provis_service_id": 6,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348751",
    "date_serv": "20130301",
    "locate": "1",
    "pttype": "0",
    "intime": "2",
    "price": "250",
    "instype": "9100",
    "insid": "",
    "main": "",
    "pay": "250",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20130304172853",
    "clinic": "00901",
    "service_ty": "1",
    "cost": "250"
  },
  {
    "provis_service_id": 7,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348802",
    "date_serv": "20130301",
    "locate": "1",
    "pttype": "0",
    "intime": "2",
    "price": "1348",
    "instype": "0100",
    "insid": "B74100001682906",
    "main": "15049",
    "pay": "0",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20130304172854",
    "clinic": "00901",
    "service_ty": "1",
    "cost": "495"
  },
  {
    "provis_service_id": 8,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348805",
    "date_serv": "20130301",
    "locate": "1",
    "pttype": "0",
    "intime": "2",
    "price": "950",
    "instype": "0100",
    "insid": "ท7159615958",
    "main": "10685",
    "pay": "0",
    "referin": "0",
    "referinhos": null,
    "referout": "0",
    "referouhos": null,
    "hos_guid": null,
    "d_update": "20130304172854",
    "clinic": "00901",
    "service_ty": "1",
    "cost": "950"
  }
]
```
