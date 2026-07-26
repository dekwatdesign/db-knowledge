# `infowork_kpi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| IWKPI_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| IWKPI_NAME | varchar(255) | NO |  | NULL |  |  |
| IWKPI_NUMBER_1 | double(5,2) | NO |  | NULL |  |  |
| IWKPI_NUMBER_2 | double(5,2) | NO |  | NULL |  |  |
| IWKPI_NUMBER_3 | double(5,2) | NO |  | NULL |  |  |
| IWKPI_NUMBER_4 | double(5,2) | NO |  | NULL |  |  |
| IWKPI_NUMBER_5 | double(5,2) | NO |  | NULL |  |  |
| IWKPI_SCORE_A | double(5,2) | NO |  | NULL |  |  |
| IWKPI_WEIGHT_B | double(5,2) | NO |  | NULL |  |  |
| IWKPI_MULTIPLY_AB | double(9,2) | NO |  | NULL |  |  |
| IWKPI_TARGET | double(5,2) | NO |  | NULL |  |  |
| IWKPI_ACTIVE | tinyint(1) | NO |  | 1 |  |  |
| created_at | timestamp | YES |  | NULL |  |  |
| updated_at | timestamp | YES |  | NULL |  |  |
| IWKPI_TYPE_CALCULATE | varchar(255) | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | IWKPI_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
