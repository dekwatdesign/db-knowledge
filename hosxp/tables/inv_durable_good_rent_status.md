# `inv_durable_good_rent_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rent_status_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_rent_status_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_rent_status_name | varchar(50) | YES |  | NULL |  |  |
| rent_status_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rent_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "rent_status_id": 1,
    "inv_durable_good_rent_status_id": 1,
    "inv_durable_good_rent_status_name": "เช่ายืมอยู่",
    "rent_status_name": null
  },
  {
    "rent_status_id": 2,
    "inv_durable_good_rent_status_id": 2,
    "inv_durable_good_rent_status_name": "สามารถยืมได้",
    "rent_status_name": null
  }
]
```
