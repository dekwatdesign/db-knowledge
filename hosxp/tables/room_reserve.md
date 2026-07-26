# `room_reserve`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| room_reserve_queue | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| call_date | date | YES | MUL | NULL |  |  |
| call_time | time | YES |  | NULL |  |  |
| in_date | date | YES | MUL | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| roomno | varchar(4) | YES |  | NULL |  |  |
| room_reserve_queue_sp | int(11) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| room_reserve_type_id | int(11) | YES |  | NULL |  |  |
| contact_person_name | varchar(150) | YES |  | NULL |  |  |
| contact_person_phone | varchar(150) | YES |  | NULL |  |  |
| room_reserve_status_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| in_time | time | YES |  | NULL |  |  |
| finish_date | date | YES |  | NULL |  |  |
| bedno | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| an_hn_unique | an | yes | 1 |
| an_hn_unique | hn | yes | 2 |
| call_date | call_date | no | 1 |
| hn | hn | no | 1 |
| in_date | in_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | room_reserve_queue | yes | 1 |
| unique | hn | yes | 1 |
| unique | an | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
