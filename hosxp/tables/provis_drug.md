# `provis_drug`

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
    "export_month": "255301",
    "pid": "0050192",
    "seq": "15407",
    "date_serv": "20100104",
    "did": "190040",
    "amount": "3",
    "drugpric": "3",
    "drugcost": "3",
    "hos_guid": null,
    "dname": "ORS ผู้ใหญ่ . ซอง",
    "didstd": "",
    "unit": "ซอง",
    "unitpackin": "1",
    "d_update": "20100105102707",
    "unit_packing": null,
    "clinic": null
  },
  {
    "provis_drug_id": 2,
    "export_month": "255301",
    "pid": "0050192",
    "seq": "15407",
    "date_serv": "20100104",
    "did": "152007",
    "amount": "10",
    "drugpric": "2",
    "drugcost": "1.44",
    "hos_guid": null,
    "dname": "Cocilla TAB . เม็ด",
    "didstd": "",
    "unit": "เม็ด",
    "unitpackin": "1",
    "d_update": "20100105102707",
    "unit_packing": null,
    "clinic": null
  },
  {
    "provis_drug_id": 3,
    "export_month": "255301",
    "pid": "0050192",
    "seq": "15407",
    "date_serv": "20100104",
    "did": "190007",
    "amount": "10",
    "drugpric": "2",
    "drugcost": "2",
    "hos_guid": null,
    "dname": "Norfloxacin TAB 400 mg. เม็ด",
    "didstd": "",
    "unit": "เม็ด",
    "unitpackin": "1",
    "d_update": "20100105102707",
    "unit_packing": null,
    "clinic": null
  },
  {
    "provis_drug_id": 4,
    "export_month": "255301",
    "pid": "0050192",
    "seq": "15407",
    "date_serv": "20100104",
    "did": "190041",
    "amount": "10",
    "drugpric": "1.5",
    "drugcost": "1.5",
    "hos_guid": null,
    "dname": "Hyoscine TAB [Buscopan,Baclotan] 10 mg. เม็ด",
    "didstd": "",
    "unit": "เม็ด",
    "unitpackin": "1",
    "d_update": "20100105102707",
    "unit_packing": null,
    "clinic": null
  },
  {
    "provis_drug_id": 5,
    "export_month": "255301",
    "pid": "0050192",
    "seq": "15407",
    "date_serv": "20100104",
    "did": "190015",
    "amount": "10",
    "drugpric": "1",
    "drugcost": "0.42",
    "hos_guid": null,
    "dname": "Domperidone TAB [Motilium] 10 mg. เม็ด",
    "didstd": "",
    "unit": "เม็ด",
    "unitpackin": "1",
    "d_update": "20100105102707",
    "unit_packing": null,
    "clinic": null
  },
  {
    "provis_drug_id": 6,
    "export_month": "255301",
    "pid": "0050192",
    "seq": "15407",
    "date_serv": "20100104",
    "did": "190000",
    "amount": "1",
    "drugpric": "30",
    "drugcost": "30",
    "hos_guid": null,
    "dname": "Hyoscine INJ [Buscopan GPO] 20 mg./ml. Amphule",
    "didstd": "",
    "unit": "Amphule",
    "unitpackin": "1",
    "d_update": "20100105102707",
    "unit_packing": null,
    "clinic": null
  },
  {
    "provis_drug_id": 7,
    "export_month": "255301",
    "pid": "0050192",
    "seq": "15407",
    "date_serv": "20100104",
    "did": "190015",
    "amount": "1",
    "drugpric": "30",
    "drugcost": "30",
    "hos_guid": null,
    "dname": "Dimenhydrinate INJ [Miovan] 50 mg./ml. Amphule",
    "didstd": "",
    "unit": "Amphule",
    "unitpackin": "1",
    "d_update": "20100105102707",
    "unit_packing": null,
    "clinic": null
  },
  {
    "provis_drug_id": 8,
    "export_month": "255301",
    "pid": "0053052",
    "seq": "15408",
    "date_serv": "20100104",
    "did": "190036",
    "amount": "1",
    "drugpric": "15",
    "drugcost": "11.77",
    "hos_guid": null,
    "dname": "Domperidone susp [Motilium] 5 mg/5ml ขวด (30 ml.)",
    "didstd": "",
    "unit": "ขวด (30 ml.)",
    "unitpackin": "1",
    "d_update": "20100105102707",
    "unit_packing": null,
    "clinic": null
  }
]
```
