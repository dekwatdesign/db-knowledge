# `opi_time_freq_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_time_freq_list_id | int(11) | NO | PRI | 0 |  |  |
| time_code | varchar(10) | YES | MUL | NULL |  |  |
| frequency_code | varchar(10) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_freq_code | frequency_code | no | 1 |
| ix_unique | time_code | yes | 1 |
| ix_unique | frequency_code | yes | 2 |
| ix_unique_index | frequency_code | yes | 1 |
| ix_unique_index | time_code | yes | 2 |
| PRIMARY | opi_time_freq_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
