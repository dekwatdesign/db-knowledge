# `operation_anes_oper_tmpl_i`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_oper_tmpl_i_id | int(11) | NO | PRI | 0 |  |  |
| operation_anes_oper_tmpl_id | int(11) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_anes_oper_tmpl_id | operation_anes_oper_tmpl_id | no | 1 |
| PRIMARY | operation_anes_oper_tmpl_i_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
