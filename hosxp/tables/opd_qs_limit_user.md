# `opd_qs_limit_user`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_limit_user_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_limit_type_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_qs_limit_type_id | opd_qs_limit_type_id | no | 1 |
| ix_unique | opd_qs_limit_type_id | yes | 1 |
| ix_unique | staff | yes | 2 |
| PRIMARY | opd_qs_limit_user_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
