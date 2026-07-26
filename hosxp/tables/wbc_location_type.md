# `wbc_location_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| wbc_location_type_id | int(11) | NO | PRI | 0 |  |  |
| wbc_location_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_wbc_location_type_name | wbc_location_type_name | yes | 1 |
| PRIMARY | wbc_location_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "wbc_location_type_id": 1,
    "wbc_location_type_name": "ที่นี่",
    "hos_guid": null
  },
  {
    "wbc_location_type_id": 2,
    "wbc_location_type_name": "ที่อื่น",
    "hos_guid": null
  }
]
```
