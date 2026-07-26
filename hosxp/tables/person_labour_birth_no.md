# `person_labour_birth_no`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_labour_birth_no_id | int(11) | NO | PRI | 0 |  |  |
| person_labour_birth_no_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_labour_birth_no_name | person_labour_birth_no_name | yes | 1 |
| PRIMARY | person_labour_birth_no_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "person_labour_birth_no_id": 1,
    "person_labour_birth_no_name": "คลอดเดี่ยว",
    "hos_guid": null
  },
  {
    "person_labour_birth_no_id": 2,
    "person_labour_birth_no_name": "เป็นเด็กแฝดลำดับที่ 1",
    "hos_guid": null
  },
  {
    "person_labour_birth_no_id": 3,
    "person_labour_birth_no_name": "เป็นเด็กแฝดลำดับที่ 2",
    "hos_guid": null
  },
  {
    "person_labour_birth_no_id": 4,
    "person_labour_birth_no_name": "เป็นเด็กแฝดลำดับที่ 3",
    "hos_guid": null
  },
  {
    "person_labour_birth_no_id": 5,
    "person_labour_birth_no_name": "เป็นเด็กแฝดลำดับที่ 4",
    "hos_guid": null
  }
]
```
