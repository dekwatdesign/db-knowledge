# `oapp_await`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_await_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| oapp_await_queue_no | int(11) | YES |  | NULL |  |  |
| mobile_number | varchar(50) | YES |  | NULL |  |  |
| entry_staff | varchar(50) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| app_cause | varchar(200) | YES |  | NULL |  |  |
| app_note | text | YES |  | NULL |  |  |
| app_complete | char(1) | YES |  | NULL |  |  |
| oapp_id | int(11) | YES |  | NULL |  |  |
| await_date | date | YES |  | NULL |  |  |
| await_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | oapp_await_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
