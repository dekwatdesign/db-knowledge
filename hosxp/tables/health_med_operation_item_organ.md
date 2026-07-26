# `health_med_operation_item_organ`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_operation_item_organ_id | int(11) | NO | PRI | 0 |  |  |
| health_med_operation_item_id | int(11) | YES | MUL | NULL |  |  |
| health_med_organ_id | int(11) | YES |  | NULL |  |  |
| health_med_operation_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | health_med_operation_item_organ_id | yes | 1 |
| ix_unique | health_med_operation_item_id | yes | 2 |
| ix_unique | health_med_operation_type_id | yes | 3 |
| ix_unique_index | health_med_operation_item_id | yes | 1 |
| ix_unique_index | health_med_operation_item_organ_id | yes | 2 |
| ix_unique_index | health_med_operation_type_id | yes | 3 |
| PRIMARY | health_med_operation_item_organ_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "health_med_operation_item_organ_id": 911,
    "health_med_operation_item_id": 1,
    "health_med_organ_id": 1,
    "health_med_operation_type_id": 1,
    "hos_guid": null
  },
  {
    "health_med_operation_item_organ_id": 912,
    "health_med_operation_item_id": 2,
    "health_med_organ_id": 1,
    "health_med_operation_type_id": 1,
    "hos_guid": null
  },
  {
    "health_med_operation_item_organ_id": 913,
    "health_med_operation_item_id": 3,
    "health_med_organ_id": 1,
    "health_med_operation_type_id": 1,
    "hos_guid": null
  },
  {
    "health_med_operation_item_organ_id": 914,
    "health_med_operation_item_id": 4,
    "health_med_organ_id": 1,
    "health_med_operation_type_id": 1,
    "hos_guid": null
  },
  {
    "health_med_operation_item_organ_id": 915,
    "health_med_operation_item_id": 5,
    "health_med_organ_id": 1,
    "health_med_operation_type_id": 1,
    "hos_guid": null
  },
  {
    "health_med_operation_item_organ_id": 916,
    "health_med_operation_item_id": 8,
    "health_med_organ_id": 1,
    "health_med_operation_type_id": 1,
    "hos_guid": null
  },
  {
    "health_med_operation_item_organ_id": 917,
    "health_med_operation_item_id": 9,
    "health_med_organ_id": 1,
    "health_med_operation_type_id": 1,
    "hos_guid": null
  },
  {
    "health_med_operation_item_organ_id": 918,
    "health_med_operation_item_id": 17,
    "health_med_organ_id": 1,
    "health_med_operation_type_id": 1,
    "hos_guid": null
  }
]
```
