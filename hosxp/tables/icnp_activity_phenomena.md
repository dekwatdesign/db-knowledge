# `icnp_activity_phenomena`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icnp_activity_phenomena_id | int(11) | NO | PRI | 0 |  |  |
| icnp_activity_id | int(11) | YES |  | NULL |  |  |
| icnp_phenomena_id | int(11) | YES |  | NULL |  |  |
| icnp_onset_date | date | YES |  | NULL |  |  |
| icnp_onset_time | time | YES |  | NULL |  |  |
| icnp_assessed_date | date | YES |  | NULL |  |  |
| icnp_assessed_time | time | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| icnp_assessed_status_id | int(11) | YES |  | NULL |  |  |
| icnp_assessed_degree_id | int(11) | YES |  | NULL |  |  |
| icnp_goal_degree_id | int(11) | YES |  | NULL |  |  |
| specific_phenomena_text | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | icnp_activity_phenomena_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
