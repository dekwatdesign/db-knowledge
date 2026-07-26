# `stretcher_o2tube_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stretcher_o2tube_type_id | int(11) | NO | PRI | 0 |  |  |
| stretcher_o2tube_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stretcher_o2tube_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stretcher_o2tube_type_id": 1,
    "stretcher_o2tube_type_name": "Cannular"
  },
  {
    "stretcher_o2tube_type_id": 2,
    "stretcher_o2tube_type_name": "Mask with bag"
  },
  {
    "stretcher_o2tube_type_id": 3,
    "stretcher_o2tube_type_name": "Ambu with bag"
  }
]
```
