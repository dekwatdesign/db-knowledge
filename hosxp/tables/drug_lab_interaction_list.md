# `drug_lab_interaction_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_lab_interaction_list_id | int(11) | NO | PRI | 0 |  |  |
| drug_lab_interaction_id | int(11) | YES |  | NULL |  |  |
| lab_items_code | int(11) | YES |  | NULL |  |  |
| interaction_text | text | YES |  | NULL |  |  |
| drug_lab_criteria_type_id | int(11) | YES |  | NULL |  |  |
| ref_value | double(15,3) | YES |  | NULL |  |  |
| ref_value_min | double(15,3) | YES |  | NULL |  |  |
| ref_value_max | double(15,3) | YES |  | NULL |  |  |
| total_mg | double(15,4) | YES |  | NULL |  |  |
| drug_lab_dose_chk_type_id | int(11) | YES |  | NULL |  |  |
| check_history | char(1) | YES |  | NULL |  |  |
| max_history_day | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | drug_lab_interaction_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
