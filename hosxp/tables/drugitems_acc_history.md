# `drugitems_acc_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_acc_history_id | int(11) | NO | PRI | 0 |  |  |
| icode | char(7) | YES | MUL | NULL |  |  |
| doctor_department_id | int(11) | YES |  | NULL |  |  |
| officer_id_1 | int(11) | YES |  | NULL |  |  |
| officer_id_2 | int(11) | YES |  | NULL |  |  |
| acc_approve_date | date | YES |  | NULL |  |  |
| acc_begin_date | date | YES |  | NULL |  |  |
| acc_finish_date | date | YES |  | NULL |  |  |
| drugitems_acc_disc_type_id | int(11) | YES |  | NULL |  |  |
| stop_date | date | YES |  | NULL |  |  |
| drugitems_stop_type_id | int(11) | YES |  | NULL |  |  |
| drugitems_regist_no | varchar(100) | YES |  | NULL |  |  |
| drugitems_acc_in_type_id | int(11) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| PRIMARY | drugitems_acc_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
