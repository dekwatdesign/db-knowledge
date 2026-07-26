# `hsk_pharmacy_reg_highalertdrug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| an | int(9) | YES | MUL | NULL |  |  |
| hn | int(9) | YES | MUL | NULL |  |  |
| icode | int(5) | YES | MUL | NULL |  |  |
| med_plan_number | int(10) | YES | MUL | NULL |  |  |
| dname | varchar(100) | YES |  | NULL |  |  |
| dshortlist | varchar(255) | YES |  | NULL |  |  |
| order_day | date | YES |  | NULL |  |  |
| lab_day1 | date | YES | MUL | NULL |  |  |
| lab_day2 | date | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| icode | icode | no | 1 |
| lab_day1 | lab_day1 | no | 1 |
| lab_day2 | lab_day2 | no | 1 |
| med_plan_number | med_plan_number | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
