# `village_club_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_club_member_id | int(11) | NO | PRI | 0 |  |  |
| village_club_id | int(11) | YES | MUL | NULL |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| ix_village_club_id | village_club_id | no | 1 |
| PRIMARY | village_club_member_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
