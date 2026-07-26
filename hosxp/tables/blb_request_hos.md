# `blb_request_hos`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_request_hos_id | int(11) | NO | PRI | 0 |  |  |
| blb_donation_association_id | int(11) | YES | MUL | NULL |  |  |
| blb_request_hos_order_date | date | YES |  | NULL |  |  |
| blb_request_hos_order_time | time | YES |  | NULL |  |  |
| blb_request_hos_note | text | YES |  | NULL |  |  |
| blb_request_hos_user | varchar(10) | YES | MUL | NULL |  |  |
| blb_request_hos_approver | varchar(10) | YES |  | NULL |  |  |
| blb_request_status_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_donation_association_id | blb_donation_association_id | no | 1 |
| ix_blb_request_head_hospital_user | blb_request_hos_user | no | 1 |
| ix_blb_request_status_id | blb_request_status_id | no | 1 |
| PRIMARY | blb_request_hos_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
