# `tempball1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | YES | MUL | NULL |  |  |
| code | tinyint(4) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn_code_unique | code | yes | 1 |
| ix_vn_code_unique | vn | yes | 2 |
| vn_code_unique | vn | yes | 1 |
| vn_code_unique | code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
