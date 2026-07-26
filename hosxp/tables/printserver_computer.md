# `printserver_computer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| printserver_name | varchar(10) | NO | PRI |  |  |  |
| computer_name | varchar(50) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_c_unique | printserver_name | no | 1 |
| ix_c_unique | computer_name | no | 2 |
| PRIMARY | computer_name | yes | 1 |
| PRIMARY | printserver_name | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
