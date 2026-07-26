# `patient_cancer_accessory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_accessory_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| pillow_type | varchar(30) | YES |  | NULL |  |  |
| pillow_sub_type | varchar(30) | YES |  | NULL |  |  |
| mask_new_status | varchar(1) | YES |  | NULL |  |  |
| rt_action_type | varchar(30) | YES |  | NULL |  |  |
| bolus_status | varchar(1) | YES |  | NULL |  |  |
| bolus_depth | int(11) | YES |  | NULL |  |  |
| swindle_tube_cc | int(11) | YES |  | NULL |  |  |
| hand_action_type | varchar(30) | YES |  | NULL |  |  |
| arm_action_type | varchar(30) | YES |  | NULL |  |  |
| leg_action_type | varchar(30) | YES |  | NULL |  |  |
| foam_support_type | varchar(30) | YES |  | NULL |  |  |
| ap_depth | int(11) | YES |  | NULL |  |  |
| field_count | int(11) | YES |  | NULL |  |  |
| film_count | int(11) | YES |  | NULL |  |  |
| film_lost | int(11) | YES |  | NULL |  |  |
| tech_note | text | YES |  | NULL |  |  |
| accessory_text | text | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| staff1 | varchar(15) | YES |  | NULL |  |  |
| staff2 | varchar(15) | YES |  | NULL |  |  |
| staff3 | varchar(15) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_accessory_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
