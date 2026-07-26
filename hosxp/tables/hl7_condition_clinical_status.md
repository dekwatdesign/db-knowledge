# `hl7_condition_clinical_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hl7_condition_clinical_status_id | int(11) | NO | PRI | 0 |  |  |
| hl7_condition_clinical_status_code | varchar(20) | YES | UNI | NULL |  |  |
| hl7_condition_clinical_status_display | varchar(50) | YES |  | NULL |  |  |
| hl7_condition_clinical_status_definition | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hl7_condition_clinical_status_code | hl7_condition_clinical_status_code | yes | 1 |
| PRIMARY | hl7_condition_clinical_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "hl7_condition_clinical_status_id": 1,
    "hl7_condition_clinical_status_code": "active",
    "hl7_condition_clinical_status_display": "Active",
    "hl7_condition_clinical_status_definition": "The subject is currently experiencing the condition or situation, there is evidence of the condition or situation, or considered to be a significant risk."
  },
  {
    "hl7_condition_clinical_status_id": 2,
    "hl7_condition_clinical_status_code": "recurrence",
    "hl7_condition_clinical_status_display": " Recurrence",
    "hl7_condition_clinical_status_definition": "The subject is experiencing a reoccurence or repeating of a previously resolved condition or situation, e.g. urinary tract infection, food insecurity."
  },
  {
    "hl7_condition_clinical_status_id": 3,
    "hl7_condition_clinical_status_code": "relapse",
    "hl7_condition_clinical_status_display": " Relapse",
    "hl7_condition_clinical_status_definition": "The subject is experiencing a return of a condition or situation after a period of improvement or remission, e.g. relapse of cancer, alcoholism."
  },
  {
    "hl7_condition_clinical_status_id": 4,
    "hl7_condition_clinical_status_code": "inactive",
    "hl7_condition_clinical_status_display": "Inactive",
    "hl7_condition_clinical_status_definition": "The subject is no longer experiencing the condition or situation and there is no longer evidence or appreciable risk of the condition or situation."
  },
  {
    "hl7_condition_clinical_status_id": 5,
    "hl7_condition_clinical_status_code": "remission",
    "hl7_condition_clinical_status_display": " Remission",
    "hl7_condition_clinical_status_definition": "The subject is not presently experiencing the condition or situation, but there is a risk of the condition or situation returning."
  },
  {
    "hl7_condition_clinical_status_id": 6,
    "hl7_condition_clinical_status_code": "resolved",
    "hl7_condition_clinical_status_display": " Resolved",
    "hl7_condition_clinical_status_definition": "The subject is not presently experiencing the condition or situation and there is a negligible perceived risk of the condition or situation returning."
  }
]
```
