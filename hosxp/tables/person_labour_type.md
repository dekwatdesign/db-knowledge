# `person_labour_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_labour_type_id | int(11) | NO | PRI | 0 |  |  |
| person_labour_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_labour_type_name | person_labour_type_name | yes | 1 |
| PRIMARY | person_labour_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "person_labour_type_id": 1,
    "person_labour_type_name": "NORMAL",
    "hos_guid": null
  },
  {
    "person_labour_type_id": 2,
    "person_labour_type_name": "CESAREAN",
    "hos_guid": null
  },
  {
    "person_labour_type_id": 3,
    "person_labour_type_name": "VACUUM",
    "hos_guid": null
  },
  {
    "person_labour_type_id": 4,
    "person_labour_type_name": "FORCEPS",
    "hos_guid": null
  },
  {
    "person_labour_type_id": 5,
    "person_labour_type_name": "ท่าก้น",
    "hos_guid": null
  }
]
```
