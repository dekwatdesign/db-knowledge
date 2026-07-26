# `nhip_phr_exchange_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| vstdate | date | YES |  | NULL |  |  |
| exchange_status | char(1) | YES |  | NULL |  |  |
| exchange_datetime | datetime | YES |  | NULL |  |  |
| request_message | longtext | YES |  | NULL |  |  |
| response_code | varchar(20) | YES |  | NULL |  |  |
| response_message | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
