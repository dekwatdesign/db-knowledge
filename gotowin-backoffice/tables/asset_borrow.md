# `asset_borrow`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| BR_DATE | date | YES |  | NULL |  |  |
| BR_HR_ID | varchar(30) | YES |  |  |  |  |
| BR_HR_NAME | varchar(100) | YES |  |  |  |  |
| BR_HR_POSITION | varchar(100) | YES |  |  |  |  |
| BR_HR_DEP_ID | varchar(11) | YES |  |  |  |  |
| BR_HR_DEP_NAME | varchar(100) | YES |  |  |  |  |
| BR_HR_DEP_SUB_SUB_ID | varchar(11) | YES |  |  |  |  |
| BR_HR_DEP_SUB_SUB_NAME | varchar(100) | YES |  |  |  |  |
| BR_BECOUSE_USE | varchar(255) | YES |  |  |  | วัตถุประสงค์ |
| BR_PHONE | varchar(30) | YES |  |  |  |  |
| BR_LOCATION | varchar(255) | YES |  |  |  |  |
| BR_RECEIVE_DATE | date | YES |  | NULL |  | วันที่จะมารับ |
| BR_RECEIVE_TIME | time | YES |  | NULL |  | เวลาจะมารับ |
| BR_BACK_DATE | date | YES |  | NULL |  |  |
| BR_BACK_TIME | time | YES |  | NULL |  |  |
| BR_LOCATION_USE_ID | varchar(11) | YES |  |  |  |  |
| BR_COMMENT | varchar(255) | YES |  |  |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| BR_STATUS | varchar(20) | YES |  |  |  |  |

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
