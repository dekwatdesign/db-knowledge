# `infowork_job_person_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| IWJOB_PERSON_LIST_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| IWJOB_PERSON_ID | bigint | NO |  | NULL |  |  |
| IWKPI_ID | bigint | NO |  | NULL |  |  |
| IWJPL_NUMBER_1 | double(5,2) | NO |  | NULL |  |  |
| IWJPL_NUMBER_2 | double(5,2) | NO |  | NULL |  |  |
| IWJPL_NUMBER_3 | double(5,2) | NO |  | NULL |  |  |
| IWJPL_NUMBER_4 | double(5,2) | NO |  | NULL |  |  |
| IWJPL_NUMBER_5 | double(5,2) | NO |  | NULL |  |  |
| IWJPL_SCORE_A | double(5,2) | NO |  | NULL |  |  |
| IWJPL_WEIGHT_B | double(5,2) | NO |  | NULL |  |  |
| IWJPL_MULTIPLY_AB | double(9,2) | NO |  | NULL |  |  |
| IWJPL_TARGET | double(5,2) | NO |  | NULL |  |  |
| IWJPL_PERFORMANCE_10 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_11 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_12 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_1 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_2 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_3 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_4 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_5 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_6 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_7 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_8 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_9 | double(5,2) | YES |  | NULL |  |  |
| IWJPL_PERFORMANCE_AVG | double(5,2) | YES |  | NULL |  |  |
| created_at | timestamp | YES |  | NULL |  |  |
| updated_at | timestamp | YES |  | NULL |  |  |
| IWJPL_TYPE_CALCULATE | varchar(255) | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | IWJOB_PERSON_LIST_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
