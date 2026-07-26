# `opi_doctor_finance_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_doctor_finance_list_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| total_pay_price | double(15,3) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| create_datetime | datetime | YES |  | NULL |  |  |
| modify_datetime | datetime | YES |  | NULL |  |  |
| clear_ok | char(1) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| public_plan | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_opi_guid | opi_guid | yes | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opi_doctor_finance_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
