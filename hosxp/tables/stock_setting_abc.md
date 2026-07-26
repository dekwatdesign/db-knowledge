# `stock_setting_abc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_abc_id | int(11) | NO | PRI | 0 |  |  |
| value_a | int(11) | YES |  | NULL |  |  |
| value_b | int(11) | YES |  | NULL |  |  |
| value_c | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_uw | warehouse_id | yes | 1 |
| PRIMARY | stock_abc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
