# `vehicle_car_fanciness`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FANCINESS_ID | int | NO | PRI | NULL | auto_increment |  |
| FANCINESS_RESERRVE_ID | varchar(10) | YES |  | NULL |  |  |
| FANCINESS_SCORE | varchar(255) | YES |  | NULL |  |  |
| FANCINESS_REMARK | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| FANCINESS_PERSON_ID | int | YES |  | NULL |  |  |
| FANCINESS_DATE | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FANCINESS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
