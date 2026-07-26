# `opd_qs_room_rx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_room_id | int(11) | NO | PRI | 0 |  |  |
| slot_prefix1 | char(1) | YES |  | NULL |  |  |
| slot_prefix2 | char(1) | YES |  | NULL |  |  |
| slot_prefix3 | char(1) | YES |  | NULL |  |  |
| slot_prefix4 | char(1) | YES |  | NULL |  |  |
| slot_prefix5 | char(1) | YES |  | NULL |  |  |
| rx_queue_group_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | opd_qs_room_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
