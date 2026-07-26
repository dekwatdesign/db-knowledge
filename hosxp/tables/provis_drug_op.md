# `provis_drug_op`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_drug_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| seq | varchar(8) | YES |  | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| did | varchar(6) | YES |  | NULL |  |  |
| amount | varchar(12) | YES |  | NULL |  |  |
| drugpric | varchar(14) | YES |  | NULL |  |  |
| drugcost | varchar(14) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| dname | varchar(250) | YES |  | NULL |  |  |
| didstd | varchar(24) | YES |  | NULL |  |  |
| unit | varchar(20) | YES |  | NULL |  |  |
| unitpackin | varchar(20) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| unit_packing | varchar(20) | YES |  | NULL |  |  |
| clinic | char(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | provis_drug_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "provis_drug_id": 1,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348888",
    "date_serv": "20130301",
    "did": "100014",
    "amount": "30",
    "drugpric": "3.25",
    "drugcost": "2.4",
    "hos_guid": null,
    "dname": "Risperidone GPO 1 mg เม็ด",
    "didstd": "",
    "unit": "003",
    "unitpackin": "1",
    "d_update": "20130304172849",
    "unit_packing": "1",
    "clinic": "00901"
  },
  {
    "provis_drug_id": 2,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348750",
    "date_serv": "20130301",
    "did": "100009",
    "amount": "30",
    "drugpric": "6",
    "drugcost": "4.5",
    "hos_guid": null,
    "dname": "Methylphenidate(RITALIN) 10 mg เม็ด",
    "didstd": "",
    "unit": "003",
    "unitpackin": "1",
    "d_update": "20130304172852",
    "unit_packing": "1",
    "clinic": "00901"
  },
  {
    "provis_drug_id": 3,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348750",
    "date_serv": "20130301",
    "did": "100014",
    "amount": "1",
    "drugpric": "1090",
    "drugcost": "941.6",
    "hos_guid": null,
    "dname": "RisPERdal  soln 1 mg/ml ขวด (30 ml.)",
    "didstd": "124929000000531330881652",
    "unit": "006",
    "unitpackin": "1",
    "d_update": "20130304172852",
    "unit_packing": "1",
    "clinic": "00901"
  },
  {
    "provis_drug_id": 4,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348802",
    "date_serv": "20130301",
    "did": "100007",
    "amount": "90",
    "drugpric": "1.25",
    "drugcost": "0.7",
    "hos_guid": null,
    "dname": "Fulox (Fluoxetine) 20 mg เม็ด",
    "didstd": "100786000003721120381252",
    "unit": "003",
    "unitpackin": "1",
    "d_update": "20130304172854",
    "unit_packing": "1",
    "clinic": "00901"
  },
  {
    "provis_drug_id": 5,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348802",
    "date_serv": "20130301",
    "did": "100014",
    "amount": "180",
    "drugpric": "3.25",
    "drugcost": "2.4",
    "hos_guid": null,
    "dname": "Risperidone GPO 1 mg เม็ด",
    "didstd": "",
    "unit": "003",
    "unitpackin": "1",
    "d_update": "20130304172854",
    "unit_packing": "1",
    "clinic": "00901"
  },
  {
    "provis_drug_id": 6,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348896",
    "date_serv": "20130301",
    "did": "100009",
    "amount": "12",
    "drugpric": "6",
    "drugcost": "4.5",
    "hos_guid": null,
    "dname": "Methylphenidate(RITALIN) 10 mg เม็ด",
    "didstd": "",
    "unit": "003",
    "unitpackin": "1",
    "d_update": "20130304172901",
    "unit_packing": "1",
    "clinic": "00901"
  },
  {
    "provis_drug_id": 7,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348897",
    "date_serv": "20130301",
    "did": "100007",
    "amount": "30",
    "drugpric": "1.25",
    "drugcost": "0.7",
    "hos_guid": null,
    "dname": "Fulox (Fluoxetine) 20 mg เม็ด",
    "didstd": "100786000003721120381252",
    "unit": "003",
    "unitpackin": "1",
    "d_update": "20130304172902",
    "unit_packing": "1",
    "clinic": "00901"
  },
  {
    "provis_drug_id": 8,
    "export_month": "255603",
    "pid": "1xxxxxxxxxxxx",
    "seq": "348897",
    "date_serv": "20130301",
    "did": "100008",
    "amount": "1",
    "drugpric": "78",
    "drugcost": "60",
    "hos_guid": null,
    "dname": "Haridol-D 50 mg/ml แอมพูล",
    "didstd": "100823071001171210181625",
    "unit": "035",
    "unitpackin": "1",
    "d_update": "20130304172902",
    "unit_packing": "1",
    "clinic": "00901"
  }
]
```
