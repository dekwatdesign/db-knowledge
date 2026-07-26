# `gbook_file_server`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SERVER_ID | varchar(11) | YES |  |  |  |  |
| SERVER_NAME | varchar(255) | YES |  |  |  |  |
| SERVER_PATH | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| File_SERVER_ID | int | NO | PRI | NULL | auto_increment |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | File_SERVER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
