# `blb_sub_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_sub_request_id | int(11) | NO | PRI | 0 |  |  |
| blb_request_id | int(11) | YES |  | NULL |  |  |
| sub_request_date | date | YES |  | NULL |  |  |
| sub_request_time | time | YES |  | NULL |  |  |
| sub_request_qty | int(11) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| doctor | char(6) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| blb_blood_items_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_sub_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
