# `xe_application_version`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_application_version_id | int(11) | NO | PRI | 0 |  |  |
| xe_application_id | int(11) | YES | MUL | NULL |  |  |
| xe_application_version_name | varchar(200) | YES |  | NULL |  |  |
| xe_application_version_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xe_application_id | xe_application_id | no | 1 |
| PRIMARY | xe_application_version_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
