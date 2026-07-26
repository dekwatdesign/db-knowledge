# `ipt_food_date_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_food_date_order_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| order_date | date | YES | MUL | NULL |  |  |
| food_list | varchar(250) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| ward | varchar(7) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_ward_order_date | ward | no | 1 |
| ix_ward_order_date | order_date | no | 2 |
| ix_ward_order_date_index | order_date | no | 1 |
| ix_ward_order_date_index | ward | no | 2 |
| PRIMARY | ipt_food_date_order_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_food_date_order_id": 1,
    "an": "540000791",
    "order_date": "2011-10-13",
    "food_list": "อาหารธรรมดา จืด",
    "entry_datetime": "2011-10-13 15:30:12",
    "entry_staff": "yuwa068",
    "ward": "03",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_id": 2,
    "an": "540000792",
    "order_date": "2011-10-13",
    "food_list": "อาหารธรรมดา จืด",
    "entry_datetime": "2011-10-13 15:30:12",
    "entry_staff": "yuwa068",
    "ward": "03",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_id": 3,
    "an": "610000503",
    "order_date": "2018-12-06",
    "food_list": "อาหารธรรมดา จืด,อาหารธรรมดา จืด,อาหารธรรมดา จืด",
    "entry_datetime": "2018-12-06 11:54:12",
    "entry_staff": "yuwa279",
    "ward": "04",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_id": 4,
    "an": "610000726",
    "order_date": "2018-12-06",
    "food_list": "อาหารธรรมดา เผ็ด,อาหารธรรมดา เผ็ด,อาหารธรรมดา เผ็ด",
    "entry_datetime": "2018-12-06 11:54:12",
    "entry_staff": "yuwa279",
    "ward": "04",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_id": 5,
    "an": "610000749",
    "order_date": "2018-12-06",
    "food_list": "อาหารธรรมดา เผ็ด,อาหารธรรมดา เผ็ด,อาหารธรรมดา เผ็ด",
    "entry_datetime": "2018-12-06 11:54:12",
    "entry_staff": "yuwa279",
    "ward": "04",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_id": 6,
    "an": "610000778",
    "order_date": "2018-12-06",
    "food_list": "อาหารธรรมดา เผ็ด,อาหารธรรมดา เผ็ด,อาหารธรรมดา เผ็ด",
    "entry_datetime": "2018-12-06 11:54:12",
    "entry_staff": "yuwa279",
    "ward": "04",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_id": 7,
    "an": "610000831",
    "order_date": "2018-12-06",
    "food_list": "อาหารธรรมดา เผ็ด,อาหารธรรมดา เผ็ด,อาหารธรรมดา เผ็ด",
    "entry_datetime": "2018-12-06 11:54:12",
    "entry_staff": "yuwa279",
    "ward": "04",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_id": 8,
    "an": "610000863",
    "order_date": "2018-12-06",
    "food_list": "อาหารธรรมดา เผ็ด,อาหารธรรมดา เผ็ด,อาหารธรรมดา เผ็ด",
    "entry_datetime": "2018-12-06 11:54:12",
    "entry_staff": "yuwa279",
    "ward": "04",
    "hos_guid": null
  }
]
```
