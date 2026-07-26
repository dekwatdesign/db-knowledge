# `village_community_activity_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_community_activity_type_id | int(11) | NO | PRI | 0 |  |  |
| village_community_activity_type_name | varchar(200) | YES | UNI | NULL |  |  |
| provis_comactivity_code | varchar(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_community_activity_type_name | village_community_activity_type_name | yes | 1 |
| PRIMARY | village_community_activity_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
