# `opitemrece_doctor_confirm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_doctor_confirm_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| order_doctor | varchar(20) | YES |  | NULL |  |  |
| confirm_doctor | varchar(20) | YES |  | NULL |  |  |
| confirm_datetime | datetime | YES |  | NULL |  |  |
| confirm | char(1) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | yes | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opitemrece_doctor_confirm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opitemrece_doctor_confirm_id": 1,
    "opi_guid": "{D0443727-DE94-412B-9BA2-9472D53DE952}",
    "order_doctor": "353",
    "confirm_doctor": "353",
    "confirm_datetime": null,
    "confirm": "Y",
    "icode": "3001955",
    "vn": "671003083026"
  },
  {
    "opitemrece_doctor_confirm_id": 2,
    "opi_guid": "{BFCDB55B-5832-4E14-854C-C24AD4F97773}",
    "order_doctor": "353",
    "confirm_doctor": "353",
    "confirm_datetime": null,
    "confirm": "Y",
    "icode": "3001957",
    "vn": "671003083026"
  },
  {
    "opitemrece_doctor_confirm_id": 3,
    "opi_guid": "{8D0FAA58-FAAF-4B9B-8303-610F56C19748}",
    "order_doctor": "353",
    "confirm_doctor": "353",
    "confirm_datetime": null,
    "confirm": "Y",
    "icode": "3000437",
    "vn": "671003083026"
  },
  {
    "opitemrece_doctor_confirm_id": 4,
    "opi_guid": "{C7602016-E0EC-4159-8AEE-A03465CEA797}",
    "order_doctor": "353",
    "confirm_doctor": "353",
    "confirm_datetime": null,
    "confirm": "Y",
    "icode": "3000001",
    "vn": "671003083026"
  },
  {
    "opitemrece_doctor_confirm_id": 5,
    "opi_guid": "{A227E84E-342E-4B68-AAEC-4B1E571A6BFF}",
    "order_doctor": "353",
    "confirm_doctor": "353",
    "confirm_datetime": null,
    "confirm": "Y",
    "icode": "1000099",
    "vn": "671003083026"
  },
  {
    "opitemrece_doctor_confirm_id": 6,
    "opi_guid": "{4505B0FB-9CBB-4E74-A2C2-F5994EB8CCA9}",
    "order_doctor": "353",
    "confirm_doctor": "353",
    "confirm_datetime": null,
    "confirm": "Y",
    "icode": "1600005",
    "vn": "671003083026"
  },
  {
    "opitemrece_doctor_confirm_id": 7,
    "opi_guid": "{FC065D7A-9E1E-4907-B2D8-E8A1139BBB2B}",
    "order_doctor": "353",
    "confirm_doctor": "353",
    "confirm_datetime": null,
    "confirm": "Y",
    "icode": "1000153",
    "vn": "671003083026"
  },
  {
    "opitemrece_doctor_confirm_id": 8,
    "opi_guid": "{131941C2-2AB9-4372-AEE4-004CDAE31B7A}",
    "order_doctor": "353",
    "confirm_doctor": "353",
    "confirm_datetime": null,
    "confirm": "Y",
    "icode": "3002044",
    "vn": "671003083026"
  }
]
```
