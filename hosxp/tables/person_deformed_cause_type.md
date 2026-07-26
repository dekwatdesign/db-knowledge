# `person_deformed_cause_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_cause_type_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_cause_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_deformed_cause_type_name | person_deformed_cause_type_name | yes | 1 |
| PRIMARY | person_deformed_cause_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_deformed_cause_type_id": 1,
    "person_deformed_cause_type_name": "ความพิการแต่กำเนิด",
    "hos_guid": null
  },
  {
    "person_deformed_cause_type_id": 2,
    "person_deformed_cause_type_name": "ความพิการจากการบาดเจ็บ",
    "hos_guid": null
  },
  {
    "person_deformed_cause_type_id": 3,
    "person_deformed_cause_type_name": "ความพิการจากโรค",
    "hos_guid": null
  }
]
```
