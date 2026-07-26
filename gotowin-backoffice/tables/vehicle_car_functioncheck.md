# `vehicle_car_functioncheck`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CAR_FUNCTIONCHECK_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| CAR_FUNCTIONCHECK_NAME | varchar(255) | YES |  | NULL |  |  |
| CAR_FUNCTIONCHECK_NAMEENG | varchar(255) | YES |  | NULL |  |  |
| CAR_FUNCTIONCHECK_STATUS | enum('True','False') | NO |  | NULL |  |  |
| updated_at | datetime | NO |  | NULL |  |  |
| created_at | datetime | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CAR_FUNCTIONCHECK_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "CAR_FUNCTIONCHECK_ID": 1,
    "CAR_FUNCTIONCHECK_NAME": "เช็ครถยนต์",
    "CAR_FUNCTIONCHECK_NAMEENG": "APPROVE",
    "CAR_FUNCTIONCHECK_STATUS": "False",
    "updated_at": "2024-12-27 13:43:18",
    "created_at": "2021-09-01 13:43:49"
  }
]
```
