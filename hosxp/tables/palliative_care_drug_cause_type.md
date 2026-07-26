# `palliative_care_drug_cause_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_drug_cause_type_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_drug_cause_type_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_drug_cause_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "palliative_care_drug_cause_type_id": 1,
    "palliative_care_drug_cause_type_name": "ระงับปวด",
    "hos_guid": null
  },
  {
    "palliative_care_drug_cause_type_id": 2,
    "palliative_care_drug_cause_type_name": "ระงับอาการเหนื่อยหอบ",
    "hos_guid": null
  },
  {
    "palliative_care_drug_cause_type_id": 3,
    "palliative_care_drug_cause_type_name": "ระงับอาการคลื่นใส้อาเจียน",
    "hos_guid": null
  },
  {
    "palliative_care_drug_cause_type_id": 4,
    "palliative_care_drug_cause_type_name": "ระงับอาการวิตกกังวล",
    "hos_guid": null
  },
  {
    "palliative_care_drug_cause_type_id": 5,
    "palliative_care_drug_cause_type_name": "ระงับอาการท้องผูก",
    "hos_guid": null
  },
  {
    "palliative_care_drug_cause_type_id": 6,
    "palliative_care_drug_cause_type_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
