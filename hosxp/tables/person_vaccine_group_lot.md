# `person_vaccine_group_lot`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_vaccine_group_lot_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_group | varchar(20) | YES | MUL | NULL |  |  |
| vaccine_lot | varchar(100) | YES |  | NULL |  |  |
| receive_date | date | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| receive_qty | int(11) | YES |  | NULL |  |  |
| left_qty | int(11) | YES |  | NULL |  |  |
| vaccine_lot_active | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vaccine_group | vaccine_group | no | 1 |
| PRIMARY | person_vaccine_group_lot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_vaccine_group_lot_id": 3,
    "vaccine_group": "COV-19",
    "vaccine_lot": "B202104032",
    "receive_date": "2021-05-24",
    "expire_date": "2023-04-04",
    "receive_qty": 240,
    "left_qty": 0,
    "vaccine_lot_active": "N",
    "hos_guid": null
  },
  {
    "person_vaccine_group_lot_id": 5,
    "vaccine_group": "BCG",
    "vaccine_lot": "FB1208",
    "receive_date": "2009-12-04",
    "expire_date": "2012-09-23",
    "receive_qty": 10,
    "left_qty": 10,
    "vaccine_lot_active": "Y",
    "hos_guid": null
  },
  {
    "person_vaccine_group_lot_id": 7,
    "vaccine_group": "COV-19",
    "vaccine_lot": "C202104073",
    "receive_date": "2021-05-31",
    "expire_date": "2021-10-28",
    "receive_qty": 480,
    "left_qty": 0,
    "vaccine_lot_active": "N",
    "hos_guid": null
  },
  {
    "person_vaccine_group_lot_id": 8,
    "vaccine_group": "COV-19",
    "vaccine_lot": "C202104070",
    "receive_date": "2021-06-06",
    "expire_date": "2021-10-29",
    "receive_qty": 660,
    "left_qty": 0,
    "vaccine_lot_active": "N",
    "hos_guid": null
  },
  {
    "person_vaccine_group_lot_id": 9,
    "vaccine_group": "COV-19",
    "vaccine_lot": "C202105079",
    "receive_date": "2021-06-08",
    "expire_date": "2021-11-09",
    "receive_qty": 480,
    "left_qty": 0,
    "vaccine_lot_active": "N",
    "hos_guid": null
  },
  {
    "person_vaccine_group_lot_id": 10,
    "vaccine_group": "COV-19",
    "vaccine_lot": "C202105081",
    "receive_date": "2021-06-14",
    "expire_date": "2021-11-11",
    "receive_qty": 800,
    "left_qty": 0,
    "vaccine_lot_active": "N",
    "hos_guid": null
  },
  {
    "person_vaccine_group_lot_id": 11,
    "vaccine_group": "COV-19",
    "vaccine_lot": "C202104069",
    "receive_date": "2021-06-21",
    "expire_date": "2023-04-29",
    "receive_qty": 1200,
    "left_qty": 0,
    "vaccine_lot_active": "N",
    "hos_guid": null
  },
  {
    "person_vaccine_group_lot_id": 13,
    "vaccine_group": "COV-19",
    "vaccine_lot": "A10061",
    "receive_date": "2021-06-23",
    "expire_date": "2021-10-31",
    "receive_qty": 130,
    "left_qty": 0,
    "vaccine_lot_active": "N",
    "hos_guid": null
  }
]
```
