# `ipt_food_menu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_food_menu_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| date_id | int(11) | YES |  | NULL |  |  |
| nutrition_items_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| meal | int(11) | YES |  | NULL |  |  |
| comment | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| order_date | date | YES |  | NULL |  |  |
| order_time | time | YES |  | NULL |  |  |
| order_staff | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_food_menu_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_food_menu_id": 1,
    "an": "540000791",
    "date_id": 4,
    "nutrition_items_id": 18,
    "qty": 1,
    "meal": 2,
    "comment": null,
    "hos_guid": null,
    "order_date": null,
    "order_time": null,
    "order_staff": null
  },
  {
    "ipt_food_menu_id": 3,
    "an": "540000792",
    "date_id": 4,
    "nutrition_items_id": 18,
    "qty": 1,
    "meal": 2,
    "comment": null,
    "hos_guid": null,
    "order_date": null,
    "order_time": null,
    "order_staff": null
  },
  {
    "ipt_food_menu_id": 4,
    "an": "540000886",
    "date_id": 2,
    "nutrition_items_id": 2,
    "qty": 1,
    "meal": 2,
    "comment": "ข้าวต้ม",
    "hos_guid": null,
    "order_date": null,
    "order_time": null,
    "order_staff": null
  },
  {
    "ipt_food_menu_id": 5,
    "an": "540000821",
    "date_id": 2,
    "nutrition_items_id": 18,
    "qty": 1,
    "meal": 2,
    "comment": null,
    "hos_guid": null,
    "order_date": null,
    "order_time": null,
    "order_staff": null
  },
  {
    "ipt_food_menu_id": 6,
    "an": "540000798",
    "date_id": 2,
    "nutrition_items_id": 18,
    "qty": 1,
    "meal": 2,
    "comment": null,
    "hos_guid": null,
    "order_date": null,
    "order_time": null,
    "order_staff": null
  },
  {
    "ipt_food_menu_id": 7,
    "an": "540000946",
    "date_id": 5,
    "nutrition_items_id": 18,
    "qty": 1,
    "meal": 2,
    "comment": null,
    "hos_guid": null,
    "order_date": null,
    "order_time": null,
    "order_staff": null
  },
  {
    "ipt_food_menu_id": 29,
    "an": "550000082",
    "date_id": 1,
    "nutrition_items_id": 4,
    "qty": 1,
    "meal": 2,
    "comment": null,
    "hos_guid": null,
    "order_date": null,
    "order_time": null,
    "order_staff": null
  },
  {
    "ipt_food_menu_id": 30,
    "an": "550000082",
    "date_id": 2,
    "nutrition_items_id": 4,
    "qty": 1,
    "meal": 2,
    "comment": null,
    "hos_guid": null,
    "order_date": null,
    "order_time": null,
    "order_staff": null
  }
]
```
