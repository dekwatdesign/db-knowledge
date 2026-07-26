# `person_home_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_home_care_id | int(11) | NO | PRI | 0 |  |  |
| house_id | int(11) | YES | MUL | NULL |  |  |
| visit_date | date | YES |  | NULL |  |  |
| visit_time | time | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| visit_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_house_id | house_id | no | 1 |
| PRIMARY | person_home_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
