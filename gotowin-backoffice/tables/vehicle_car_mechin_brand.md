# `vehicle_car_mechin_brand`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CAR_MACHIN_BRAND_ID | int | NO | PRI | NULL | auto_increment |  |
| CAR_MACHIN_BRAND_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CAR_MACHIN_BRAND_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "CAR_MACHIN_BRAND_ID": 1,
    "CAR_MACHIN_BRAND_NAME": "Toyota",
    "updated_at": null,
    "created_at": null
  }
]
```
