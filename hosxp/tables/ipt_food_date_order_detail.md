# `ipt_food_date_order_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_food_date_order_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipt_food_date_order_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_items_id | int(11) | YES |  | NULL |  |  |
| meal | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| confirm_order | char(1) | YES |  | NULL |  |  |
| order_note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_id | ipt_food_date_order_id | no | 1 |
| PRIMARY | ipt_food_date_order_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_food_date_order_detail_id": 7,
    "ipt_food_date_order_id": 23581,
    "nutrition_items_id": 18,
    "meal": 2,
    "qty": 1,
    "confirm_order": "Y",
    "order_note": "",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_detail_id": 8,
    "ipt_food_date_order_id": 23582,
    "nutrition_items_id": 18,
    "meal": 2,
    "qty": 1,
    "confirm_order": "Y",
    "order_note": "",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_detail_id": 126,
    "ipt_food_date_order_id": 23835,
    "nutrition_items_id": 18,
    "meal": 1,
    "qty": 1,
    "confirm_order": "N",
    "order_note": "",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_detail_id": 127,
    "ipt_food_date_order_id": 23835,
    "nutrition_items_id": 18,
    "meal": 2,
    "qty": 1,
    "confirm_order": "N",
    "order_note": "",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_detail_id": 128,
    "ipt_food_date_order_id": 23835,
    "nutrition_items_id": 18,
    "meal": 3,
    "qty": 1,
    "confirm_order": "N",
    "order_note": "",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_detail_id": 129,
    "ipt_food_date_order_id": 23836,
    "nutrition_items_id": 17,
    "meal": 1,
    "qty": 1,
    "confirm_order": "N",
    "order_note": "",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_detail_id": 130,
    "ipt_food_date_order_id": 23836,
    "nutrition_items_id": 17,
    "meal": 2,
    "qty": 1,
    "confirm_order": "N",
    "order_note": "",
    "hos_guid": null
  },
  {
    "ipt_food_date_order_detail_id": 131,
    "ipt_food_date_order_id": 23836,
    "nutrition_items_id": 17,
    "meal": 3,
    "qty": 1,
    "confirm_order": "N",
    "order_note": "",
    "hos_guid": null
  }
]
```
