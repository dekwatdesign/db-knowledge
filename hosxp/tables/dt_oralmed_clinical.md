# `dt_oralmed_clinical`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_oralmed_clinical_id | int(11) | NO | PRI | 0 |  |  |
| dt_oralmed_main_id | int(11) | YES |  | NULL |  |  |
| dt_oralmed_clinical_findtxt | varchar(255) | YES |  | NULL |  |  |
| dt_oralmed_clinical_radiotxt | varchar(255) | YES |  | NULL |  |  |
| dt_oralmed_clinical_labochk | varchar(30) | YES |  | NULL |  |  |
| dt_oralmed_clinical_diagnosis | varchar(255) | YES |  | NULL |  |  |
| dt_oralmed_clinical_final | varchar(255) | YES |  | NULL |  |  |
| dt_oralmed_clinical_other | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_oralmed_clinical_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
