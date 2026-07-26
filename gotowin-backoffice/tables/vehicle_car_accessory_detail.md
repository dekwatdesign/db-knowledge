# `vehicle_car_accessory_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| CAR_ID | int | NO |  | NULL |  |  |
| ACCESSORY_ID | varchar(150) | YES |  |  |  |  |
| ACCESSORY_AMOUNT | varchar(255) | YES |  |  |  |  |
| ACCESSORY_DATE | date | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| ACCESSORY_PERSON_ID | int | YES |  | NULL |  |  |

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
