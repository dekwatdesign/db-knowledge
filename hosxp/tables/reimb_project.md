# `reimb_project`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reimb_project_id | int(11) | NO | PRI | 0 |  |  |
| reimb_project_name | varchar(200) | YES | UNI | NULL |  |  |
| inscl_code | varchar(5) | YES |  | NULL |  |  |
| project_active | char(1) | YES |  | NULL |  |  |
| project_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_reimb_project_name | reimb_project_name | yes | 1 |
| PRIMARY | reimb_project_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
