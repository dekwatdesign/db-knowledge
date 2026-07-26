# `health_med_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_queue_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| queue_date | date | YES | MUL | NULL |  |  |
| queue_time | time | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| accept_queue | char(1) | YES | MUL | NULL |  |  |
| service_text | text | YES |  | NULL |  |  |
| health_med_service_id | int(11) | YES |  | NULL |  |  |
| health_med_service_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_acq | accept_queue | no | 1 |
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_qd | queue_date | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | health_med_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
