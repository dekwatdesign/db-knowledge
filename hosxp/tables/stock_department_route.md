# `stock_department_route`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_department_route_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| route_to_department_id | int(11) | YES | MUL | NULL |  |  |
| icode | char(7) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_department_id | department_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_icode | icode | no | 1 |
| ix_route_to_id | route_to_department_id | no | 1 |
| ix_unique | department_id | yes | 1 |
| ix_unique | icode | yes | 2 |
| PRIMARY | stock_department_route_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
