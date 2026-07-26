# `blb_request_reject`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_request_reject_id | int(11) | NO | PRI | 0 |  |  |
| blb_request_id | int(11) | YES |  | NULL |  |  |
| blb_request_reject_reason_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(80) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_request_reject_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
