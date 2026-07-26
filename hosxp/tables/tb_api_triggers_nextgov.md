# `tb_api_triggers_nextgov`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| triggers_id | varchar(50) | NO | PRI |  |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| vn | varchar(15) | YES |  | NULL |  |  |
| pttype | char(5) | YES |  | NULL |  |  |
| triggers_datetime | datetime | YES |  | NULL |  |  |
| triggers_read_status | char(2) | YES |  | NULL |  |  |
| triggers_read_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | triggers_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
