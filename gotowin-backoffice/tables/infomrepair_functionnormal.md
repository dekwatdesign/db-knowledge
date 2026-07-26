# `infomrepair_functionnormal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FUNCT_REPNORMAL_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| FUNCT_REPNORMAL_CODE | varchar(255) | YES |  | NULL |  |  |
| FUNCT_REPNORMAL_NAME | varchar(255) | YES |  | NULL |  |  |
| FUNCT_REPNORMAL_STATUS | enum('True','False') | NO |  | True |  |  |
| updated_at | datetime | NO |  | NULL |  |  |
| created_at | datetime | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FUNCT_REPNORMAL_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
