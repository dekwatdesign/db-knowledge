# `officer_stock_role`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_stock_role_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| stock_user_role_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_id | officer_id | no | 1 |
| PRIMARY | officer_stock_role_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
