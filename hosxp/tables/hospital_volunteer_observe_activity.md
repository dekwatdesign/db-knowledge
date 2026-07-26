# `hospital_volunteer_observe_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_volunteer_observe_activity_id | int(11) | NO | PRI | 0 |  |  |
| hospital_volunteer_observe_activity_name | varchar(200) | YES |  | NULL |  |  |
| observe_begin_date | date | YES |  | NULL |  |  |
| observe_end_date | date | YES |  | NULL |  |  |
| observe_activity_detail_text | text | YES |  | NULL |  |  |
| hospital_profile_id | int(11) | YES |  | NULL |  |  |
| hospital_volunteer_observe_location_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_volunteer_observe_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
