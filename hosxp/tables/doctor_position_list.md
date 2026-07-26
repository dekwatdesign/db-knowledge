# `doctor_position_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_position_list_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(20) | YES | MUL | NULL |  |  |
| position_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | doctor | yes | 1 |
| ix_unique | position_id | yes | 2 |
| PRIMARY | doctor_position_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_position_list_id": 1,
    "doctor": "208",
    "position_id": 1,
    "hos_guid": null
  },
  {
    "doctor_position_list_id": 2,
    "doctor": "203",
    "position_id": 1,
    "hos_guid": null
  },
  {
    "doctor_position_list_id": 3,
    "doctor": "318",
    "position_id": 1,
    "hos_guid": null
  },
  {
    "doctor_position_list_id": 5,
    "doctor": "0021",
    "position_id": 1,
    "hos_guid": null
  },
  {
    "doctor_position_list_id": 6,
    "doctor": "0022",
    "position_id": 3,
    "hos_guid": null
  },
  {
    "doctor_position_list_id": 7,
    "doctor": "085",
    "position_id": 3,
    "hos_guid": null
  },
  {
    "doctor_position_list_id": 8,
    "doctor": "086",
    "position_id": 3,
    "hos_guid": null
  },
  {
    "doctor_position_list_id": 9,
    "doctor": "361",
    "position_id": 3,
    "hos_guid": null
  }
]
```
