# `operation_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_location_id | int(11) | NO | PRI | 0 |  |  |
| operation_location_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_location_name | operation_location_name | yes | 1 |
| PRIMARY | operation_location_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "operation_location_id": 4,
    "operation_location_name": "Recovery Room"
  },
  {
    "operation_location_id": 2,
    "operation_location_name": "ห้องดมยา"
  },
  {
    "operation_location_id": 1,
    "operation_location_name": "ห้องเตรียมผ่าตัด"
  },
  {
    "operation_location_id": 3,
    "operation_location_name": "ห้องผ่าตัด"
  }
]
```
