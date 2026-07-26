# `supervision_role`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supervision_role_id | int(11) | NO | PRI | 0 |  |  |
| supervision_role_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_supervision_role_name | supervision_role_name | yes | 1 |
| PRIMARY | supervision_role_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
