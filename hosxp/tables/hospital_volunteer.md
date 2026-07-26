# `hospital_volunteer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_volunteer_id | int(11) | NO | PRI | 0 |  |  |
| volunteer_pname | varchar(50) | YES |  | NULL |  |  |
| volunteer_fname | varchar(50) | YES |  | NULL |  |  |
| volunteer_lname | varchar(50) | YES |  | NULL |  |  |
| volunteer_cid | varchar(13) | YES |  | NULL |  |  |
| volunteer_birthdate | date | YES |  | NULL |  |  |
| hospital_volunteer_position_id | int(11) | YES |  | NULL |  |  |
| hospital_profile_id | int(11) | YES |  | NULL |  |  |
| active_volunteer | char(1) | YES |  | NULL |  |  |
| active_budget | char(1) | YES |  | NULL |  |  |
| active_family_health | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| active_secondary_mother | char(1) | YES |  | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_volunteer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
