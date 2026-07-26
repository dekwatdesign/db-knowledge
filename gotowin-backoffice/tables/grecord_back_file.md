# `grecord_back_file`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| FILE_NAME | varchar(100) | YES |  |  |  |  |
| BACK_ID | varchar(20) | YES |  |  |  |  |
| FILE_TYPE_ID | varchar(10) | YES |  |  |  |  |
| FILE | mediumblob | YES |  | NULL |  |  |
| FILE_SIZE | double | YES |  | NULL |  |  |
| FILE_TYPE | varchar(10) | YES |  |  |  |  |
| FILE_SIZE_MB | double | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
