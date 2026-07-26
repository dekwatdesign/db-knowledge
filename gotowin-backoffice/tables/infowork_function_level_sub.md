# `infowork_function_level_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FUNTION_LEVEL_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| FUNTION_LEVEL_ID | int | YES |  | NULL |  |  |
| FUNTION_LEVEL_SUB_NUMBER | varchar(20) | YES |  | NULL |  |  |
| FUNTION_LEVEL_SUB_DETAIL | varchar(600) | YES |  | NULL |  |  |
| ACTIVE | enum('True','Fales') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| TYPE_SCORE_ID | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FUNTION_LEVEL_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
