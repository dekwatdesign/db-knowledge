# `patient_med_profile_data`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_med_profile_data_id | int(11) | NO | PRI | 0 |  |  |
| patient_med_profile_id | int(11) | YES | MUL | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| usage_code | varchar(10) | YES |  | NULL |  |  |
| frequency_code | varchar(10) | YES |  | NULL |  |  |
| time_code | varchar(10) | YES |  | NULL |  |  |
| usage_unit_code | varchar(10) | YES |  | NULL |  |  |
| dispense_dose | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_profile_id | patient_med_profile_id | no | 1 |
| PRIMARY | patient_med_profile_data_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
