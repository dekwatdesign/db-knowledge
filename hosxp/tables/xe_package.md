# `xe_package`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_package_id | int(11) | NO | PRI | 0 |  |  |
| package_name | varchar(200) | YES | UNI | NULL |  |  |
| package_datetime | datetime | YES |  | NULL |  |  |
| package_zip | longblob | YES |  | NULL |  |  |
| package_bpl | longblob | YES |  | NULL |  |  |
| package_description | text | YES |  | NULL |  |  |
| instantiate_class | varchar(250) | YES |  | NULL |  |  |
| instantiate_parameter | varchar(250) | YES | MUL | NULL |  |  |
| package_bpl_md5 | varchar(100) | YES |  | NULL |  |  |
| package_user_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_instantiate_parameter | instantiate_parameter | no | 1 |
| ix_package_name | package_name | yes | 1 |
| PRIMARY | xe_package_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
