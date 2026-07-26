# `blood_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blood_request_id | int(11) | NO | PRI | 0 |  |  |
| department | char(3) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| request_staff | varchar(25) | YES |  | NULL |  |  |
| request_date | date | YES | MUL | NULL |  |  |
| request_time | time | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| ward | varchar(6) | YES |  | NULL |  |  |
| response_complete | char(1) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| response_staff | varchar(15) | YES |  | NULL |  |  |
| request_note | text | YES |  | NULL |  |  |
| blood_status_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_request_date | request_date | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | blood_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
