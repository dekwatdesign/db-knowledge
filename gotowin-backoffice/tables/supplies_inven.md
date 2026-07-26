# `supplies_inven`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| INVEN_ID | int | NO | PRI | NULL | auto_increment |  |
| INVEN_NAME | varchar(100) | YES |  |  |  |  |
| INVEN_NAME_SHORT | varchar(15) | YES |  |  |  |  |
| INVEN_HR_ID | varchar(10) | YES |  |  |  | ผู้รับผิดชอบ |
| INVEN_LOCATION_ID | varchar(10) | YES |  |  |  |  |
| INVEN_ORDER_HR_ID | varchar(10) | YES |  |  |  |  |
| INVEN_WRITE_HR_ID | varchar(10) | YES |  |  |  |  |
| INVEN_BUY_HR_ID | varchar(10) | YES |  |  |  |  |
| INVEN_BUY_POSITION | varchar(100) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | INVEN_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
