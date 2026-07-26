# `bed_side_device_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bed_side_device_type_id | int(11) | NO | PRI | 0 |  |  |
| bed_side_device_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bed_side_device_type_name | bed_side_device_type_name | yes | 1 |
| PRIMARY | bed_side_device_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "bed_side_device_type_id": 1,
    "bed_side_device_type_name": "Bed side monitor"
  },
  {
    "bed_side_device_type_id": 2,
    "bed_side_device_type_name": "CNS"
  }
]
```
