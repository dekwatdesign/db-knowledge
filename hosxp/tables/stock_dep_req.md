# `stock_dep_req`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_req_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_req_date | date | YES |  | NULL |  |  |
| source_department_id | int(11) | YES |  | NULL |  |  |
| dest_department_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_dep_req_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
