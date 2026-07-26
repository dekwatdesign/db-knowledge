# `provis_diag_op`

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
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348888",
    "date_serv": "20130301",
    "diagtype": "1",
    "diagcode": "F900",
    "hos_guid": null,
    "d_update": "20130304172849",
    "clinic": "00901"
  },
  {
    "provis_diag_id": 2,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348888",
    "date_serv": "20130301",
    "diagtype": "2",
    "diagcode": "Z620",
    "hos_guid": null,
    "d_update": "20130304172849",
    "clinic": "00901"
  },
  {
    "provis_diag_id": 3,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348843",
    "date_serv": "20130301",
    "diagtype": "1",
    "diagcode": "Z550",
    "hos_guid": null,
    "d_update": "20130304172850",
    "clinic": "00901"
  },
  {
    "provis_diag_id": 4,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348844",
    "date_serv": "20130301",
    "diagtype": "1",
    "diagcode": "Z550",
    "hos_guid": null,
    "d_update": "20130304172851",
    "clinic": "00901"
  },
  {
    "provis_diag_id": 5,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348890",
    "date_serv": "20130301",
    "diagtype": "1",
    "diagcode": "F800",
    "hos_guid": null,
    "d_update": "20130304172851",
    "clinic": "00901"
  },
  {
    "provis_diag_id": 6,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348890",
    "date_serv": "20130301",
    "diagtype": "2",
    "diagcode": "F900",
    "hos_guid": null,
    "d_update": "20130304172851",
    "clinic": "00901"
  },
  {
    "provis_diag_id": 7,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348750",
    "date_serv": "20130301",
    "diagtype": "1",
    "diagcode": "F840",
    "hos_guid": null,
    "d_update": "20130304172852",
    "clinic": "00901"
  },
  {
    "provis_diag_id": 8,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348751",
    "date_serv": "20130301",
    "diagtype": "2",
    "diagcode": "F801",
    "hos_guid": null,
    "d_update": "20130304172853",
    "clinic": "00901"
  }
]
```
