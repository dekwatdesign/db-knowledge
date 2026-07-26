# `operation_anes_charge_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_charge_list_id | int(11) | NO | PRI | 0 |  |  |
| operation_anes_charge_id | int(11) | YES | MUL | NULL |  |  |
| operation_anes_oper_id | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anes_charge_id | operation_anes_charge_id | no | 1 |
| PRIMARY | operation_anes_charge_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
