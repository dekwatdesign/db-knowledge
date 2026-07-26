# `rx_queue_group_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_queue_group_list_id | int(11) | NO | PRI | 0 |  |  |
| rx_queue_group_id | int(11) | YES | MUL | NULL |  |  |
| min_med_qty | int(11) | YES |  | NULL |  |  |
| max_med_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | rx_queue_group_id | no | 1 |
| PRIMARY | rx_queue_group_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
