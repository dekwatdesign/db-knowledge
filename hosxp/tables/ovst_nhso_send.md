# `ovst_nhso_send`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| send_date | date | YES |  | NULL |  |  |
| send_time | time | YES |  | NULL |  |  |
| send_staff | varchar(25) | YES |  | NULL |  |  |
| send_done | char(1) | YES |  | NULL |  |  |
| data_ok | char(1) | YES |  | NULL |  |  |
| reply_error | char(1) | YES | MUL | NULL |  |  |
| nhso_error_code | varchar(100) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_reply_error | reply_error | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
