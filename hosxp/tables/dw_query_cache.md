# `dw_query_cache`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cache_md5 | varchar(100) | NO | PRI |  |  |  |
| cache_type_id | int(11) | YES |  | NULL |  |  |
| cache_result | double(15,3) | YES |  | NULL |  |  |
| cache_datetime | datetime | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cd | cache_datetime | no | 1 |
| PRIMARY | cache_md5 | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
