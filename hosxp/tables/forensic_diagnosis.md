# `forensic_diagnosis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_diagnosis_id | int(11) | NO | PRI | 0 |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| diagtype | char(2) | YES |  | NULL |  |  |
| forensic_diagnosis_note | varchar(255) | YES |  | NULL |  |  |
| forensic_diagnosis_date | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| forensic_death_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refforensic_death33 | forensic_death_id | no | 1 |
| PRIMARY | forensic_diagnosis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
