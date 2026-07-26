# `pcu_er_oper_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_oper_code | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES | UNI | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| icd9cm | varchar(9) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | er_oper_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "er_oper_code": 1,
    "name": "ฉีดยา IM",
    "icode": "3001004",
    "icd9cm": "9992",
    "price": 30.0,
    "hos_guid": null
  },
  {
    "er_oper_code": 2,
    "name": "ฉีดยา IV",
    "icode": "3001003",
    "icd9cm": "9918",
    "price": 30.0,
    "hos_guid": null
  },
  {
    "er_oper_code": 3,
    "name": "Dressing",
    "icode": "3001182",
    "icd9cm": "999",
    "price": 30.0,
    "hos_guid": null
  },
  {
    "er_oper_code": 4,
    "name": "Suture เข็มละ",
    "icode": "3000097",
    "icd9cm": "8365",
    "price": 30.0,
    "hos_guid": null
  },
  {
    "er_oper_code": 5,
    "name": "Excision",
    "icode": "3000200",
    "icd9cm": "8349",
    "price": 30.0,
    "hos_guid": null
  },
  {
    "er_oper_code": 6,
    "name": "I&D",
    "icode": "3000118",
    "icd9cm": "999",
    "price": 30.0,
    "hos_guid": null
  },
  {
    "er_oper_code": 7,
    "name": "เจาะเลือด",
    "icode": null,
    "icd9cm": "9918",
    "price": 30.0,
    "hos_guid": null
  },
  {
    "er_oper_code": 8,
    "name": "ล้างตา",
    "icode": "3000067",
    "icd9cm": "9509",
    "price": 30.0,
    "hos_guid": null
  }
]
```
