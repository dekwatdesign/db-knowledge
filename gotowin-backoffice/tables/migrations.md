# `migrations`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int unsigned | NO | PRI | NULL | auto_increment |  |
| migration | varchar(255) | NO |  | NULL |  |  |
| batch | int | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 5,
    "migration": "2019_02_26_032050_create_users_table",
    "batch": 1
  },
  {
    "id": 6,
    "migration": "2014_10_12_000000_create_users_table",
    "batch": 2
  },
  {
    "id": 7,
    "migration": "2014_10_12_100000_create_password_resets_table",
    "batch": 2
  },
  {
    "id": 8,
    "migration": "2020_12_18_152210_create_supply_order_table",
    "batch": 3
  },
  {
    "id": 9,
    "migration": "2020_12_18_155809_create_supply_order_status_table",
    "batch": 3
  },
  {
    "id": 10,
    "migration": "2020_12_18_164208_create_supply_order_detail_table",
    "batch": 3
  },
  {
    "id": 11,
    "migration": "2021_03_02_090936_add_username_to_users_table",
    "batch": 1
  },
  {
    "id": 12,
    "migration": "2021_03_18_101510_add_fill_to_supplies_table",
    "batch": 4
  }
]
```
