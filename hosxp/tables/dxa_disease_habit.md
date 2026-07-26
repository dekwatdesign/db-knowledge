# `dxa_disease_habit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_disease_habit_id | int(11) | YES |  | NULL |  |  |
| dxa_disease_id | int(11) | YES |  | NULL |  |  |
| dxa_person_habit_id | int(11) | YES |  | NULL |  |  |
| dxa_person_habit_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dxa_disease_habit_id": 11,
    "dxa_disease_id": 32,
    "dxa_person_habit_id": 9,
    "dxa_person_habit_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_habit_id": 10,
    "dxa_disease_id": 22,
    "dxa_person_habit_id": 12,
    "dxa_person_habit_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_habit_id": 12,
    "dxa_disease_id": 32,
    "dxa_person_habit_id": 8,
    "dxa_person_habit_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_habit_id": 13,
    "dxa_disease_id": 44,
    "dxa_person_habit_id": 10,
    "dxa_person_habit_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_habit_id": 25,
    "dxa_disease_id": 63,
    "dxa_person_habit_id": 19,
    "dxa_person_habit_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_habit_id": 14,
    "dxa_disease_id": 48,
    "dxa_person_habit_id": 11,
    "dxa_person_habit_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_habit_id": 22,
    "dxa_disease_id": 62,
    "dxa_person_habit_id": 18,
    "dxa_person_habit_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_disease_habit_id": 20,
    "dxa_disease_id": 60,
    "dxa_person_habit_id": 14,
    "dxa_person_habit_score": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
