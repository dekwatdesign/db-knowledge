# `doctor_order_print_head_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doph_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| doctor_order_print_date_time | datetime | YES | MUL | NULL |  |  |
| printed | char(1) | YES | MUL | NULL |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| sticker_count | int(11) | YES |  | NULL |  |  |
| print_server | varchar(50) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| ward | varchar(6) | YES | MUL | NULL |  |  |
| print_mode | int(11) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_print_datetime | doctor_order_print_date_time | no | 1 |
| ix_print_server | print_server | no | 1 |
| ix_print_server_printed | print_server | no | 1 |
| ix_print_server_printed | printed | no | 2 |
| ix_pttype_printed | pttype | no | 1 |
| ix_pttype_printed | printed | no | 2 |
| ix_pttype_printed_index | printed | no | 1 |
| ix_pttype_printed_index | pttype | no | 2 |
| ix_vn | vn | no | 1 |
| ix_ward | ward | no | 1 |
| PRIMARY | doph_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
