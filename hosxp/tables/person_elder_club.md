# `person_elder_club`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_elder_club_id | int(11) | NO | PRI | 0 |  |  |
| person_elder_club_name | varchar(250) | YES |  | NULL |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| person_elder_club_type_id | int(11) | YES |  | NULL |  |  |
| director_person_id | int(11) | YES |  | NULL |  |  |
| contact_address | varchar(250) | YES |  | NULL |  |  |
| contact_phone | varchar(250) | YES |  | NULL |  |  |
| member_count | int(11) | YES |  | NULL |  |  |
| director_person_name | varchar(150) | YES |  | NULL |  |  |
| establish_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_elder_club_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
