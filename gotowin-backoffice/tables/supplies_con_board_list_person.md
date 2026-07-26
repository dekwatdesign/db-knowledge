# `supplies_con_board_list_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| BOARD_GROUP_ID | varchar(11) | YES |  |  |  |  |
| HR_ID | varchar(10) | YES |  |  |  |  |
| HR_NAME | varchar(50) | YES |  |  |  |  |
| HR_POSITION | varchar(50) | YES |  |  |  |  |
| SUP_POSITION_ID | varchar(10) | YES |  |  |  |  |
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
