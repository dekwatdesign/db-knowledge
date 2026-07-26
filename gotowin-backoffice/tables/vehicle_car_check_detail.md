# `vehicle_car_check_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CHECK_ID | int | NO | PRI | NULL | auto_increment |  |
| CAR_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| CHECK_DATE | date | YES |  | NULL |  |  |
| CHECK_TIME_BIGIN | time | YES |  | NULL |  |  |
| CHECK_TIME_END | time | YES |  | NULL |  |  |
| CHECK_LEADER_ID | varchar(10) | YES |  | NULL |  |  |
| CHECK_LEADER_NAME | varchar(255) | YES |  | NULL |  |  |
| CHECK_CAR_TYPE | int | YES |  | NULL |  |  |
| CHECK_COMMENT | varchar(255) | YES |  | NULL |  |  |
| CHECK_PERSON_ID | int | YES |  | NULL |  |  |
| CHECK_STATUS | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CHECK_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
