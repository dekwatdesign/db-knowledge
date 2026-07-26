# `operation_anes_invent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anes_invent_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| wait_save | char(1) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| sp_use | varchar(9) | YES |  | NULL |  |  |
| stock_department_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| micro_qty | double(15,1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| operation_id | operation_id | no | 1 |
| PRIMARY | anes_invent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
