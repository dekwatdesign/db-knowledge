# `stock_department_item_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_item_level_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| min_level | int(11) | YES |  | NULL |  |  |
| max_level | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| status_automax | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_department_id | item_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | department_id | yes | 1 |
| ix_unique | item_id | yes | 2 |
| PRIMARY | stock_dep_item_level_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
