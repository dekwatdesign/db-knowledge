# `stock_item_cost_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_cost_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_item_cost_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_item_cost_type_name | stock_item_cost_type_name | yes | 1 |
| PRIMARY | stock_item_cost_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "stock_item_cost_type_id": 1,
    "stock_item_cost_type_name": "ราคาเฉลี่ย",
    "hos_guid": "{DEA077C4-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "stock_item_cost_type_id": 2,
    "stock_item_cost_type_name": "ราคากลาง",
    "hos_guid": "{DEA079F4-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
