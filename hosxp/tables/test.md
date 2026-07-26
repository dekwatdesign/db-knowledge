# `test`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| field1 | varchar(38) | YES |  | NULL |  |  |
| x | tinyint(4) | YES |  | NULL |  |  |
| id | int(11) | NO | PRI | 0 |  |  |
| d1 | double(15,3) | YES |  | NULL |  |  |
| t1 | date | YES |  | NULL |  |  |
| t2 | time | YES |  | NULL |  |  |
| t3 | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
