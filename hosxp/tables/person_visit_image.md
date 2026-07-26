# `person_visit_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_visit_image_id | int(11) | NO | PRI | 0 |  |  |
| person_visit_id | int(11) | YES | MUL | NULL |  |  |
| image | longblob | YES |  | NULL |  |  |
| image_number | int(11) | YES |  | NULL |  |  |
| visit_date | date | YES |  | NULL |  |  |
| visit_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_person_visit_image_person_visit_id_idx | person_visit_id | no | 1 |
| PRIMARY | person_visit_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
