# `icnp_phenomena`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icnp_phenomena_id | int(11) | NO | PRI | 0 |  |  |
| icnp_phenomena_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icnp_phenomena_name | icnp_phenomena_name | yes | 1 |
| PRIMARY | icnp_phenomena_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
