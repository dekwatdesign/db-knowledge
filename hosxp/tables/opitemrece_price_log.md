# `opitemrece_price_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_price_log_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| new_price | double(15,3) | YES |  | NULL |  |  |
| old_price | double(15,3) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_computer | varchar(100) | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| vnan | varchar(12) | YES | MUL | NULL |  |  |
| order_no | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | no | 1 |
| ix_vnan | vnan | no | 1 |
| ix_vnan_orderno | order_no | no | 1 |
| ix_vnan_orderno | vnan | no | 2 |
| PRIMARY | opitemrece_price_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
