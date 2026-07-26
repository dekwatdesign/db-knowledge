# `vaccine_inventory_label`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_inventory_label_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_inventory_lot_id | int(11) | YES | MUL | NULL |  |  |
| label_code | varchar(50) | YES | UNI | NULL |  |  |
| recipient_vn | varchar(12) | YES |  | NULL |  |  |
| recipient_datetime | datetime | YES |  | NULL |  |  |
| dose_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | vaccine_inventory_lot_id | no | 1 |
| ix_label_code | label_code | yes | 1 |
| PRIMARY | vaccine_inventory_label_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vaccine_inventory_label_id": 1,
    "vaccine_inventory_lot_id": 1,
    "label_code": "81900921766485683755",
    "recipient_vn": "640525060341",
    "recipient_datetime": "2021-05-25 14:11:51",
    "dose_no": 1
  },
  {
    "vaccine_inventory_label_id": 2,
    "vaccine_inventory_lot_id": 1,
    "label_code": "81900921766483688977",
    "recipient_vn": "640525060323",
    "recipient_datetime": "2021-05-25 13:10:43",
    "dose_no": 2
  },
  {
    "vaccine_inventory_label_id": 3,
    "vaccine_inventory_lot_id": 1,
    "label_code": "81900921766486089329",
    "recipient_vn": "640525060307",
    "recipient_datetime": "2021-05-25 13:23:08",
    "dose_no": 3
  },
  {
    "vaccine_inventory_label_id": 4,
    "vaccine_inventory_lot_id": 1,
    "label_code": "81900921766484085660",
    "recipient_vn": "640525060316",
    "recipient_datetime": "2021-05-25 13:15:02",
    "dose_no": 4
  },
  {
    "vaccine_inventory_label_id": 5,
    "vaccine_inventory_lot_id": 1,
    "label_code": "81900921766486484178",
    "recipient_vn": "640525060308",
    "recipient_datetime": "2021-05-25 13:21:03",
    "dose_no": 5
  },
  {
    "vaccine_inventory_label_id": 6,
    "vaccine_inventory_lot_id": 1,
    "label_code": "81900921766484487617",
    "recipient_vn": "640525060315",
    "recipient_datetime": "2021-05-25 13:16:48",
    "dose_no": 6
  },
  {
    "vaccine_inventory_label_id": 7,
    "vaccine_inventory_lot_id": 1,
    "label_code": "81900921766486884432",
    "recipient_vn": "640525060344",
    "recipient_datetime": "2021-05-25 13:19:47",
    "dose_no": 7
  },
  {
    "vaccine_inventory_label_id": 8,
    "vaccine_inventory_lot_id": 1,
    "label_code": "81900921766484884427",
    "recipient_vn": "640525060310",
    "recipient_datetime": "2021-05-25 13:16:11",
    "dose_no": 8
  }
]
```
