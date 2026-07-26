# `ktb_payment_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ktb_payment_request_id | int(11) | NO | PRI | 0 |  |  |
| ktb_payment_request_status | varchar(15) | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| ktb_payment_request_date | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ktb_payment_request_idx1 | cid | no | 1 |
| ix_ktb_payment_request_idx1 | ktb_payment_request_date | no | 2 |
| PRIMARY | ktb_payment_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
