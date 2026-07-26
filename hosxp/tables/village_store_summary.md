# `village_store_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_store_summary_id | int(11) | NO | PRI | 0 |  |  |
| bdg_year | int(11) | YES | UNI | NULL |  |  |
| store_owner_training_count | int(11) | YES |  | NULL |  |  |
| store_owner_training_target | int(11) | YES |  | NULL |  |  |
| store_owner_training_percent | double(15,3) | YES |  | NULL |  |  |
| store_food_sample_count | int(11) | YES |  | NULL |  |  |
| store_food_sample_target | int(11) | YES |  | NULL |  |  |
| store_food_sample_percent | double(15,3) | YES |  | NULL |  |  |
| store_food_si2_pass_count | int(11) | YES |  | NULL |  |  |
| store_food_si2_pass_percent | double(15,3) | YES |  | NULL |  |  |
| store_food_si2_nopass_count | int(11) | YES |  | NULL |  |  |
| store_food_si2_nopass_percent | double(15,3) | YES |  | NULL |  |  |
| store_pass_cfgt_count | int(11) | YES |  | NULL |  |  |
| store_pass_cfgt_target | int(11) | YES |  | NULL |  |  |
| store_pass_cfgt_percent | double(15,3) | YES |  | NULL |  |  |
| store_evaluate_cfgt_count | int(11) | YES |  | NULL |  |  |
| store_evaluate_cfgt_target | int(11) | YES |  | NULL |  |  |
| store_evaluate_cfgt_percent | double(15,3) | YES |  | NULL |  |  |
| store_health_menu_count | int(11) | YES |  | NULL |  |  |
| store_health_menu_target | int(11) | YES |  | NULL |  |  |
| store_health_menu_percent | double(15,3) | YES |  | NULL |  |  |
| store_5star_count | int(11) | YES |  | NULL |  |  |
| store_5star_target | int(11) | YES |  | NULL |  |  |
| store_5star_percent | double(15,3) | YES |  | NULL |  |  |
| store_noodle_standard_count | int(11) | YES |  | NULL |  |  |
| store_noodle_standard_target | int(11) | YES |  | NULL |  |  |
| store_noodle_standard_percent | double(15,3) | YES |  | NULL |  |  |
| store_hospital_cfgt_count | int(11) | YES |  | NULL |  |  |
| store_hospital_cfgt_target | int(11) | YES |  | NULL |  |  |
| store_hospital_cfgt_percent | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| store_pass_food_safety_count | int(11) | YES |  | NULL |  |  |
| store_pass_food_safety_target | int(11) | YES |  | NULL |  |  |
| store_pass_food_safety_percent | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bdg_year | bdg_year | yes | 1 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_store_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
