# `iclaim_reservation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_reservation_id | int(11) | NO | PRI | 0 |  |  |
| reserve_no | varchar(200) | YES |  | NULL |  |  |
| reserve_uid | varchar(200) | YES |  | NULL |  |  |
| transaction_no | varchar(200) | YES |  | NULL |  |  |
| transaction_uid | varchar(200) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| is_procedure | char(1) | YES |  | NULL |  |  |
| claim_from_motorcycle | char(1) | YES |  | NULL |  |  |
| request_json | text | YES |  | NULL |  |  |
| respones_json | text | YES |  | NULL |  |  |
| message_status | varchar(10) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| iclaim_service_id | int(11) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| status_sending | varchar(250) | YES |  | NULL |  |  |
| cancel_status | varchar(10) | YES |  | NULL |  |  |
| cancel_message | varchar(250) | YES |  | NULL |  |  |
| cancel_respones_json | text | YES |  | NULL |  |  |
| respones_path_a | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_iclaim_service_id | iclaim_service_id | no | 1 |
| PRIMARY | iclaim_reservation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
