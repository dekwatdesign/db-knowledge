# `psy_register_icd10_subgroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_icd10_subgroup_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_icd10_subgroup_name | varchar(255) | YES |  | NULL |  |  |
| psy_register_icd10_subgroup_icd10 | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_register_icd10_subgroup_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psy_register_icd10_subgroup_id": 1,
    "psy_register_icd10_subgroup_name": "โรคจิตเภท",
    "psy_register_icd10_subgroup_icd10": "(F200-F29)",
    "hos_guid": null
  },
  {
    "psy_register_icd10_subgroup_id": 2,
    "psy_register_icd10_subgroup_name": "โรควิตกกังวล",
    "psy_register_icd10_subgroup_icd10": "(F400-F489)",
    "hos_guid": null
  },
  {
    "psy_register_icd10_subgroup_id": 3,
    "psy_register_icd10_subgroup_name": "โรคซึมเศร้า",
    "psy_register_icd10_subgroup_icd10": "(F300-F399)",
    "hos_guid": null
  },
  {
    "psy_register_icd10_subgroup_id": 4,
    "psy_register_icd10_subgroup_name": "ภาวะปัญญาอ่อน",
    "psy_register_icd10_subgroup_icd10": "(F700-F799)",
    "hos_guid": null
  },
  {
    "psy_register_icd10_subgroup_id": 5,
    "psy_register_icd10_subgroup_name": "ภาวะออทิสติก",
    "psy_register_icd10_subgroup_icd10": "(F840-F841)",
    "hos_guid": null
  },
  {
    "psy_register_icd10_subgroup_id": 6,
    "psy_register_icd10_subgroup_name": "โรคสมาธิสั้น",
    "psy_register_icd10_subgroup_icd10": "(F900-F909)",
    "hos_guid": null
  },
  {
    "psy_register_icd10_subgroup_id": 7,
    "psy_register_icd10_subgroup_name": "ภาวะบกพร่องทางการเรียนรู้",
    "psy_register_icd10_subgroup_icd10": "(F80-F89)",
    "hos_guid": null
  },
  {
    "psy_register_icd10_subgroup_id": 8,
    "psy_register_icd10_subgroup_name": "Dementia",
    "psy_register_icd10_subgroup_icd10": "(F00-F03)",
    "hos_guid": null
  }
]
```
