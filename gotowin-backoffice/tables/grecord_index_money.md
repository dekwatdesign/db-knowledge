# `grecord_index_money`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_ID | varchar(10) | YES |  |  |  |  |
| MONEY_ID | varchar(10) | YES |  |  |  |  |
| SUMDAY | decimal(10,2) | YES |  | NULL |  |  |
| SUMMONEY | decimal(10,2) | YES |  | NULL |  |  |
| SUMALL | decimal(10,2) | YES |  | NULL |  | ระดับ |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_index | ID | no | 1 |
| ix_index | RECORD_ID | no | 2 |
| ix_index | MONEY_ID | no | 3 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
