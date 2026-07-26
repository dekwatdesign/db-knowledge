# `supply_request_receive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_request_receive_id | int(11) | NO | PRI | 0 |  |  |
| supply_request_receive_date | date | YES |  | NULL |  |  |
| supply_request_receive_staff | varchar(60) | YES |  | NULL |  |  |
| supply_request_receive_status | char(1) | YES |  | NULL |  |  |
| supply_request_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_request54 | supply_request_id | no | 1 |
| PRIMARY | supply_request_receive_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
