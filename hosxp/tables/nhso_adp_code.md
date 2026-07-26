# `nhso_adp_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_adp_code | varchar(15) | NO | PRI |  |  |  |
| nhso_adp_type_id | int(11) | NO | PRI | 0 |  |  |
| nhso_adp_code_name | varchar(200) | YES |  | NULL |  |  |
| OFC | double(15,2) | YES |  | NULL |  |  |
| LGO | double(15,2) | YES |  | NULL |  |  |
| SSS | double(15,2) | YES |  | NULL |  |  |
| UCS | double(15,2) | YES |  | NULL |  |  |
| fs | double(15,2) | YES |  | NULL |  |  |
| UCEP | double(15,2) | YES |  | NULL |  |  |
| PPFS | double(15,2) | YES |  | NULL |  |  |
| TMLT | varchar(25) | YES |  | NULL |  |  |
| StartDate | date | YES |  | NULL |  |  |
| ExpireDate | date | YES |  | NULL |  |  |
| DRG_Chrgitem_ID | varchar(2) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| drg_chrgitem_id | DRG_Chrgitem_ID | no | 1 |
| PRIMARY | nhso_adp_code | yes | 1 |
| PRIMARY | nhso_adp_type_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_adp_code": "0010",
    "nhso_adp_type_id": 19,
    "nhso_adp_code_name": "(19-ทำหัตถการและวิสัญญี)-Implant chemothera agent - 0",
    "OFC": 0.0,
    "LGO": 0.0,
    "SSS": 0.0,
    "UCS": 0.0,
    "fs": 0.0,
    "UCEP": 0.0,
    "PPFS": null,
    "TMLT": null,
    "StartDate": null,
    "ExpireDate": null,
    "DRG_Chrgitem_ID": "11",
    "active_status": null
  },
  {
    "nhso_adp_code": "0012",
    "nhso_adp_type_id": 19,
    "nhso_adp_code_name": "(19-ทำหัตถการและวิสัญญี)-Adm inhal nitric oxide - 0",
    "OFC": 0.0,
    "LGO": 0.0,
    "SSS": 0.0,
    "UCS": 0.0,
    "fs": 0.0,
    "UCEP": 0.0,
    "PPFS": null,
    "TMLT": null,
    "StartDate": null,
    "ExpireDate": null,
    "DRG_Chrgitem_ID": "11",
    "active_status": null
  },
  {
    "nhso_adp_code": "0016",
    "nhso_adp_type_id": 19,
    "nhso_adp_code_name": "(19-ทำหัตถการและวิสัญญี)-Pressurized treat graft - 0",
    "OFC": 0.0,
    "LGO": 0.0,
    "SSS": 0.0,
    "UCS": 0.0,
    "fs": 0.0,
    "UCEP": 0.0,
    "PPFS": null,
    "TMLT": null,
    "StartDate": null,
    "ExpireDate": null,
    "DRG_Chrgitem_ID": "11",
    "active_status": null
  },
  {
    "nhso_adp_code": "0018",
    "nhso_adp_type_id": 19,
    "nhso_adp_code_name": "(19-ทำหัตถการและวิสัญญี)-Infusion of vasopressor - 0",
    "OFC": 0.0,
    "LGO": 0.0,
    "SSS": 0.0,
    "UCS": 0.0,
    "fs": 0.0,
    "UCEP": 0.0,
    "PPFS": null,
    "TMLT": null,
    "StartDate": null,
    "ExpireDate": null,
    "DRG_Chrgitem_ID": "11",
    "active_status": null
  },
  {
    "nhso_adp_code": "0020",
    "nhso_adp_type_id": 19,
    "nhso_adp_code_name": "(19-ทำหัตถการและวิสัญญี)-BBBD via infusion - 0",
    "OFC": 0.0,
    "LGO": 0.0,
    "SSS": 0.0,
    "UCS": 0.0,
    "fs": 0.0,
    "UCEP": 0.0,
    "PPFS": null,
    "TMLT": null,
    "StartDate": null,
    "ExpireDate": null,
    "DRG_Chrgitem_ID": "11",
    "active_status": null
  },
  {
    "nhso_adp_code": "0022",
    "nhso_adp_type_id": 19,
    "nhso_adp_code_name": "(19-ทำหัตถการและวิสัญญี)-Ivus intrathoracic ves - 0",
    "OFC": 0.0,
    "LGO": 0.0,
    "SSS": 0.0,
    "UCS": 0.0,
    "fs": 0.0,
    "UCEP": 0.0,
    "PPFS": null,
    "TMLT": null,
    "StartDate": null,
    "ExpireDate": null,
    "DRG_Chrgitem_ID": "11",
    "active_status": null
  },
  {
    "nhso_adp_code": "0023",
    "nhso_adp_type_id": 19,
    "nhso_adp_code_name": "(19-ทำหัตถการและวิสัญญี)-Ivus peripheral vessels - 0",
    "OFC": 0.0,
    "LGO": 0.0,
    "SSS": 0.0,
    "UCS": 0.0,
    "fs": 0.0,
    "UCEP": 0.0,
    "PPFS": null,
    "TMLT": null,
    "StartDate": null,
    "ExpireDate": null,
    "DRG_Chrgitem_ID": "11",
    "active_status": null
  },
  {
    "nhso_adp_code": "0024",
    "nhso_adp_type_id": 19,
    "nhso_adp_code_name": "(19-ทำหัตถการและวิสัญญี)-Ivus coronary vessels - 0",
    "OFC": 0.0,
    "LGO": 0.0,
    "SSS": 0.0,
    "UCS": 0.0,
    "fs": 0.0,
    "UCEP": 0.0,
    "PPFS": null,
    "TMLT": null,
    "StartDate": null,
    "ExpireDate": null,
    "DRG_Chrgitem_ID": "11",
    "active_status": null
  }
]
```
