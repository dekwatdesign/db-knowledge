# `village_club`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_club_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| village_club_name | varchar(200) | YES |  | NULL |  |  |
| club_std_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_id | village_id | no | 1 |
| PRIMARY | village_club_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
