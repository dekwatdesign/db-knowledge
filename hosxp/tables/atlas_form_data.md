# `atlas_form_data`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| atlas_form_data_id | int(11) | NO | PRI | 0 |  |  |
| atlas_form_data | longtext | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| create_timestamp | datetime | YES |  | NULL |  |  |
| atlas_homevist_id | int(11) | YES |  | NULL |  |  |
| clinic | char(3) | YES |  | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |
| atlas_form_data_ai | longtext | YES |  | NULL |  |  |
| score_ai | int(11) | YES |  | NULL |  |  |
| atlas_form_type_id | int(11) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES | MUL | NULL |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_atl_idx_person_id | person_id | no | 1 |
| ix_atl_idx_person_visit_id | person_visit_id | no | 1 |
| PRIMARY | atlas_form_data_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
