# `webform_submission`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| webform_submission_id | int(11) | NO | PRI | 0 |  |  |
| webform_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| submission_datetime | datetime | YES |  | NULL |  |  |
| submission_json | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_webform_id | webform_id | no | 1 |
| PRIMARY | webform_submission_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
