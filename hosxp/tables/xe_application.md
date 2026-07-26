# `xe_application`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_application_id | int(11) | NO | PRI | 0 |  |  |
| xe_application_name | varchar(200) | YES | UNI | NULL |  |  |
| xe_application_update_type_id | int(11) | YES |  | NULL |  |  |
| xe_application_version_id | int(11) | YES |  | NULL |  |  |
| use_mirror_db | char(1) | YES |  | NULL |  |  |
| mirror_host | varchar(150) | YES |  | NULL |  |  |
| mirror_db | varchar(150) | YES |  | NULL |  |  |
| mirror_user | varchar(150) | YES |  | NULL |  |  |
| mirror_password | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xe_application_name | xe_application_name | yes | 1 |
| PRIMARY | xe_application_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
