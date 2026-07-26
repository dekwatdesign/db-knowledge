# `doctor_access_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_access_group_id | int(11) | NO | PRI | 0 |  |  |
| doctor_access_group_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_access_group_name | doctor_access_group_name | yes | 1 |
| PRIMARY | doctor_access_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
