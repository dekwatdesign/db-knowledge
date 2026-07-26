# `health_med_operation_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_operation_type_id | int(11) | NO | PRI | 0 |  |  |
| health_med_operation_type_name | varchar(150) | YES | UNI | NULL |  |  |
| health_med_operation_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_operation_type_name | health_med_operation_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_operation_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "health_med_operation_type_id": 1,
    "health_med_operation_type_name": "การบริบาล",
    "health_med_operation_type_code": "77",
    "hos_guid": null
  },
  {
    "health_med_operation_type_id": 2,
    "health_med_operation_type_name": "การบำบัด",
    "health_med_operation_type_code": "78",
    "hos_guid": null
  },
  {
    "health_med_operation_type_id": 3,
    "health_med_operation_type_name": "การส่งเสริม",
    "health_med_operation_type_code": "79",
    "hos_guid": null
  }
]
```
