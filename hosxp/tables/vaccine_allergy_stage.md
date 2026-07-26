# `vaccine_allergy_stage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_allergy_stage_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_allergy_stage_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vaccine_allergy_stage_name | vaccine_allergy_stage_name | yes | 1 |
| PRIMARY | vaccine_allergy_stage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "vaccine_allergy_stage_id": 1,
    "vaccine_allergy_stage_name": "สังเกตุอาการ หลังฉีด"
  },
  {
    "vaccine_allergy_stage_id": 2,
    "vaccine_allergy_stage_name": "หลังจากออกจากโรงพยาบาล"
  }
]
```
