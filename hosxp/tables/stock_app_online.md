# `stock_app_online`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computer_name | varchar(200) | NO | PRI |  |  |  |
| online_datetime | datetime | YES | MUL | NULL |  |  |
| version_name | varchar(200) | YES |  | NULL |  |  |
| user_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_online_datetime | online_datetime | no | 1 |
| PRIMARY | computer_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
