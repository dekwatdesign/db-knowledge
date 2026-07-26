# `stock_vendor_emp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_emp_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_emp_name | varchar(150) | YES | MUL | NULL |  |  |
| stock_vendor_emp_position | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_emp_phone | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_emp_note | varchar(250) | YES |  | NULL |  |  |
| stock_vendor_emp_email | varchar(200) | YES |  | NULL |  |  |
| stock_vendor_emp_mobile | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_emp_nick | varchar(50) | YES |  | NULL |  |  |
| stock_vendor_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_emp_update | datetime | YES |  | NULL |  |  |
| first_contact_date | date | YES |  | NULL |  |  |
| last_contact_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | stock_vendor_emp_name | no | 1 |
| PRIMARY | stock_vendor_emp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
