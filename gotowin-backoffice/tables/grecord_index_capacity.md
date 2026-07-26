# `grecord_index_capacity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_ID | varchar(10) | YES |  |  |  |  |
| RECORD_CAPACITY_ID | varchar(10) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_index | ID | no | 1 |
| ix_index | RECORD_ID | no | 2 |
| ix_index | RECORD_CAPACITY_ID | no | 3 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
