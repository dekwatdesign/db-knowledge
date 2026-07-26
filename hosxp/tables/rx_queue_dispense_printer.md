# `rx_queue_dispense_printer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_queue_dispense_printer_id | int(11) | NO | PRI | 0 |  |  |
| rx_queue_printer_ipaddress | varchar(15) | YES |  | NULL |  |  |
| rx_queue_printer_port | varchar(5) | YES |  | NULL |  |  |
| rx_queue_dispense_type_id | int(11) | YES | MUL | NULL |  |  |
| rx_queue_printer_type | char(1) | YES |  | NULL |  |  |
| rx_queue_printer_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_rx_queue_dispense_type_id | rx_queue_dispense_type_id | no | 1 |
| PRIMARY | rx_queue_dispense_printer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
