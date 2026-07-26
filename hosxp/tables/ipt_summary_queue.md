# `ipt_summary_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_summary_queue_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| queue_date | date | YES | MUL | NULL |  |  |
| summary_queue_status_id | int(11) | YES |  | NULL |  |  |
| summary_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_queue_date | queue_date | no | 1 |
| PRIMARY | ipt_summary_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
