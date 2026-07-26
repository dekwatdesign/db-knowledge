# `pq_opdcard`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| request_date | date | YES | MUL | NULL |  |  |
| request_time | time | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| print | char(1) | YES | MUL | NULL |  |  |
| copy | tinyint(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |
| print | print | no | 1 |
| request_date | request_date | no | 1 |
| request_time | request_time | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
