# `health_med_service_medication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_service_medication_id | int(11) | NO | PRI | 0 |  |  |
| health_med_service_id | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| drugusage | varchar(9) | YES |  | NULL |  |  |
| sp_use | varchar(9) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| unitprice | double(15,3) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| print_sticker | char(1) | YES |  | NULL |  |  |
| health_med_medication_id | int(11) | YES |  | NULL |  |  |
| order_row_no | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_service_medication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
