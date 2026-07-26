# `stock_item_price_rate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_price_rate_id | int(11) | NO | PRI | 0 |  |  |
| min_unit_cost | double(15,3) | YES |  | NULL |  |  |
| max_unit_cost | double(15,3) | YES |  | NULL |  |  |
| adj_with_percent | char(1) | YES |  | NULL |  |  |
| adj_percent | double(15,3) | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| add_price | double(15,3) | YES |  | NULL |  |  |
| base_percent_cost | double(15,3) | YES |  | NULL |  |  |
| base_price_mod | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_item_price_rate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "stock_item_price_rate_id": 1,
    "min_unit_cost": 0.01,
    "max_unit_cost": 0.2,
    "adj_with_percent": "N",
    "adj_percent": null,
    "unit_price": 0.5,
    "add_price": null,
    "base_percent_cost": null,
    "base_price_mod": null
  },
  {
    "stock_item_price_rate_id": 2,
    "min_unit_cost": 0.21,
    "max_unit_cost": 0.5,
    "adj_with_percent": "N",
    "adj_percent": null,
    "unit_price": 1.0,
    "add_price": null,
    "base_percent_cost": null,
    "base_price_mod": null
  },
  {
    "stock_item_price_rate_id": 3,
    "min_unit_cost": 0.51,
    "max_unit_cost": 1.0,
    "adj_with_percent": "N",
    "adj_percent": null,
    "unit_price": 1.5,
    "add_price": null,
    "base_percent_cost": null,
    "base_price_mod": null
  },
  {
    "stock_item_price_rate_id": 4,
    "min_unit_cost": 1.01,
    "max_unit_cost": 10.0,
    "adj_with_percent": "Y",
    "adj_percent": 1.25,
    "unit_price": 0.0,
    "add_price": 0.5,
    "base_percent_cost": 1.0,
    "base_price_mod": 0.25
  },
  {
    "stock_item_price_rate_id": 5,
    "min_unit_cost": 10.01,
    "max_unit_cost": 100.0,
    "adj_with_percent": "Y",
    "adj_percent": 1.2,
    "unit_price": 0.0,
    "add_price": 3.0,
    "base_percent_cost": 10.0,
    "base_price_mod": 0.5
  },
  {
    "stock_item_price_rate_id": 6,
    "min_unit_cost": 100.01,
    "max_unit_cost": 1000.0,
    "adj_with_percent": "Y",
    "adj_percent": 1.15,
    "unit_price": 0.0,
    "add_price": 26.0,
    "base_percent_cost": 100.0,
    "base_price_mod": 1.0
  },
  {
    "stock_item_price_rate_id": 7,
    "min_unit_cost": 1000.01,
    "max_unit_cost": 99999999.0,
    "adj_with_percent": "Y",
    "adj_percent": 1.1,
    "unit_price": 0.0,
    "add_price": 161.0,
    "base_percent_cost": 1000.0,
    "base_price_mod": 1.0
  }
]
```
