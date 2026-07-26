# `ipt_order_lock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| order_no | int(11) | NO | PRI | 0 |  |  |
| lock_computer | varchar(100) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lock_computer | lock_computer | no | 1 |
| PRIMARY | order_no | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
