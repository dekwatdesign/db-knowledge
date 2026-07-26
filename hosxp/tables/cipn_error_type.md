# `cipn_error_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| error_code | varchar(10) | NO | PRI |  |  |  |
| error_name | varchar(250) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_error_name | error_name | yes | 1 |
| PRIMARY | error_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
