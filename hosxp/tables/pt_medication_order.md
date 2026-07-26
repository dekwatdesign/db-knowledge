# `pt_medication_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_medication_order_id | int(11) | NO | PRI | 0 |  |  |
| medication_name | varchar(250) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| drugusage | varchar(10) | YES |  | NULL |  |  |
| sp_use | varchar(10) | YES |  | NULL |  |  |
| comment | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pt_medication_order_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
