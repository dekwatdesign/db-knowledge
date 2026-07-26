# `beauty_team_staff`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_team_staff_id | int(11) | NO | PRI | 0 |  |  |
| beauty_team_staff_name | varchar(250) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_beauty_team_staff_name | beauty_team_staff_name | no | 1 |
| PRIMARY | beauty_team_staff_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
