# `lndy_cloth_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_list_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_wash_rec_list_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_list_status | char(2) | YES |  | NULL |  |  |
| lndy_cloth_list_qty | int(11) | YES |  | NULL |  |  |
| lndy_cloth_list_left_qty | int(11) | YES |  | NULL |  |  |
| lndy_cloth_list_note | char(40) | YES |  | NULL |  |  |
| lndy_cloth_list_transaction | datetime | YES |  | NULL |  |  |
| lndy_cloth_deliver_detail_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_warehouse_id | int(11) | YES |  | NULL |  |  |
| lndy_cloth_fix_receive_list_id | int(11) | YES |  | NULL |  |  |
| lndy_cloth_list_type_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_fix_req_list_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_req_list_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_request_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_freq_list_id | lndy_cloth_fix_req_list_id | no | 1 |
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_lndy_cloth_wash_req_list_id | lndy_cloth_wash_req_list_id | no | 1 |
| ix_Reflndy_cloth_deliver_detail12 | lndy_cloth_deliver_detail_id | no | 1 |
| ix_Reflndy_cloth_list_type24 | lndy_cloth_list_type_id | no | 1 |
| ix_Reflndy_cloth_wash_rec_list42 | lndy_cloth_wash_rec_list_id | no | 1 |
| ix_Reflndy_cloth_wash_request26 | lndy_cloth_wash_request_id | no | 1 |
| PRIMARY | lndy_cloth_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
