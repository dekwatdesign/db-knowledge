# `tb_nhso_token`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| user_id | varchar(15) | NO | PRI |  |  |  |
| smctoken | varchar(50) | NO | PRI |  |  |  |
| log_datetime | datetime | YES |  | NULL |  |  |
| token_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | user_id | yes | 1 |
| PRIMARY | smctoken | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
