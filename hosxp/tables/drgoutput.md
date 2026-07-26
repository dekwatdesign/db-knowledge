# `drgoutput`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| age | int(11) | YES |  | NULL |  |  |
| an | varchar(9) | YES | UNI | NULL |  |  |
| drg | char(3) | YES |  | NULL |  |  |
| dx | varchar(36) | YES |  | NULL |  |  |
| expmonth | datetime | YES |  | NULL |  |  |
| note | varchar(50) | YES |  | NULL |  |  |
| op | varchar(36) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an_unique | an | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
