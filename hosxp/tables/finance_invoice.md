# `finance_invoice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| finance_invoice_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| invoice_date | date | YES |  | NULL |  |  |
| invoice_time | time | YES |  | NULL |  |  |
| pttype | varchar(2) | YES | MUL | NULL |  |  |
| invoice_amount | double(15,3) | YES |  | NULL |  |  |
| computer_name | varchar(150) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_pttype | vn | no | 1 |
| ix_vn_pttype | pttype | no | 2 |
| ix_vn_pttype_index | pttype | no | 1 |
| ix_vn_pttype_index | vn | no | 2 |
| PRIMARY | finance_invoice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
