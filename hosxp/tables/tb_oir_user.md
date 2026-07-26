# `tb_oir_user`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| loginname | varchar(50) | NO | PRI |  |  |  |
| password | varchar(100) | YES |  | NULL |  |  |
| full_name | varchar(255) | YES |  | NULL |  |  |
| chang_password_datetime | datetime | YES |  | NULL |  |  |
| user_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | loginname | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
