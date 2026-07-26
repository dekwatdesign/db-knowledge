# `rvp_accident_request_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_accident_request_history_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| request_datetime | datetime | YES |  | NULL |  |  |
| request_staff | varchar(25) | YES |  | NULL |  |  |
| request_result | varchar(200) | YES |  | NULL |  |  |
| request_result_id | varchar(50) | YES |  | NULL |  |  |
| request_eclaim_accident_no | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | rvp_accident_request_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
