# `rx_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | NO | PRI |  |  |  |
| review_staff | varchar(50) | YES |  | NULL |  |  |
| review_start_datetime | datetime | YES |  | NULL |  |  |
| review_finish_datetime | datetime | YES |  | NULL |  |  |
| rx_stat_date | date | YES | MUL | NULL |  |  |
| review_computer | varchar(50) | YES |  | NULL |  |  |
| dispense_staff | varchar(50) | YES |  | NULL |  |  |
| dispense_computer | varchar(50) | YES |  | NULL |  |  |
| dispense_datetime | datetime | YES |  | NULL |  |  |
| time_use_second | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rx_stat_date | rx_stat_date | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
