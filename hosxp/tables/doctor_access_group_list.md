# `doctor_access_group_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_access_group_list_id | int(11) | NO | PRI | 0 |  |  |
| doctor_access_group_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_gid | doctor_access_group_id | no | 1 |
| PRIMARY | doctor_access_group_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
