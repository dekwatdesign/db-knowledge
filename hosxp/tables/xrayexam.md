# `xrayexam`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| iqty | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| xn | varchar(9) | YES |  | NULL |  |  |
| xside | varchar(50) | YES |  | NULL |  |  |
| xtime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
