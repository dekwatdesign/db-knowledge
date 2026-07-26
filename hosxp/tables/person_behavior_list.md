# `person_behavior_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_behavior_list_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| person_behavior_id | int(11) | YES |  | NULL |  |  |
| person_behavior_value_list_id | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_behavior_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_behavior_list_id": 1,
    "person_id": 23127,
    "person_behavior_id": 1,
    "person_behavior_value_list_id": 1,
    "last_update": "2023-01-20 08:48:45",
    "hos_guid": null
  },
  {
    "person_behavior_list_id": 2,
    "person_id": 23127,
    "person_behavior_id": 2,
    "person_behavior_value_list_id": 5,
    "last_update": "2023-01-20 08:48:45",
    "hos_guid": null
  },
  {
    "person_behavior_list_id": 3,
    "person_id": 23127,
    "person_behavior_id": 3,
    "person_behavior_value_list_id": 10,
    "last_update": "2023-01-20 08:48:45",
    "hos_guid": null
  },
  {
    "person_behavior_list_id": 4,
    "person_id": 23127,
    "person_behavior_id": 4,
    "person_behavior_value_list_id": 14,
    "last_update": "2023-01-20 08:48:45",
    "hos_guid": null
  },
  {
    "person_behavior_list_id": 5,
    "person_id": 23127,
    "person_behavior_id": 5,
    "person_behavior_value_list_id": 16,
    "last_update": "2023-01-20 08:48:45",
    "hos_guid": null
  },
  {
    "person_behavior_list_id": 6,
    "person_id": 23127,
    "person_behavior_id": 6,
    "person_behavior_value_list_id": 19,
    "last_update": "2023-01-20 08:48:45",
    "hos_guid": null
  },
  {
    "person_behavior_list_id": 7,
    "person_id": 23127,
    "person_behavior_id": 7,
    "person_behavior_value_list_id": 26,
    "last_update": "2023-01-20 08:48:45",
    "hos_guid": null
  },
  {
    "person_behavior_list_id": 8,
    "person_id": 23127,
    "person_behavior_id": 8,
    "person_behavior_value_list_id": 28,
    "last_update": "2023-01-20 08:48:45",
    "hos_guid": null
  }
]
```
