# `vaccine_inventory_lot`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_inventory_lot_id | int(11) | NO | PRI | 0 |  |  |
| receive_date | date | YES | MUL | NULL |  |  |
| receive_time | time | YES |  | NULL |  |  |
| vaccine_lot_no | varchar(50) | YES |  | NULL |  |  |
| vaccine_serial_no | varchar(50) | YES |  | NULL |  |  |
| vaccine_expire_date | date | YES |  | NULL |  |  |
| vaccine_manufacturer_id | int(11) | YES |  | NULL |  |  |
| dose_qty | int(11) | YES |  | NULL |  |  |
| person_vaccine_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id_lot_no | person_vaccine_id | no | 1 |
| ix_id_lot_no | vaccine_lot_no | no | 2 |
| ix_person_vaccine_id | person_vaccine_id | no | 1 |
| ix_receive_date | receive_date | no | 1 |
| PRIMARY | vaccine_inventory_lot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vaccine_inventory_lot_id": 1,
    "receive_date": "2021-05-24",
    "receive_time": "13:12:04",
    "vaccine_lot_no": "B202104032",
    "vaccine_serial_no": "81900921766xxxxxxxxx",
    "vaccine_expire_date": "2023-04-04",
    "vaccine_manufacturer_id": 7,
    "dose_qty": 240,
    "person_vaccine_id": 35
  },
  {
    "vaccine_inventory_lot_id": 11,
    "receive_date": "2021-05-31",
    "receive_time": "13:00:00",
    "vaccine_lot_no": "C202104073",
    "vaccine_serial_no": "81901420054789937106",
    "vaccine_expire_date": "2021-10-28",
    "vaccine_manufacturer_id": 7,
    "dose_qty": 40,
    "person_vaccine_id": 35
  },
  {
    "vaccine_inventory_lot_id": 12,
    "receive_date": "2021-05-31",
    "receive_time": "13:00:00",
    "vaccine_lot_no": "C202104073",
    "vaccine_serial_no": "81901420054794657762",
    "vaccine_expire_date": "2021-10-28",
    "vaccine_manufacturer_id": 7,
    "dose_qty": 40,
    "person_vaccine_id": 35
  },
  {
    "vaccine_inventory_lot_id": 13,
    "receive_date": "2021-05-31",
    "receive_time": "13:00:00",
    "vaccine_lot_no": "C202104073",
    "vaccine_serial_no": "81901420054792242997",
    "vaccine_expire_date": "2021-10-28",
    "vaccine_manufacturer_id": 7,
    "dose_qty": 40,
    "person_vaccine_id": 35
  },
  {
    "vaccine_inventory_lot_id": 14,
    "receive_date": "2021-05-31",
    "receive_time": "13:00:00",
    "vaccine_lot_no": "C202104073",
    "vaccine_serial_no": "81901420054889458353",
    "vaccine_expire_date": "2021-10-28",
    "vaccine_manufacturer_id": 7,
    "dose_qty": 40,
    "person_vaccine_id": 35
  },
  {
    "vaccine_inventory_lot_id": 15,
    "receive_date": "2021-05-31",
    "receive_time": "13:00:00",
    "vaccine_lot_no": "C202104073",
    "vaccine_serial_no": "81901420054794613971",
    "vaccine_expire_date": "2021-10-28",
    "vaccine_manufacturer_id": 7,
    "dose_qty": 40,
    "person_vaccine_id": 35
  },
  {
    "vaccine_inventory_lot_id": 16,
    "receive_date": "2021-05-31",
    "receive_time": "13:00:00",
    "vaccine_lot_no": "C202104073",
    "vaccine_serial_no": "81901420055029907998",
    "vaccine_expire_date": "2021-10-28",
    "vaccine_manufacturer_id": 7,
    "dose_qty": 40,
    "person_vaccine_id": 35
  },
  {
    "vaccine_inventory_lot_id": 17,
    "receive_date": "2021-05-31",
    "receive_time": "13:00:00",
    "vaccine_lot_no": "C202104073",
    "vaccine_serial_no": "81901420054790010831",
    "vaccine_expire_date": "2021-10-28",
    "vaccine_manufacturer_id": 7,
    "dose_qty": 40,
    "person_vaccine_id": 35
  }
]
```
