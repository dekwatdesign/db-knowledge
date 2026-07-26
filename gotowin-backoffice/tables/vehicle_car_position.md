# `vehicle_car_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CAR_POSITION_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| POSITION_ID | varchar(11) | YES |  | NULL |  |  |
| POSITION_NAME | varchar(255) | YES |  | NULL |  |  |
| CAR_ID | varchar(11) | YES |  | NULL |  |  |
| CAR_REG | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| ARTICLE_ID | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CAR_POSITION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
