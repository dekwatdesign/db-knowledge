# `infowork_job_descriptions`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| IWJOB_D_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| IWJD_NAME | varchar(255) | NO |  | NULL |  |  |
| IWJD_ACTIVE | tinyint(1) | NO |  | 1 |  |  |
| created_at | timestamp | YES |  | NULL |  |  |
| updated_at | timestamp | YES |  | NULL |  |  |
| IWJD_EXPECTED_RESULT | varchar(400) | NO |  | NULL |  |  |
| IWJD_POSITION | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | IWJOB_D_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
