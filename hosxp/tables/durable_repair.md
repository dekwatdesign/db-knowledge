# `durable_repair`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| durable_repair_id | int(11) | NO | PRI | 0 |  |  |
| durable_id | int(11) | YES |  | NULL |  |  |
| durable_repair_status_id | int(11) | YES |  | NULL |  |  |
| durable_repair_date | date | YES |  | NULL |  |  |
| durable_repair_bdate | date | YES |  | NULL |  |  |
| durable_repairer_id | int(11) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| durable_repair_staff | varchar(20) | YES |  | NULL |  |  |
| durable_repair_last_update | date | YES |  | NULL |  |  |
| durable_repair_price | double(15,2) | YES |  | NULL |  |  |
| durable_repair_desc | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | durable_repair_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
