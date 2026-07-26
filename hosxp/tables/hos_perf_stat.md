# `hos_perf_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_perf_stat_id | int(11) | NO | PRI | 0 |  |  |
| perf_key | varchar(30) | YES | MUL | NULL |  |  |
| perf_date | date | YES | MUL | NULL |  |  |
| perf_hour | int(11) | YES |  | NULL |  |  |
| perf_minute | int(11) | YES |  | NULL |  |  |
| perf_value | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_perf_key_date | perf_key | no | 1 |
| ix_perf_key_date | perf_date | no | 2 |
| ix_perf_key_date_index | perf_date | no | 1 |
| ix_perf_key_date_index | perf_key | no | 2 |
| PRIMARY | hos_perf_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
