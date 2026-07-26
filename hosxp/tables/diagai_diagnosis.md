# `diagai_diagnosis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diagai_diagnosis_id | varchar(36) | NO | PRI |  |  |  |
| diagai_diagnosis_name | varchar(200) | YES |  | NULL |  |  |
| diagai_diagnosis_icd | varchar(7) | YES | MUL | NULL |  |  |
| diagai_diagnosis_icdversion | varchar(20) | YES |  | NULL |  |  |
| diagai_diagnosis_snomedct | varchar(20) | YES |  | NULL |  |  |
| diagai_diagnosis_type | varchar(100) | YES |  | NULL |  |  |
| diagai_diagnosis_recordername | varchar(200) | YES |  | NULL |  |  |
| diagai_diagnosis_finalversion | char(1) | YES |  | NULL |  |  |
| diagai_encounter_id | int(11) | YES | MUL | NULL |  |  |
| diagai_diagnosis_recorder | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_diagai_diagnosis_diagai_diagnosis_icd_idx | diagai_diagnosis_icd | no | 1 |
| ix_diagai_diagnosis_diagai_encounter_id_idx | diagai_encounter_id | no | 1 |
| PRIMARY | diagai_diagnosis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
