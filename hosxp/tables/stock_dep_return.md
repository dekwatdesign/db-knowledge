# `stock_dep_return`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_return_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| stock_dep_return_date | date | YES |  | NULL |  |  |
| sp_status | varchar(200) | YES |  | NULL |  |  |
| sp_ok | char(1) | YES |  | NULL |  |  |
| stock_dep_return_complete_date | date | YES |  | NULL |  |  |
| stock_dep_return_complete | char(1) | YES |  | NULL |  |  |
| stock_officer_id | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| document_no | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dep_id | department_id | no | 1 |
| PRIMARY | stock_dep_return_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
