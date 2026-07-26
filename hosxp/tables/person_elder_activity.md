# `person_elder_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_elder_activity_id | int(11) | NO | PRI | 0 |  |  |
| activity_date | date | YES |  | NULL |  |  |
| person_elder_activity_type_id | int(11) | YES |  | NULL |  |  |
| person_elder_club_member_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_elder_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
