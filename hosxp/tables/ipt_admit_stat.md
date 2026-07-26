# `ipt_admit_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| admit_stat_id | int(11) | NO | PRI | 0 |  |  |
| ward | char(2) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| in_date | date | YES |  | NULL |  |  |
| in_time | time | YES |  | NULL |  |  |
| out_date | date | YES |  | NULL |  |  |
| out_time | time | YES |  | NULL |  |  |
| admdate | int(11) | YES |  | NULL |  |  |
| admit_hour | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | admit_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
