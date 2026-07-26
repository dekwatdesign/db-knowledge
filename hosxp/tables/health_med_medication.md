# `health_med_medication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_medication_id | int(11) | NO | PRI | 0 |  |  |
| health_med_medication_name | varchar(200) | YES | UNI | NULL |  |  |
| health_med_medication_code | varchar(50) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_medication_name | health_med_medication_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_medication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "health_med_medication_id": 1,
    "health_med_medication_name": "ธาตุบรรจบ",
    "health_med_medication_code": "1001",
    "icode": null,
    "price": null,
    "drugusage": null,
    "hos_guid": null
  },
  {
    "health_med_medication_id": 2,
    "health_med_medication_name": "ยาถ่ายดีเกลือฝรั่ง",
    "health_med_medication_code": "1002",
    "icode": null,
    "price": null,
    "drugusage": null,
    "hos_guid": null
  },
  {
    "health_med_medication_id": 3,
    "health_med_medication_name": "ยาเหลืองปิดสมุทร",
    "health_med_medication_code": "1003",
    "icode": null,
    "price": null,
    "drugusage": null,
    "hos_guid": null
  },
  {
    "health_med_medication_id": 4,
    "health_med_medication_name": "ยาหอมเทพจิตร",
    "health_med_medication_code": "1004",
    "icode": null,
    "price": null,
    "drugusage": null,
    "hos_guid": null
  },
  {
    "health_med_medication_id": 5,
    "health_med_medication_name": "ยาหอมนวโกฐ",
    "health_med_medication_code": "1005",
    "icode": null,
    "price": null,
    "drugusage": null,
    "hos_guid": null
  },
  {
    "health_med_medication_id": 6,
    "health_med_medication_name": "ยาประสะกานพลู",
    "health_med_medication_code": "1006",
    "icode": null,
    "price": null,
    "drugusage": null,
    "hos_guid": null
  },
  {
    "health_med_medication_id": 7,
    "health_med_medication_name": "ยาประสะไพล",
    "health_med_medication_code": "1007",
    "icode": null,
    "price": null,
    "drugusage": null,
    "hos_guid": null
  },
  {
    "health_med_medication_id": 8,
    "health_med_medication_name": "ยาเขียวหอม",
    "health_med_medication_code": "1008",
    "icode": null,
    "price": null,
    "drugusage": null,
    "hos_guid": null
  }
]
```
