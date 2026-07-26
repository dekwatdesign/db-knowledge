# `psy_assessment_strain_evaluate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_strain_evaluate_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_strain_evaluate_name | varchar(255) | YES |  | NULL |  |  |
| psy_assessment_strain_evaluate_min | int(11) | YES |  | NULL |  |  |
| psy_assessment_strain_evaluate_max | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_strain_evaluate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "psy_assessment_strain_evaluate_id": 1,
    "psy_assessment_strain_evaluate_name": "ความเครียดอยู่ในระดับต่ำกว่าเกณฑ์ปกติอย่างมาก",
    "psy_assessment_strain_evaluate_min": 0,
    "psy_assessment_strain_evaluate_max": 5,
    "hos_guid": null
  },
  {
    "psy_assessment_strain_evaluate_id": 2,
    "psy_assessment_strain_evaluate_name": "ความเครียดอยู่ในเกณฑ์ปกติ",
    "psy_assessment_strain_evaluate_min": 6,
    "psy_assessment_strain_evaluate_max": 17,
    "hos_guid": null
  },
  {
    "psy_assessment_strain_evaluate_id": 3,
    "psy_assessment_strain_evaluate_name": "ความเครียดอยู่ในระดับสูงกว่าปกติเล็กน้อย",
    "psy_assessment_strain_evaluate_min": 18,
    "psy_assessment_strain_evaluate_max": 25,
    "hos_guid": null
  },
  {
    "psy_assessment_strain_evaluate_id": 4,
    "psy_assessment_strain_evaluate_name": "ความเครียดอยู่ในระดับสูงกว่าปกติปานกลาง",
    "psy_assessment_strain_evaluate_min": 26,
    "psy_assessment_strain_evaluate_max": 29,
    "hos_guid": null
  },
  {
    "psy_assessment_strain_evaluate_id": 5,
    "psy_assessment_strain_evaluate_name": "ความเครียดอยู่ในระดับสูงกว่าปกติมาก",
    "psy_assessment_strain_evaluate_min": 30,
    "psy_assessment_strain_evaluate_max": 60,
    "hos_guid": null
  }
]
```
