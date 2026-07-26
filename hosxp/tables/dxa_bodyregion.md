# `dxa_bodyregion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_body_region_id | int(11) | NO | PRI | 0 |  |  |
| dxa_bodyregion_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dxa_bodyregion_name | dxa_bodyregion_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dxa_body_region_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
