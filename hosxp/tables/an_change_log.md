# `an_change_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an_change_log_id | int(11) | NO | PRI | 0 |  |  |
| old_an | varchar(9) | YES |  | NULL |  |  |
| new_an | varchar(9) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| change_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | an_change_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
