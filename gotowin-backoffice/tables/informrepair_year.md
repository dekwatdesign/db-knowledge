# `informrepair_year`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| YEAR_ID | varchar(10) | NO | PRI |  |  |  |
| YEAR_NAME | varchar(255) | YES |  |  |  |  |
| DATE_BEGIN | date | YES |  | NULL |  |  |
| DATE_END | date | YES |  | NULL |  |  |
| ACTIVE | enum('True','False') | YES |  | False |  |  |
| DAY_PER_YEAR | int | YES |  | 10 |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | YEAR_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
