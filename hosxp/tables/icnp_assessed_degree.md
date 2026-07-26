# `icnp_assessed_degree`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icnp_assessed_degree_id | int(11) | NO | PRI | 0 |  |  |
| icnp_assessed_degree_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icnp_assessed_degree_name | icnp_assessed_degree_name | yes | 1 |
| PRIMARY | icnp_assessed_degree_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
