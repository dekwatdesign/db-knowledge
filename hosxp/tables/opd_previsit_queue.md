# `opd_previsit_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_previsit_queue_id | int(11) | NO | PRI | 0 |  |  |
| opd_queue_type_id | int(11) | YES |  | NULL |  |  |
| queue_date | date | YES | MUL | NULL |  |  |
| queue_time | time | YES |  | NULL |  |  |
| queue_no | int(11) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pname | varchar(25) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| birth_date | date | YES |  | NULL |  |  |
| opd_queue_subtype_id | int(11) | YES |  | NULL |  |  |
| call_ok | char(1) | YES |  | NULL |  |  |
| call_counter_no | int(11) | YES |  | NULL |  |  |
| call_datetime | datetime | YES |  | NULL |  |  |
| spclty | varchar(2) | YES |  | NULL |  |  |
| call_wait | char(1) | YES |  | NULL |  |  |
| call_wait_staff | varchar(50) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| calling_computer | varchar(100) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_calling_computer | calling_computer | no | 1 |
| ix_date_no | queue_date | no | 1 |
| ix_date_no | queue_no | no | 2 |
| PRIMARY | opd_previsit_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
