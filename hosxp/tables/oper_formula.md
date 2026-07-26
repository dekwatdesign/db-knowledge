# `oper_formula`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oper_formula_code | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| formula_name | varchar(50) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| drugusage | varchar(4) | YES |  | NULL |  |  |
| ipt_oper_code | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor | doctor | no | 1 |
| formula_name | formula_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | oper_formula_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "oper_formula_code": 3,
    "doctor": "187",
    "formula_name": "นินจาเต่า",
    "icode": "3001530",
    "qty": 1,
    "drugusage": "",
    "ipt_oper_code": 65,
    "hos_guid": null
  },
  {
    "oper_formula_code": 4,
    "doctor": "187",
    "formula_name": "นินจาเต่า",
    "icode": "3001905",
    "qty": 1,
    "drugusage": "",
    "ipt_oper_code": 105,
    "hos_guid": null
  },
  {
    "oper_formula_code": 5,
    "doctor": "187",
    "formula_name": "นินจาเต่า",
    "icode": "3001523",
    "qty": 1,
    "drugusage": "",
    "ipt_oper_code": 58,
    "hos_guid": null
  },
  {
    "oper_formula_code": 15,
    "doctor": "126",
    "formula_name": "Tik หัตถการ",
    "icode": "3001957",
    "qty": 1,
    "drugusage": "",
    "ipt_oper_code": 157,
    "hos_guid": null
  },
  {
    "oper_formula_code": 16,
    "doctor": "126",
    "formula_name": "Tik หัตถการ",
    "icode": "3001530",
    "qty": 1,
    "drugusage": "",
    "ipt_oper_code": 65,
    "hos_guid": null
  },
  {
    "oper_formula_code": 17,
    "doctor": "126",
    "formula_name": "Tik หัตถการ",
    "icode": "3001523",
    "qty": 1,
    "drugusage": "",
    "ipt_oper_code": 58,
    "hos_guid": null
  },
  {
    "oper_formula_code": 18,
    "doctor": "126",
    "formula_name": "Tik หัตถการ",
    "icode": "3001905",
    "qty": 1,
    "drugusage": "",
    "ipt_oper_code": 105,
    "hos_guid": null
  },
  {
    "oper_formula_code": 19,
    "doctor": "126",
    "formula_name": "Tik หัตถการ",
    "icode": "3001554",
    "qty": 1,
    "drugusage": "",
    "ipt_oper_code": 85,
    "hos_guid": null
  }
]
```
