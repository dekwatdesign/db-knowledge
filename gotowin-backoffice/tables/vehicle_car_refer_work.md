# `vehicle_car_refer_work`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CARWORK_REFER_ID | int | NO | PRI | NULL | auto_increment |  |
| CARWORK_REFER_LOCATION_ID | varchar(255) | YES |  | NULL |  |  |
| CARWORK_REFER_DETAIL | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| REFER_ID | int | YES |  | NULL |  |  |
| CARWORK_CHECK | enum('true','false') | YES |  | false |  |  |
| CARWORK_COMMENT | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CARWORK_REFER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
