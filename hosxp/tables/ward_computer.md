# `ward_computer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ward_computer_id | int(11) | NO | PRI | 0 |  |  |
| computer_name | varchar(200) | YES | MUL | NULL |  |  |
| ward | varchar(4) | YES | MUL | NULL |  |  |
| allow_access | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni | computer_name | yes | 1 |
| ix_uni | ward | yes | 2 |
| ix_ward | ward | no | 1 |
| PRIMARY | ward_computer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
