# `communityactivity_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| community_activity_service_id | int(11) | NO | PRI | 0 |  |  |
| community_activity_service_date_start | date | YES |  | NULL |  |  |
| community_activity_service_date_finish | date | YES |  | NULL |  |  |
| community_activity_service_date_entry | date | YES |  | NULL |  |  |
| doctor | varchar(25) | YES |  | NULL |  |  |
| community_activity_service_tambon_id | char(2) | YES |  | NULL |  |  |
| community_activity_service_moo | char(20) | YES |  | NULL |  |  |
| provis_comactivity_code | char(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | community_activity_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
