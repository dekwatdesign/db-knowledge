# `person_chronic_visit_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_chronic_visit_clinic_id | int(11) | NO | PRI | 0 |  |  |
| person_chronic_visit_id | int(11) | YES |  | NULL |  |  |
| clinic | char(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_chronic_visit_clinic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
