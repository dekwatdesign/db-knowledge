# `operation_disease_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_disease_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| disease_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| operation_id | operation_id | no | 1 |
| PRIMARY | operation_disease_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
