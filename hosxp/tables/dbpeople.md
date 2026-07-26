# `dbpeople`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| IDPP | int(11) | YES |  | NULL |  |  |
| DBYear | varchar(4) | YES |  | NULL |  |  |
| idhospital | varchar(5) | YES |  | NULL |  |  |
| G1M | int(11) | YES |  | NULL |  |  |
| G2M | int(11) | YES |  | NULL |  |  |
| G3M | int(11) | YES |  | NULL |  |  |
| G4M | int(11) | YES |  | NULL |  |  |
| G1W | int(11) | YES |  | NULL |  |  |
| G2W | int(11) | YES |  | NULL |  |  |
| G3W | int(11) | YES |  | NULL |  |  |
| G4W | int(11) | YES |  | NULL |  |  |
| Chk | int(11) | YES |  | NULL |  |  |
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
