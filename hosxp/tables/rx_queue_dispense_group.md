# `rx_queue_dispense_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_queue_dispense_group_id | int(11) | NO | PRI | 0 |  |  |
| rx_queue_dispense_type_id | int(11) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| pt_subtype | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_rx_queue_dispense_type_id | rx_queue_dispense_type_id | no | 1 |
| PRIMARY | rx_queue_dispense_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
