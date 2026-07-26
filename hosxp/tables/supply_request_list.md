# `supply_request_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_request_list_id | int(11) | NO | PRI | 0 |  |  |
| supply_request_list_qty | int(11) | YES |  | NULL |  |  |
| supply_request_list_complete | char(1) | YES |  | NULL |  |  |
| supply_request_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_request44 | supply_request_id | no | 1 |
| PRIMARY | supply_request_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
