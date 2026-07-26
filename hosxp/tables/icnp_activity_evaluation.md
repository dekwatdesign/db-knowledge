# `icnp_activity_evaluation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icnp_activity_evaluation_id | int(11) | NO | PRI | 0 |  |  |
| icnp_activity_id | int(11) | YES |  | NULL |  |  |
| icnp_evaluation_id | int(11) | YES |  | NULL |  |  |
| icnp_activity_evaluation_value | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | icnp_activity_evaluation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
