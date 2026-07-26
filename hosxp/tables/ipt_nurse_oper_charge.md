# `ipt_nurse_oper_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_nurse_oper_charge_id | int(11) | NO | PRI | 0 |  |  |
| nurse_oper_id | int(11) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | nurse_oper_id | no | 1 |
| PRIMARY | ipt_nurse_oper_charge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
