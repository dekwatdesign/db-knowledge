# `provis_proced_op`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_proced_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| seq | varchar(8) | YES |  | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| proced | varchar(7) | YES |  | NULL |  |  |
| servpric | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| clinic | char(5) | YES |  | NULL |  |  |
| serv_per | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_provis_unique | export_month | yes | 1 |
| ix_provis_unique | pid | yes | 2 |
| ix_provis_unique | seq | yes | 3 |
| ix_provis_unique | proced | yes | 4 |
| ix_provis_unique_index | export_month | yes | 1 |
| ix_provis_unique_index | pid | yes | 2 |
| ix_provis_unique_index | proced | yes | 3 |
| ix_provis_unique_index | seq | yes | 4 |
| PRIMARY | provis_proced_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "provis_proced_id": 1,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348843",
    "date_serv": "20130301",
    "proced": "9438",
    "servpric": "150.00",
    "hos_guid": null,
    "d_update": "20130304172850",
    "clinic": "00901",
    "serv_per": ""
  },
  {
    "provis_proced_id": 2,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348844",
    "date_serv": "20130301",
    "proced": "9438",
    "servpric": "150.00",
    "hos_guid": null,
    "d_update": "20130304172851",
    "clinic": "00901",
    "serv_per": ""
  },
  {
    "provis_proced_id": 3,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348890",
    "date_serv": "20130301",
    "proced": "9438",
    "servpric": "150.00",
    "hos_guid": null,
    "d_update": "20130304172851",
    "clinic": "00901",
    "serv_per": ""
  },
  {
    "provis_proced_id": 4,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348817",
    "date_serv": "20130301",
    "proced": "5199",
    "servpric": "500.00",
    "hos_guid": null,
    "d_update": "20130304172855",
    "clinic": "00901",
    "serv_per": ""
  },
  {
    "provis_proced_id": 5,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348821",
    "date_serv": "20130301",
    "proced": "5199",
    "servpric": "500.00",
    "hos_guid": null,
    "d_update": "20130304172856",
    "clinic": "00901",
    "serv_per": ""
  },
  {
    "provis_proced_id": 6,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348818",
    "date_serv": "20130301",
    "proced": "5199",
    "servpric": "500.00",
    "hos_guid": null,
    "d_update": "20130304172856",
    "clinic": "00901",
    "serv_per": ""
  },
  {
    "provis_proced_id": 7,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348819",
    "date_serv": "20130301",
    "proced": "5199",
    "servpric": "500.00",
    "hos_guid": null,
    "d_update": "20130304172857",
    "clinic": "00901",
    "serv_per": ""
  },
  {
    "provis_proced_id": 8,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348820",
    "date_serv": "20130301",
    "proced": "5199",
    "servpric": "500.00",
    "hos_guid": null,
    "d_update": "20130304172858",
    "clinic": "00901",
    "serv_per": ""
  }
]
```
