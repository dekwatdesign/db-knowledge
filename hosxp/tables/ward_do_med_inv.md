# `ward_do_med_inv`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ward_do_med_inv_id | int(11) | NO | PRI | 0 |  |  |
| ward | varchar(4) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| comment | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ward | ward | no | 1 |
| ix_ward_icode | ward | yes | 1 |
| ix_ward_icode | icode | yes | 2 |
| PRIMARY | ward_do_med_inv_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
