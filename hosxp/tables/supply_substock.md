# `supply_substock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_substock_id | int(11) | NO | PRI | 0 |  |  |
| supply_substock_staff | int(11) | YES |  | NULL |  |  |
| supply_substock_date | int(11) | YES |  | NULL |  |  |
| supply_request_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_request57 | supply_request_id | no | 1 |
| PRIMARY | supply_substock_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
