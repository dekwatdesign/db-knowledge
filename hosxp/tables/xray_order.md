# `xray_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_order_number | int(11) | NO | PRI | 0 |  |  |
| xray_items_code | int(11) | NO | PRI | 0 |  |  |
| xray_order_result | varchar(250) | YES |  | NULL |  |  |
| xray_order_remark | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| confirm | char(1) | YES |  | NULL |  |  |
| xn | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | xray_order_number | yes | 1 |
| PRIMARY | xray_items_code | yes | 2 |
| xray_order_number | xray_order_number | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
