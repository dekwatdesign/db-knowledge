# `stock_sql_index_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sql_md5 | varchar(50) | NO | PRI |  |  |  |
| sql_text | text | YES |  | NULL |  |  |
| active_form | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | sql_md5 | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
