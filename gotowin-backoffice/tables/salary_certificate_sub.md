# `salary_certificate_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CERSUB_ID | int | NO | PRI | NULL | auto_increment |  |
| CER_ID | int | YES |  | NULL |  |  |
| CERSUB_RECEIVE_ID | int | YES |  | NULL |  |  |
| CERSUB_RECEIVE_NAME | varchar(255) | YES |  | NULL |  |  |
| CERSUB_AMOUNT | varchar(50) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CERSUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
