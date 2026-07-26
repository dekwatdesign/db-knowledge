# `ipd_dep_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_dep_queue_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| queue_datetime | datetime | YES |  | NULL |  |  |
| accept_datetime | datetime | YES |  | NULL |  |  |
| finish_datetime | datetime | YES |  | NULL |  |  |
| tx_status | char(1) | YES |  | NULL |  |  |
| from_depcode | char(3) | YES |  | NULL |  |  |
| queue_note | varchar(250) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| doctor_note | text | YES |  | NULL |  |  |
| send_staff | varchar(25) | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_depcode | an | yes | 1 |
| ix_an_depcode | depcode | yes | 2 |
| ix_dep_tx | depcode | no | 1 |
| ix_dep_tx | tx_status | no | 2 |
| PRIMARY | ipd_dep_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
