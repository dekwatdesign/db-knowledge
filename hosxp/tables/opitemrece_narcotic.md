# `opitemrece_narcotic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_narcotic_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| icode | char(7) | YES | MUL | NULL |  |  |
| order_qty | int(11) | YES |  | NULL |  |  |
| use_qty | double(15,3) | YES |  | NULL |  |  |
| use_unit_name | varchar(100) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| lot_no | varchar(100) | YES |  | NULL |  |  |
| batch_no | varchar(100) | YES |  | NULL |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |
| order_date | date | YES |  | NULL |  |  |
| order_note | text | YES |  | NULL |  |  |
| dispense_doctor_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_icode | icode | no | 1 |
| ix_opi_guid | opi_guid | yes | 1 |
| PRIMARY | opitemrece_narcotic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
