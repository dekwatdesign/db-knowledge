# `patient_cancer_setup_sheet`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_setup_sheet_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| Elevation_pin1 | varchar(100) | YES |  | NULL |  |  |
| Elevation_pin2 | varchar(100) | YES |  | NULL |  |  |
| head_cup | varchar(100) | YES |  | NULL |  |  |
| arm_rotation_rigth | varchar(100) | YES |  | NULL |  |  |
| arm_rotation_left | varchar(100) | YES |  | NULL |  |  |
| Upper_arm_length_rigth | varchar(100) | YES |  | NULL |  |  |
| Upper_arm_length_left | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_setup_sheet_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
