# `icnp_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icnp_activity_id | int(11) | NO | PRI | 0 |  |  |
| icnp_activity_date | date | YES |  | NULL |  |  |
| icnp_activity_time | time | YES |  | NULL |  |  |
| ipd_periond_id | int(11) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | icnp_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
