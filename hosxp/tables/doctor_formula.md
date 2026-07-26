# `doctor_formula`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_formula_code | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| formula_name | varchar(200) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| sp_use | varchar(7) | YES |  | NULL |  |  |
| usage_code | varchar(10) | YES |  | NULL |  |  |
| dose | double(15,3) | YES |  | NULL |  |  |
| unit_name | varchar(25) | YES |  | NULL |  |  |
| frequency_code | varchar(10) | YES |  | NULL |  |  |
| time_code | varchar(10) | YES |  | NULL |  |  |
| usage_unit_code | varchar(10) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_formula_name | formula_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_formula_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_formula_code": 2083,
    "doctor": "01",
    "formula_name": "amx1",
    "icode": "1000030",
    "qty": 20,
    "drugusage": "0157",
    "sp_use": null,
    "usage_code": null,
    "dose": null,
    "unit_name": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "order_no": null,
    "hos_guid": null
  },
  {
    "doctor_formula_code": 2084,
    "doctor": "01",
    "formula_name": "amx1",
    "icode": "1000270",
    "qty": 20,
    "drugusage": "0247",
    "sp_use": null,
    "usage_code": null,
    "dose": null,
    "unit_name": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "order_no": null,
    "hos_guid": null
  },
  {
    "doctor_formula_code": 2085,
    "doctor": "01",
    "formula_name": "amx1",
    "icode": "1000297",
    "qty": 20,
    "drugusage": "0021",
    "sp_use": null,
    "usage_code": null,
    "dose": null,
    "unit_name": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "order_no": null,
    "hos_guid": null
  },
  {
    "doctor_formula_code": 2090,
    "doctor": "069",
    "formula_name": "2",
    "icode": "1000097",
    "qty": 0,
    "drugusage": "0317",
    "sp_use": null,
    "usage_code": null,
    "dose": null,
    "unit_name": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "order_no": 1,
    "hos_guid": null
  },
  {
    "doctor_formula_code": 2091,
    "doctor": "069",
    "formula_name": "2",
    "icode": "3000037",
    "qty": 1,
    "drugusage": "",
    "sp_use": null,
    "usage_code": null,
    "dose": null,
    "unit_name": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "order_no": 2,
    "hos_guid": null
  },
  {
    "doctor_formula_code": 2092,
    "doctor": "069",
    "formula_name": "2",
    "icode": "3000020",
    "qty": 1,
    "drugusage": "",
    "sp_use": null,
    "usage_code": null,
    "dose": null,
    "unit_name": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "order_no": 3,
    "hos_guid": null
  },
  {
    "doctor_formula_code": 2093,
    "doctor": "069",
    "formula_name": "1",
    "icode": "3000020",
    "qty": 1,
    "drugusage": "",
    "sp_use": null,
    "usage_code": null,
    "dose": null,
    "unit_name": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "order_no": 1,
    "hos_guid": null
  },
  {
    "doctor_formula_code": 2094,
    "doctor": "069",
    "formula_name": "1",
    "icode": "3000037",
    "qty": 1,
    "drugusage": "",
    "sp_use": null,
    "usage_code": null,
    "dose": null,
    "unit_name": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "order_no": 2,
    "hos_guid": null
  }
]
```
