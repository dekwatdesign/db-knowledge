# `salary_borrow_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BORROW_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| BORROW_ID | varchar(10) | YES |  | NULL |  |  |
| BORROW_SUB_TYPE | varchar(11) | YES |  |  |  |  |
| BORROW_SUB_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| BORROW_SUB_GROUP | varchar(255) | YES |  | NULL |  |  |
| BORROW_SUB_PICE | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BORROW_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
