# `iclaim_service_broker`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_service_broker_id | int(11) | NO | PRI | 0 |  |  |
| service_host | varchar(200) | YES |  | NULL |  |  |
| service_port | varchar(5) | YES |  | NULL |  |  |
| service_path | varchar(200) | YES |  | NULL |  |  |
| service_header_key | varchar(200) | YES |  | NULL |  |  |
| service_header_value | varchar(200) | YES |  | NULL |  |  |
| service_name | varchar(200) | YES | UNI | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| thai_service_name | varchar(200) | YES |  | NULL |  |  |
| path_history | varchar(200) | YES |  | NULL |  |  |
| path_claimopd | varchar(200) | YES |  | NULL |  |  |
| path_cancel_claim | varchar(200) | YES |  | NULL |  |  |
| path_submit_billing | varchar(200) | YES |  | NULL |  |  |
| path_check_claim_status | varchar(200) | YES |  | NULL |  |  |
| path_claim_reservation | varchar(200) | YES |  | NULL |  |  |
| path_claim_admission | varchar(200) | YES |  | NULL |  |  |
| path_claim_ipd_concurrent | varchar(200) | YES |  | NULL |  |  |
| path_ipd_discharge | varchar(200) | YES |  | NULL |  |  |
| path_attach_doc_list | varchar(200) | YES |  | NULL |  |  |
| company_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_service_name | service_name | yes | 1 |
| PRIMARY | iclaim_service_broker_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
