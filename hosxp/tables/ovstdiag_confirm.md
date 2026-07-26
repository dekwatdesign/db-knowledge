# `ovstdiag_confirm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_diag_id | int(11) | NO | PRI | 0 |  |  |
| confirm_staff | varchar(25) | YES |  | NULL |  |  |
| confirm_datetime | datetime | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
