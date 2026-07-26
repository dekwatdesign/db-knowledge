# `person_house_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_house_history_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| old_house_id | int(11) | YES |  | NULL |  |  |
| new_house_id | int(11) | YES |  | NULL |  |  |
| move_datetime | datetime | YES |  | NULL |  |  |
| move_staff | varchar(25) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_house_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "person_house_history_id": 1,
    "person_id": 5335,
    "old_house_id": 49,
    "new_house_id": 3680,
    "move_datetime": "2009-12-17 12:01:32",
    "move_staff": "rachanee",
    "hos_guid": "{7F1FB88C-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
