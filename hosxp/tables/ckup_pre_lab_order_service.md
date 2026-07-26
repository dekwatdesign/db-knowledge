# `ckup_pre_lab_order_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_pre_lab_order_service_id | int(11) | NO | PRI | 0 |  |  |
| ckup_pre_lab_order_number | int(11) | YES | MUL | NULL |  |  |
| lab_order_type | varchar(15) | YES |  | NULL |  |  |
| lab_code | int(11) | YES |  | NULL |  |  |
| lab_name | varchar(250) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| ref_order_number | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_app_order_number | ckup_pre_lab_order_number | no | 1 |
| PRIMARY | ckup_pre_lab_order_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
