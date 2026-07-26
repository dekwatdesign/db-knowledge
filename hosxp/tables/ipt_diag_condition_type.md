# `ipt_diag_condition_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_diag_condition_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_diag_condition_type_name | varchar(200) | YES |  | NULL |  |  |
| ipt_diag_condition_type_code | varchar(15) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_diag_condition_type_code | ipt_diag_condition_type_code | no | 1 |
| PRIMARY | ipt_diag_condition_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
