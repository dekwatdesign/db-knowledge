# `stock_request_officer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_request_officer_id | int(11) | NO | PRI | 0 |  |  |
| request_id | int(11) | YES | MUL | NULL |  |  |
| stock_committee_id | int(11) | YES |  | NULL |  |  |
| stock_officer_type_id | int(11) | YES |  | NULL |  |  |
| assign_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_request_id | request_id | no | 1 |
| PRIMARY | stock_request_officer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
