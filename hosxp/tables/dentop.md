# `dentop`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | YES | MUL | NULL |  |  |
| ncount | int(11) | YES | MUL | NULL |  |  |
| op | varchar(4) | YES | MUL | NULL |  |  |
| rcount | int(11) | YES | MUL | NULL |  |  |
| scount | int(11) | YES | MUL | NULL |  |  |
| tcount | int(11) | YES | MUL | NULL |  |  |
| vstdate | datetime | YES | MUL | NULL |  |  |
| vsttime | datetime | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_vstdate_hn_vsttime | hn | no | 1 |
| ix_vstdate_hn_vsttime | op | no | 2 |
| ix_vstdate_hn_vsttime | vstdate | no | 3 |
| ix_vstdate_hn_vsttime | vsttime | no | 4 |
| ncount | ncount | no | 1 |
| op | op | no | 1 |
| rcount | rcount | no | 1 |
| scount | scount | no | 1 |
| tcount | tcount | no | 1 |
| vstdate | vstdate | no | 1 |
| vstdate_hn_vsttime | vstdate | no | 1 |
| vstdate_hn_vsttime | hn | no | 2 |
| vstdate_hn_vsttime | vsttime | no | 3 |
| vstdate_hn_vsttime | op | no | 4 |
| vsttime | vsttime | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
