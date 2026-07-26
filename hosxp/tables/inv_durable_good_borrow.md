# `inv_durable_good_borrow`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_borrow_id | int(11) | NO | PRI | 0 |  |  |
| durable_good_borrow_status | char(1) | YES |  | NULL |  |  |
| durable_good_borrow_urgency | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_borrow_date | date | YES |  | NULL |  |  |
| inv_durable_good_borrow_staff | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_borrow_reason | text | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| inv_dep_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_id | int(11) | YES |  | NULL |  |  |
| durable_good_borrow_lastupdate | datetime | YES |  | NULL |  |  |
| durable_good_return_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_borrow_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
