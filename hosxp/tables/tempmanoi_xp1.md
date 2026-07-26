# `tempmanoi_xp1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(7) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| pttypeno | varchar(20) | YES | MUL | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |
| indate | date | YES |  | NULL |  |  |
| expiredate | date | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| cardid | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn_pttypeno_pttype_unique | hn | yes | 1 |
| hn_pttypeno_pttype_unique | pttypeno | yes | 2 |
| hn_pttypeno_pttype_unique | pttype | yes | 3 |
| ix_cid | cid | no | 1 |
| ix_hn_pttypeno_pttype_unique | hn | yes | 1 |
| ix_hn_pttypeno_pttype_unique | pttype | yes | 2 |
| ix_hn_pttypeno_pttype_unique | pttypeno | yes | 3 |
| ix_pttypeno | pttypeno | no | 1 |
| ix_pttypeno_pttype_unique | pttypeno | yes | 1 |
| ix_pttypeno_pttype_unique | pttype | yes | 2 |
| ix_pttypeno_pttype_unique | hn | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
