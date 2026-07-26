# `infowork_job_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| IWJOB_PERSON_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| IWJOB_D_ID | bigint | NO |  | NULL |  |  |
| PERSON_ID | bigint | NO |  | NULL |  |  |
| IWJP_BUDGETYEAR | int | NO |  | NULL |  |  |
| IWJOB_PERSON_STATUS_ID | bigint | NO |  | NULL |  |  |
| IWJP_CREATED_ID | bigint | NO |  | NULL |  |  |
| IWJP_ASSESSOR_ID_1 | bigint | YES |  | NULL |  |  |
| IWJP_ASSESSOR_ID_2 | bigint | YES |  | NULL |  |  |
| created_at | timestamp | YES |  | NULL |  |  |
| updated_at | timestamp | YES |  | NULL |  |  |
| IWJOB_EXPECTED_RESULT | varchar(255) | NO |  | NULL |  |  |
| IWJOB_BE_INFORMED | tinyint(1) | NO |  | 0 |  |  |
| IWJOB_BE_INFORMED_DATE | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | IWJOB_PERSON_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
