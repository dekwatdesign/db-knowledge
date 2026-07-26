# `oapp_xray`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_xray_id | int(11) | NO | PRI | 0 |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |
| xray_items_code | int(11) | YES |  | NULL |  |  |
| xray_room_id | int(11) | YES |  | NULL |  |  |
| xray_pt_status | int(11) | YES |  | NULL |  |  |
| xray_type | int(11) | YES |  | NULL |  |  |
| xray_side | int(11) | YES |  | NULL |  |  |
| confirm_request | char(1) | YES |  | NULL |  |  |
| order_xn | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| xray_note | varchar(200) | YES |  | NULL |  |  |
| request_note | text | YES |  | NULL |  |  |
| clinical_information | text | YES |  | NULL |  |  |
| clinical_diagnosis | text | YES |  | NULL |  |  |
| walk_id | int(11) | YES |  | NULL |  |  |
| request_depcode | varchar(3) | YES |  | NULL |  |  |
| xray_priority_id | int(11) | YES |  | NULL |  |  |
| request_date | date | YES |  | NULL |  |  |
| request_time | time | YES |  | NULL |  |  |
| xray_items_service_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_oapp_id | oapp_id | no | 1 |
| ix_order_xn | order_xn | no | 1 |
| PRIMARY | oapp_xray_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
