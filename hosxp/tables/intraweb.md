# `intraweb`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ip | varchar(20) | YES | UNI | NULL |  |  |
| command | varchar(50) | YES | MUL | NULL |  |  |
| data1 | varchar(50) | YES |  | NULL |  |  |
| data2 | varchar(50) | YES |  | NULL |  |  |
| data3 | varchar(50) | YES |  | NULL |  |  |
| data4 | varchar(50) | YES |  | NULL |  |  |
| done | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| command | command | no | 1 |
| ip_unique | ip | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
