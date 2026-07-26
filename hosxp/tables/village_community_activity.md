# `village_community_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_community_activity_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| activity_start_date | date | YES |  | NULL |  |  |
| activity_end_date | date | YES |  | NULL |  |  |
| village_community_activity_type_id | int(11) | YES |  | NULL |  |  |
| doctor | varchar(25) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_community_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
