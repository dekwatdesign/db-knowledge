# `rx_queue_waiting`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_queue_waiting_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| rx_queue_waiting_date | date | YES |  | NULL |  |  |
| call_datetime | datetime | YES |  | NULL |  |  |
| rx_queue_dispense_id | int(11) | YES | MUL | NULL |  |  |
| call_status | char(1) | YES |  | NULL |  |  |
| sound_status | char(1) | YES |  | NULL |  |  |
| repeat_status | char(1) | YES |  | NULL |  |  |
| rx_queue_disp_type_number | int(11) | YES |  | NULL |  |  |
| rx_queue_dispense_type_id | int(11) | YES | MUL | NULL |  |  |
| rx_queue_prefix | char(1) | YES |  | NULL |  |  |
| rx_queue_dispense_no | int(11) | YES |  | NULL |  |  |
| queue_str | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_rx_queue_dispense_id | rx_queue_dispense_id | no | 1 |
| ix_idx_rx_queue_dispense_type_id | rx_queue_dispense_type_id | no | 1 |
| PRIMARY | rx_queue_waiting_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
