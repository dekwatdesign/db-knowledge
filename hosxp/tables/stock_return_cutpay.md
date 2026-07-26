# `stock_return_cutpay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_return_cutpay_id | int(11) | NO | PRI | 0 |  |  |
| stock_return_cutpay_date | date | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| stock_return_cutpay_no | varchar(20) | YES |  | NULL |  |  |
| cutpay_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_return_cutpay_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
