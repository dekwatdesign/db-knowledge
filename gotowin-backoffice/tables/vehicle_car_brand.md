# `vehicle_car_brand`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CAR_BRAND_ID | int | NO | PRI | NULL | auto_increment |  |
| CAR_BRAND_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CAR_BRAND_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "CAR_BRAND_ID": 3,
    "CAR_BRAND_NAME": "Bentley",
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_BRAND_ID": 4,
    "CAR_BRAND_NAME": "BMW",
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_BRAND_ID": 5,
    "CAR_BRAND_NAME": "Chevrolet",
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_BRAND_ID": 6,
    "CAR_BRAND_NAME": "Citroen",
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_BRAND_ID": 7,
    "CAR_BRAND_NAME": "Deva",
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_BRAND_ID": 8,
    "CAR_BRAND_NAME": "DFSK",
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_BRAND_ID": 9,
    "CAR_BRAND_NAME": "Ferrari",
    "updated_at": null,
    "created_at": null
  },
  {
    "CAR_BRAND_ID": 10,
    "CAR_BRAND_NAME": "Ford",
    "updated_at": null,
    "created_at": null
  }
]
```
