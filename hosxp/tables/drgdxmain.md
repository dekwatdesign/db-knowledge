# `drgdxmain`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cc | smallint(6) | YES |  | NULL |  |  |
| definition | varchar(230) | YES |  | NULL |  |  |
| dg1 | varchar(5) | YES |  | NULL |  |  |
| drg | char(3) | YES |  | NULL |  |  |
| ds | smallint(6) | YES |  | NULL |  |  |
| h17 | smallint(6) | YES |  | NULL |  |  |
| l18 | smallint(6) | YES |  | NULL |  |  |
| memo | varchar(50) | YES |  | NULL |  |  |
| o_ | smallint(6) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
