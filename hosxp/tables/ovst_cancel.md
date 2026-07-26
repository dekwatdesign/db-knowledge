# `ovst_cancel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_cancel_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| cancel_date | date | YES |  | NULL |  |  |
| cancel_time | time | YES |  | NULL |  |  |
| cancel_staff | varchar(50) | YES |  | NULL |  |  |
| cancel_reason | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | ovst_cancel_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
