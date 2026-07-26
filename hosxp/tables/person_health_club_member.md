# `person_health_club_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_health_club_member_id | int(11) | NO | PRI | 0 |  |  |
| person_health_club_id | int(11) | YES | MUL | NULL |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| person_remark | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_health_club_id | person_health_club_id | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_health_club_member_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
