# `vemr_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vemr_log_id | int(11) | NO | PRI | 0 |  |  |
| view_hospcode | varchar(9) | YES |  | NULL |  |  |
| source_hospcode | varchar(9) | YES |  | NULL |  |  |
| view_datetime | datetime | YES |  | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| vchannel | varchar(50) | YES |  | NULL |  |  |
| visit_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vemr_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
