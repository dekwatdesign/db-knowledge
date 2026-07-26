# `rx_queue_dispense`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_queue_dispense_id | int(11) | NO | PRI | 0 |  |  |
| rx_queue_dispense_date | date | YES |  | NULL |  |  |
| rx_queue_dispense_time | time | YES |  | NULL |  |  |
| rx_queue_dispense_no | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| call_status | char(1) | YES |  | NULL |  |  |
| call_slot_number | varchar(20) | YES |  | NULL |  |  |
| call_datetime | datetime | YES |  | NULL |  |  |
| dispense_complete | char(1) | YES |  | NULL |  |  |
| rx_queue_dispense_type_id | int(11) | YES | MUL | NULL |  |  |
| rx_queue_disp_type_number | int(11) | YES |  | NULL |  |  |
| call_frist_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| machine_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_rx_queue_dispense_type_id | rx_queue_dispense_type_id | no | 1 |
| PRIMARY | rx_queue_dispense_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
