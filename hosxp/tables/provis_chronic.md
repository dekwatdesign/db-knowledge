# `provis_chronic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_chronic_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| datedx | char(8) | YES |  | NULL |  |  |
| chronic | varchar(5) | YES |  | NULL |  |  |
| datedis | char(8) | YES |  | NULL |  |  |
| typedis | varchar(2) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | provis_chronic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
