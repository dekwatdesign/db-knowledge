# `pq_rxorder`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| request_date | date | YES | MUL | NULL |  |  |
| request_time | time | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| print | char(1) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |
| print | print | no | 1 |
| request_date | request_date | no | 1 |
| request_time | request_time | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
