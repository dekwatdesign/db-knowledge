# `webform`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| webform_id | int(11) | NO | PRI | 0 |  |  |
| webform_name | varchar(250) | YES | UNI | NULL |  |  |
| webform_schema | longtext | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(50) | YES |  | NULL |  |  |
| webform_description | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_webform_name | webform_name | yes | 1 |
| PRIMARY | webform_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
