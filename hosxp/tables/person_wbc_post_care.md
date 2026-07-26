# `person_wbc_post_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_wbc_post_care_id | int(11) | NO | PRI | 0 |  |  |
| person_wbc_id | int(11) | YES |  | NULL |  |  |
| care_date | date | YES |  | NULL |  |  |
| anc_preg_care_location_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| care_note | text | YES |  | NULL |  |  |
| care_number | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| person_wbc_post_care_result_type_id | int(11) | YES |  | NULL |  |  |
| person_nutrition_food_type_id | int(11) | YES |  | NULL |  |  |
| care_hospcode | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_wbc_post_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
