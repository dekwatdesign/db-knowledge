# `stock_supplier_agent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supplier_agent_id | int(11) | NO | PRI | 0 |  |  |
| supplier_id | int(11) | YES | MUL | NULL |  |  |
| supplier_agent_name | varchar(150) | YES |  | NULL |  |  |
| supplier_agent_phone | varchar(150) | YES |  | NULL |  |  |
| supplier_agent_detail | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_supplier_agent_type_id | int(11) | YES |  | NULL |  |  |
| supplier_agent_position | varchar(100) | YES |  | NULL |  |  |
| image_data | blob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | supplier_agent_id | yes | 1 |
| supplier_id | supplier_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
