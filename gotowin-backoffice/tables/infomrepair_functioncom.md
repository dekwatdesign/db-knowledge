# `infomrepair_functioncom`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FUNCT_REPCOM_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| FUNCT_REPCOM_CODE | varchar(255) | YES |  | NULL |  |  |
| FUNCT_REPCOM_NAME | varchar(255) | YES |  | NULL |  |  |
| FUNCT_REPCOM_STATUS | enum('True','False') | NO |  | True |  |  |
| updated_at | datetime | NO |  | NULL |  |  |
| created_at | datetime | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FUNCT_REPCOM_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
