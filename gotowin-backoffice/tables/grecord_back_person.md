# `grecord_back_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| BACK_ID | varchar(10) | YES | MUL |  |  |  |
| PERSON_ID | varchar(100) | YES | MUL |  |  |  |
| PERSON_FULLNAME | varchar(100) | YES |  |  |  |  |
| PERSON_POSITION | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_BACK_ID | BACK_ID | no | 1 |
| IX_ID | ID | no | 1 |
| IX_PERSON_ID | PERSON_ID | no | 1 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
