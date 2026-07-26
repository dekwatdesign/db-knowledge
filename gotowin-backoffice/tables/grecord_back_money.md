# `grecord_back_money`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| BACK_ID | varchar(20) | YES |  |  |  |  |
| MONEY_TYPE_ID | varchar(10) | YES |  |  |  |  |
| MONEY | decimal(10,2) | YES |  | NULL |  |  |
| DETAIL | varchar(100) | YES |  |  |  |  |
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
