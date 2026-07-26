# `provis_diag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_diag_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| seq | varchar(8) | YES | MUL | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| diagtype | char(1) | YES |  | NULL |  |  |
| diagcode | varchar(5) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| clinic | char(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_provis_unique | export_month | yes | 1 |
| ix_provis_unique | pid | yes | 2 |
| ix_provis_unique | seq | yes | 3 |
| ix_provis_unique | diagcode | yes | 4 |
| ix_provis_unique_index | diagcode | yes | 1 |
| ix_provis_unique_index | export_month | yes | 2 |
| ix_provis_unique_index | pid | yes | 3 |
| ix_provis_unique_index | seq | yes | 4 |
| ix_seq | seq | no | 1 |
| PRIMARY | provis_diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "provis_diag_id": 1,
    "export_month": "255301",
    "pid": "0070954",
    "seq": "15406",
    "date_serv": "20100104",
    "diagtype": "2",
    "diagcode": "T141",
    "hos_guid": null,
    "d_update": "20100105102655",
    "clinic": null
  },
  {
    "provis_diag_id": 2,
    "export_month": "255301",
    "pid": "0070954",
    "seq": "15406",
    "date_serv": "20100104",
    "diagtype": "1",
    "diagcode": "V2999",
    "hos_guid": null,
    "d_update": "20100105102655",
    "clinic": null
  },
  {
    "provis_diag_id": 3,
    "export_month": "255301",
    "pid": "0050192",
    "seq": "15407",
    "date_serv": "20100104",
    "diagtype": "1",
    "diagcode": "A09",
    "hos_guid": null,
    "d_update": "20100105102655",
    "clinic": null
  },
  {
    "provis_diag_id": 4,
    "export_month": "255301",
    "pid": "0053052",
    "seq": "15408",
    "date_serv": "20100104",
    "diagtype": "1",
    "diagcode": "A09",
    "hos_guid": null,
    "d_update": "20100105102655",
    "clinic": null
  },
  {
    "provis_diag_id": 5,
    "export_month": "255301",
    "pid": "002844",
    "seq": "15211",
    "date_serv": "20100104",
    "diagtype": "2",
    "diagcode": "C50",
    "hos_guid": null,
    "d_update": "20100105102655",
    "clinic": null
  },
  {
    "provis_diag_id": 6,
    "export_month": "255301",
    "pid": "002844",
    "seq": "15211",
    "date_serv": "20100104",
    "diagtype": "1",
    "diagcode": "C53",
    "hos_guid": null,
    "d_update": "20100105102655",
    "clinic": null
  },
  {
    "provis_diag_id": 7,
    "export_month": "255301",
    "pid": "012417",
    "seq": "15212",
    "date_serv": "20100104",
    "diagtype": "1",
    "diagcode": "C50",
    "hos_guid": null,
    "d_update": "20100105102655",
    "clinic": null
  },
  {
    "provis_diag_id": 8,
    "export_month": "255301",
    "pid": "012417",
    "seq": "15212",
    "date_serv": "20100104",
    "diagtype": "2",
    "diagcode": "C53",
    "hos_guid": null,
    "d_update": "20100105102655",
    "clinic": null
  }
]
```
