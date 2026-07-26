# `ipt_food_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_food_print_id | int(11) | NO | PRI | 0 |  |  |
| order_date | date | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| nutrition_items_id | int(11) | YES |  | NULL |  |  |
| meal | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_food_print_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_food_print_id": 3,
    "order_date": "2020-11-16",
    "an": "630000873",
    "nutrition_items_id": 21,
    "meal": 1,
    "qty": 1,
    "hos_guid": null
  },
  {
    "ipt_food_print_id": 4,
    "order_date": "2020-11-16",
    "an": "630000873",
    "nutrition_items_id": 21,
    "meal": 2,
    "qty": 1,
    "hos_guid": null
  },
  {
    "ipt_food_print_id": 5,
    "order_date": "2020-11-16",
    "an": "630000873",
    "nutrition_items_id": 21,
    "meal": 3,
    "qty": 1,
    "hos_guid": null
  },
  {
    "ipt_food_print_id": 6,
    "order_date": "2020-11-16",
    "an": "630000873",
    "nutrition_items_id": 5,
    "meal": 1,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "ipt_food_print_id": 7,
    "order_date": "2020-11-16",
    "an": "630000873",
    "nutrition_items_id": 5,
    "meal": 2,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "ipt_food_print_id": 8,
    "order_date": "2020-11-16",
    "an": "630000873",
    "nutrition_items_id": 5,
    "meal": 3,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "ipt_food_print_id": 9,
    "order_date": "2020-11-15",
    "an": "630000873",
    "nutrition_items_id": 5,
    "meal": 1,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "ipt_food_print_id": 10,
    "order_date": "2020-11-15",
    "an": "630000873",
    "nutrition_items_id": 5,
    "meal": 2,
    "qty": 1,
    "hos_guid": ""
  }
]
```
