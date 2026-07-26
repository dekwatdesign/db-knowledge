# `ovst_rx_queue_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_rx_queue_history_id | int(11) | NO | PRI | 0 |  |  |
| call_computer | varchar(50) | YES |  | NULL |  |  |
| call_datetime | datetime | YES | MUL | NULL |  |  |
| opd_dep_counter_id | int(11) | YES | MUL | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| current_queue_no | int(11) | YES |  | NULL |  |  |
| current_queue_no_end | int(11) | YES |  | NULL |  |  |
| current_queue_no_text | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_call_datetime | call_datetime | no | 1 |
| ix_opd_dep_counter_id | opd_dep_counter_id | no | 1 |
| PRIMARY | ovst_rx_queue_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
