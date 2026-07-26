# `xe_package_user`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_package_user_id | int(11) | NO | PRI | 0 |  |  |
| xe_user_type_id | int(11) | YES | MUL | NULL |  |  |
| xe_package_id | int(11) | YES |  | NULL |  |  |
| frame_class_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ti | xe_user_type_id | no | 1 |
| PRIMARY | xe_package_user_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
