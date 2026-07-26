# `operation_agent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_agent_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| agent_usage_text | varchar(200) | YES |  | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| charge_price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_opi_guid | opi_guid | no | 1 |
| operation_id | operation_id | no | 1 |
| PRIMARY | operation_agent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
