# `psy_home_visit_team`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_home_visit_team_id | int(11) | NO | PRI | 0 |  |  |
| psy_home_visit_team_doctor | varchar(255) | YES | MUL | NULL |  |  |
| psy_home_visit_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref6185 | psy_home_visit_team_doctor | no | 1 |
| ix_Ref6287 | psy_home_visit_id | no | 1 |
| PRIMARY | psy_home_visit_team_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
