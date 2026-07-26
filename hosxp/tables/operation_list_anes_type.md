# `operation_list_anes_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_list_anes_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_list_anes_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_list_anes_type_name | operation_list_anes_type_name | yes | 1 |
| PRIMARY | operation_list_anes_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "operation_list_anes_type_id": 1,
    "operation_list_anes_type_name": "General anesthesia",
    "hos_guid": null
  },
  {
    "operation_list_anes_type_id": 2,
    "operation_list_anes_type_name": "Spinal or epidural anesthesia",
    "hos_guid": null
  },
  {
    "operation_list_anes_type_id": 3,
    "operation_list_anes_type_name": "Monitored anesthesia care",
    "hos_guid": null
  },
  {
    "operation_list_anes_type_id": 4,
    "operation_list_anes_type_name": "Regional or field block",
    "hos_guid": null
  }
]
```
