# `icnp_phenomena_factor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icnp_phenomena_factor_id | int(11) | NO | PRI | 0 |  |  |
| icnp_related_factor_id | int(11) | YES |  | NULL |  |  |
| icnp_phenomena_factor_value | varchar(200) | YES |  | NULL |  |  |
| icnp_activity_phenomena_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | icnp_phenomena_factor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
