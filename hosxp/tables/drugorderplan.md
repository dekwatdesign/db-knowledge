# `drugorderplan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | char(7) | YES |  | NULL |  |  |
| period1 | int(11) | YES |  | NULL |  |  |
| period2 | int(11) | YES |  | NULL |  |  |
| period3 | int(11) | YES |  | NULL |  |  |
| period4 | int(11) | YES |  | NULL |  |  |
| planyear | datetime | YES |  | NULL |  |  |
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
