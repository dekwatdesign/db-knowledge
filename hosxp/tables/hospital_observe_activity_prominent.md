# `hospital_observe_activity_prominent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_observe_activity_prominent_id | int(11) | NO | PRI | 0 |  |  |
| hospital_observe_activity_id | int(11) | YES | MUL | NULL |  |  |
| hospital_observe_activity_prominent_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_observe_activity_id | hospital_observe_activity_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_observe_activity_prominent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
