# `vehicle_car_check_detail_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CHECK_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| CHECK_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| CHECK_CARE_ID | varchar(255) | YES |  | NULL |  |  |
| CHECK_CARE_RESULT | varchar(11) | YES |  | NULL |  |  |
| CHECK_CARE_MILE | varchar(255) | YES |  | NULL |  |  |
| CHECK_CARE_REMARK | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CHECK_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
