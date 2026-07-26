# `moo_water`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moid | varchar(8) | NO | PRI |  |  |  |
| water_type | tinyint(4) | NO | PRI | 0 |  |  |
| water_creator | tinyint(4) | YES |  | NULL |  |  |
| water_status | tinyint(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| moid | moid | no | 1 |
| PRIMARY | moid | yes | 1 |
| PRIMARY | water_type | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
