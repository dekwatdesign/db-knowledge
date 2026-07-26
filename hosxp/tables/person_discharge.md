# `person_discharge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_discharge_id | int(11) | NO | PRI | 0 |  |  |
| person_discharge_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_discharge_name | person_discharge_name | yes | 1 |
| PRIMARY | person_discharge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "person_discharge_id": 1,
    "person_discharge_name": "เสียชีวิต",
    "hos_guid": null
  },
  {
    "person_discharge_id": 2,
    "person_discharge_name": "ย้าย",
    "hos_guid": null
  },
  {
    "person_discharge_id": 3,
    "person_discharge_name": "สาบสูญ",
    "hos_guid": null
  },
  {
    "person_discharge_id": 9,
    "person_discharge_name": "ยังอาศัยอยู่",
    "hos_guid": null
  }
]
```
