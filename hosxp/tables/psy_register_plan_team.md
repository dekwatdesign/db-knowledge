# `psy_register_plan_team`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_plan_team_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_plan_team_doctor | varchar(10) | YES | MUL | NULL |  |  |
| psy_register_plan_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref5278 | psy_register_plan_id | no | 1 |
| ix_Ref6177 | psy_register_plan_team_doctor | no | 1 |
| PRIMARY | psy_register_plan_team_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
