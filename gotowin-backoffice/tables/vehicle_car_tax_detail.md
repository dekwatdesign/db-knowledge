# `vehicle_car_tax_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TAX_ID | int | NO | PRI | NULL | auto_increment |  |
| CAR_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| TAX_BILL | varchar(255) | YES |  | NULL |  |  |
| TAX_PRICE | varchar(100) | YES |  | NULL |  |  |
| TAX_BEGIN_DATE | date | YES |  | NULL |  |  |
| TAX_END_DATE | date | YES |  | NULL |  |  |
| TAX_PERSON_ID | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TAX_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
