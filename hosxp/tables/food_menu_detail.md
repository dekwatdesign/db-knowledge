# `food_menu_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| food_menu_detail_id | int(11) | NO | PRI | 0 |  |  |
| food_menu_head_id | int(11) | YES |  | NULL |  |  |
| nutrition_items_id | int(11) | YES |  | NULL |  |  |
| meal | int(11) | YES |  | NULL |  |  |
| date_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | food_menu_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "food_menu_detail_id": 8,
    "food_menu_head_id": 2,
    "nutrition_items_id": 2,
    "meal": 1,
    "date_id": 1,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "food_menu_detail_id": 9,
    "food_menu_head_id": 2,
    "nutrition_items_id": 2,
    "meal": 1,
    "date_id": 2,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "food_menu_detail_id": 10,
    "food_menu_head_id": 2,
    "nutrition_items_id": 2,
    "meal": 1,
    "date_id": 3,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "food_menu_detail_id": 11,
    "food_menu_head_id": 2,
    "nutrition_items_id": 2,
    "meal": 1,
    "date_id": 4,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "food_menu_detail_id": 12,
    "food_menu_head_id": 2,
    "nutrition_items_id": 2,
    "meal": 1,
    "date_id": 5,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "food_menu_detail_id": 13,
    "food_menu_head_id": 2,
    "nutrition_items_id": 2,
    "meal": 1,
    "date_id": 6,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "food_menu_detail_id": 14,
    "food_menu_head_id": 2,
    "nutrition_items_id": 2,
    "meal": 1,
    "date_id": 7,
    "qty": 1,
    "hos_guid": ""
  },
  {
    "food_menu_detail_id": 15,
    "food_menu_head_id": 3,
    "nutrition_items_id": 3,
    "meal": 1,
    "date_id": 1,
    "qty": 1,
    "hos_guid": ""
  }
]
```
