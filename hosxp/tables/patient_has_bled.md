# `patient_has_bled`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_has_bled_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| has_bled_renal_dx | varchar(1) | YES |  | NULL |  |  |
| has_bled_liver_dx | char(1) | YES |  | NULL |  |  |
| has_bled_stroke | char(1) | YES |  | NULL |  |  |
| has_bled_major_bleed | char(1) | YES |  | NULL |  |  |
| has_bled_antiplatelet_or_nsaid | char(1) | YES |  | NULL |  |  |
| has_bled_alcohol_misuse | char(1) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_doctor | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_has_bled_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
