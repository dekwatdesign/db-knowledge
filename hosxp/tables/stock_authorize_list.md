# `stock_authorize_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_authorize_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_authorize_type_id | int(11) | YES |  | NULL |  |  |
| stock_authorize_position_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_authorize_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "stock_authorize_list_id": 1,
    "stock_authorize_type_id": 1,
    "stock_authorize_position_id": 1
  },
  {
    "stock_authorize_list_id": 2,
    "stock_authorize_type_id": 1,
    "stock_authorize_position_id": 2
  },
  {
    "stock_authorize_list_id": 3,
    "stock_authorize_type_id": 1,
    "stock_authorize_position_id": 3
  },
  {
    "stock_authorize_list_id": 4,
    "stock_authorize_type_id": 2,
    "stock_authorize_position_id": 2
  },
  {
    "stock_authorize_list_id": 5,
    "stock_authorize_type_id": 2,
    "stock_authorize_position_id": 3
  },
  {
    "stock_authorize_list_id": 6,
    "stock_authorize_type_id": 3,
    "stock_authorize_position_id": 1
  }
]
```
