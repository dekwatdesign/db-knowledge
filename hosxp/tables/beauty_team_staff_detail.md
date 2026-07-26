# `beauty_team_staff_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_team_staff_detail_id | int(11) | NO | PRI | 0 |  |  |
| beauty_team_staff_id | int(11) | YES | MUL | NULL |  |  |
| beauty_staff_position_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_beauty_team_staff_detail_beauty_team_staff_id | beauty_team_staff_id | no | 1 |
| PRIMARY | beauty_team_staff_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
