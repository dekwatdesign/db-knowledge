# `lndy_cloth_wash_req_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_wash_req_list_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_wash_req_list_qty | int(11) | YES |  | NULL |  |  |
| lndy_cloth_wash_request_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_send_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_equipment_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_req_lot_begin | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_wash_req_lot_last | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_sticker_print | char(5) | YES |  | NULL |  |  |
| lndy_cloth_wash_request_lot | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_request_exp | date | YES |  | NULL |  |  |
| lndy_cloth_wash_req_rec_date | date | YES |  | NULL |  |  |
| lndy_cloth_draw_list_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_package_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_Reflndy_cloth_draw_list19 | lndy_cloth_draw_list_id | no | 1 |
| ix_Reflndy_cloth_equipment57 | lndy_cloth_equipment_id | no | 1 |
| ix_Reflndy_cloth_wash_package46 | lndy_cloth_wash_package_id | no | 1 |
| ix_Reflndy_cloth_wash_request16 | lndy_cloth_wash_request_id | no | 1 |
| ix_Reflndy_cloth_wash_send28 | lndy_cloth_wash_send_id | no | 1 |
| PRIMARY | lndy_cloth_wash_req_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
