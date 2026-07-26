# `person_bc_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_screen_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| screen_date | date | YES |  | NULL |  |  |
| body_weight_kg | double(15,3) | YES |  | NULL |  |  |
| body_height_cm | double(15,3) | YES |  | NULL |  |  |
| first_menstrual_age | int(11) | YES |  | NULL |  |  |
| first_pregnant_age | int(11) | YES |  | NULL |  |  |
| direct_relative_cancer_person_count | int(11) | YES |  | NULL |  |  |
| breast_biopsy_test | char(1) | YES |  | NULL |  |  |
| breast_biopsy_test_result_text | text | YES |  | NULL |  |  |
| use_hrt_over_5_year | char(1) | YES |  | NULL |  |  |
| use_birth_control_pill | char(1) | YES |  | NULL |  |  |
| use_birth_control_pill_year | int(11) | YES |  | NULL |  |  |
| menopause_age | int(11) | YES |  | NULL |  |  |
| pregnant_count | int(11) | YES |  | NULL |  |  |
| min_4_month_breast_feed_child_count | int(11) | YES |  | NULL |  |  |
| mamogram_birads_result_integer | int(11) | YES |  | NULL |  |  |
| monthly_assessment_correct | char(1) | YES |  | NULL |  |  |
| self_assessment_correct | char(1) | YES |  | NULL |  |  |
| right_lymp_node_abnormal | char(1) | YES |  | NULL |  |  |
| left_lymp_node_abnormal | char(1) | YES |  | NULL |  |  |
| abnormal_point_count | int(11) | YES |  | NULL |  |  |
| entry_staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_bc_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
