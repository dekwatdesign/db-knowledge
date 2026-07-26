# `rx_queue_dispense_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_queue_dispense_log_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(255) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| depcode | varchar(255) | YES |  | NULL |  |  |
| call_datetime | datetime | YES |  | NULL |  |  |
| call_status_name | varchar(255) | YES |  | NULL |  |  |
| call_slot_number | varchar(20) | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| rx_queue_disp_type_number | int(11) | YES |  | NULL |  |  |
| rx_queue_dispense_type_id | int(11) | YES | MUL | NULL |  |  |
| rx_queue_prefix | char(1) | YES |  | NULL |  |  |
| rx_queue_dispense_no | int(11) | YES |  | NULL |  |  |
| rx_queue_dispense_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_rx_queue_dispense_id | rx_queue_dispense_id | no | 1 |
| ix_idx_rx_queue_dispense_type_id | rx_queue_dispense_type_id | no | 1 |
| PRIMARY | rx_queue_dispense_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
