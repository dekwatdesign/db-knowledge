# `dis_question_class`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dis_question_class_id | int(11) | NO | PRI | 0 |  |  |
| dis_question_class_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dis_question_class_name | dis_question_class_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dis_question_class_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dis_question_class_id": 1,
    "dis_question_class_name": "Identification",
    "hos_guid": null
  },
  {
    "dis_question_class_id": 2,
    "dis_question_class_name": "Availability",
    "hos_guid": null
  },
  {
    "dis_question_class_id": 3,
    "dis_question_class_name": "Pharmacokinetics",
    "hos_guid": null
  },
  {
    "dis_question_class_id": 4,
    "dis_question_class_name": "Pregnancy / Nursing",
    "hos_guid": null
  },
  {
    "dis_question_class_id": 5,
    "dis_question_class_name": "Interaction",
    "hos_guid": null
  },
  {
    "dis_question_class_id": 6,
    "dis_question_class_name": "Formulation",
    "hos_guid": null
  },
  {
    "dis_question_class_id": 7,
    "dis_question_class_name": "ADR / Side effect",
    "hos_guid": null
  },
  {
    "dis_question_class_id": 8,
    "dis_question_class_name": "Toxicity / Poisioning",
    "hos_guid": null
  }
]
```
