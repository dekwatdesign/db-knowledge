# `ipt_oper_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_oper_code | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| use_right | char(1) | YES |  | NULL |  |  |
| must_paid | char(1) | YES |  | NULL |  |  |
| price2 | double(15,3) | YES |  | NULL |  |  |
| price3 | double(15,3) | YES |  | NULL |  |  |
| billcode | varchar(10) | YES |  | NULL |  |  |
| icd9cm | varchar(9) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| ipt_oper_code_guid | char(38) | YES | MUL | NULL |  |  |
| duration_minute | time | YES |  | NULL |  |  |
| use_opi_price | char(1) | YES |  | NULL |  |  |
| is_investigation | char(1) | YES |  | NULL |  |  |
| icd9_priority | int(11) | YES |  | NULL |  |  |
| plot_graph | char(1) | YES |  | NULL |  |  |
| search_keyword | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode_unique | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_ipt_oper_code_guid | ipt_oper_code_guid | no | 1 |
| ix_oper_code_plot | ipt_oper_code | no | 1 |
| ix_oper_code_plot | plot_graph | no | 2 |
| ix_search | name | no | 1 |
| ix_search | search_keyword | no | 2 |
| name | name | no | 1 |
| PRIMARY | ipt_oper_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_oper_code": 1,
    "icode": "3000004",
    "name": "ค่าปรึกษาแพทย์เฉพาะทาง",
    "price": 50.0,
    "use_right": "",
    "must_paid": "",
    "price2": 50.0,
    "price3": 50.0,
    "billcode": "55091",
    "icd9cm": "9999",
    "active_status": "N",
    "hos_guid": "",
    "ipt_oper_code_guid": "",
    "duration_minute": null,
    "use_opi_price": "",
    "is_investigation": "",
    "icd9_priority": null,
    "plot_graph": "",
    "search_keyword": null
  },
  {
    "ipt_oper_code": 2,
    "icode": "3000005",
    "name": "ค่าบริการให้คำปรึกษาโดยพยาบาล  (มากกว่า 30 นาที )",
    "price": 50.0,
    "use_right": "",
    "must_paid": "",
    "price2": 50.0,
    "price3": 50.0,
    "billcode": "55911",
    "icd9cm": "9449",
    "active_status": "N",
    "hos_guid": "",
    "ipt_oper_code_guid": "",
    "duration_minute": null,
    "use_opi_price": "",
    "is_investigation": "",
    "icd9_priority": null,
    "plot_graph": "",
    "search_keyword": null
  },
  {
    "ipt_oper_code": 3,
    "icode": "3000006",
    "name": "การตรวจร่างกายเพื่อขอใบรับรองแพทย์",
    "price": 100.0,
    "use_right": "",
    "must_paid": "",
    "price2": 100.0,
    "price3": 100.0,
    "billcode": "",
    "icd9cm": "9999",
    "active_status": "N",
    "hos_guid": "",
    "ipt_oper_code_guid": "",
    "duration_minute": null,
    "use_opi_price": "",
    "is_investigation": "",
    "icd9_priority": null,
    "plot_graph": "",
    "search_keyword": null
  },
  {
    "ipt_oper_code": 4,
    "icode": "3000007",
    "name": "ค่าเย็บแผลแห้ง / แผลเย็บ",
    "price": 70.0,
    "use_right": "",
    "must_paid": "",
    "price2": 70.0,
    "price3": 70.0,
    "billcode": "55810",
    "icd9cm": "9357",
    "active_status": "N",
    "hos_guid": "",
    "ipt_oper_code_guid": "",
    "duration_minute": null,
    "use_opi_price": "",
    "is_investigation": "",
    "icd9_priority": null,
    "plot_graph": "",
    "search_keyword": null
  },
  {
    "ipt_oper_code": 5,
    "icode": "3000008",
    "name": "การทำแผลเปิด / แผลติดเชื้อ",
    "price": 140.0,
    "use_right": "",
    "must_paid": "",
    "price2": 140.0,
    "price3": 140.0,
    "billcode": "55811",
    "icd9cm": "9357",
    "active_status": "N",
    "hos_guid": "",
    "ipt_oper_code_guid": "",
    "duration_minute": null,
    "use_opi_price": "",
    "is_investigation": "",
    "icd9_priority": null,
    "plot_graph": "",
    "search_keyword": null
  },
  {
    "ipt_oper_code": 6,
    "icode": "3000009",
    "name": "การฉีดยา IV (ผู้ป่วยนอกและฉุกเฉิน)",
    "price": 20.0,
    "use_right": "",
    "must_paid": "",
    "price2": 20.0,
    "price3": 20.0,
    "billcode": "55822",
    "icd9cm": "9929",
    "active_status": "N",
    "hos_guid": "",
    "ipt_oper_code_guid": "",
    "duration_minute": null,
    "use_opi_price": "",
    "is_investigation": "",
    "icd9_priority": null,
    "plot_graph": "",
    "search_keyword": null
  },
  {
    "ipt_oper_code": 7,
    "icode": "3000010",
    "name": "การฉีดยา IM (ผู้ป่วยนอกและฉุกเฉิน)",
    "price": 20.0,
    "use_right": "",
    "must_paid": "",
    "price2": 20.0,
    "price3": 20.0,
    "billcode": "55823",
    "icd9cm": "9929",
    "active_status": "N",
    "hos_guid": "",
    "ipt_oper_code_guid": "",
    "duration_minute": null,
    "use_opi_price": "",
    "is_investigation": "",
    "icd9_priority": null,
    "plot_graph": "",
    "search_keyword": null
  },
  {
    "ipt_oper_code": 8,
    "icode": "3000011",
    "name": "การฉีดยาใต้ผิวหนัง (ผู้ป่วยนอกและฉุกเฉิน)",
    "price": 20.0,
    "use_right": "",
    "must_paid": "",
    "price2": 20.0,
    "price3": 20.0,
    "billcode": "55824",
    "icd9cm": "9999",
    "active_status": "N",
    "hos_guid": "",
    "ipt_oper_code_guid": "",
    "duration_minute": null,
    "use_opi_price": "",
    "is_investigation": "",
    "icd9_priority": null,
    "plot_graph": "",
    "search_keyword": null
  }
]
```
