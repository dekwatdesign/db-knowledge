# `icnp_cc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icnp_cc_id | int(11) | NO | PRI | 0 |  |  |
| icnp_cc_name | varchar(200) | YES | UNI | NULL |  |  |
| icnp_cc_group_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icnp_cc_name | icnp_cc_name | yes | 1 |
| PRIMARY | icnp_cc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
