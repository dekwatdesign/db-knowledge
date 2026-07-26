# `infomrepair_functionmedical`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FUNCT_REPMEDICAL_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| FUNCT_REPMEDICAL_CODE | varchar(255) | YES |  | NULL |  |  |
| FUNCT_REPMEDICAL_NAME | varchar(255) | YES |  | NULL |  |  |
| FUNCT_REPMEDICAL_STATUS | enum('True','False') | NO |  | True |  |  |
| updated_at | datetime | NO |  | NULL |  |  |
| created_at | datetime | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FUNCT_REPMEDICAL_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
