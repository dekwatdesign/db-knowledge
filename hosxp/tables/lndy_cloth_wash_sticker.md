# `lndy_cloth_wash_sticker`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_wash_sticker_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_w_sticker_no | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_wash_rq_list_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_request_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_w_sticker_head | varchar(100) | YES |  | NULL |  |  |
| lndy_cloth_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_wash_req_list_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_id | lndy_cloth_id | no | 1 |
| ix_lndy_cloth_wash_request_id | lndy_cloth_wash_request_id | no | 1 |
| ix_lndy_cloth_wash_rq_list_id | lndy_cloth_wash_rq_list_id | no | 1 |
| ix_Reflndy_cloth_wash_req_list56 | lndy_cloth_wash_req_list_id | no | 1 |
| PRIMARY | lndy_cloth_wash_sticker_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
