# `palliative_care_quality_of_life_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_quality_of_life_treatment_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_quality_of_life_treatment_capability | int(11) | YES |  | NULL |  |  |
| palliative_care_quality_of_life_treatment_side_effect | int(11) | YES |  | NULL |  |  |
| palliative_care_quality_of_life_treatment_fuck | int(11) | YES |  | NULL |  |  |
| palliative_care_quality_of_life_treatment_life_shot | int(11) | YES |  | NULL |  |  |
| palliative_care_quality_of_life_treatment_life_long | int(11) | YES |  | NULL |  |  |
| palliative_care_home_visit_id | int(11) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_quality_of_life_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
