# `referback_pcu_reply`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| referback_no | varchar(20) | NO | PRI |  |  |  |
| referback_date | datetime | YES |  | NULL |  |  |
| referback_time | varchar(5) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pname | varchar(20) | YES |  | NULL |  |  |
| fname | varchar(40) | YES |  | NULL |  |  |
| lname | varchar(40) | YES |  | NULL |  |  |
| age | varchar(10) | YES |  | NULL |  |  |
| addrpart | varchar(100) | YES |  | NULL |  |  |
| moopart | varchar(5) | YES |  | NULL |  |  |
| tmbpart | varchar(2) | YES |  | NULL |  |  |
| amppart | varchar(2) | YES |  | NULL |  |  |
| chwpart | varchar(2) | YES |  | NULL |  |  |
| pttype_id | varchar(5) | YES |  | NULL |  |  |
| hospmain | varchar(5) | YES |  | NULL |  |  |
| hospsub | varchar(5) | YES |  | NULL |  |  |
| typept_id | varchar(5) | YES |  | NULL |  |  |
| strength_id | varchar(5) | YES |  | NULL |  |  |
| doctor_id | varchar(5) | YES |  | NULL |  |  |
| refer_hospcode | varchar(5) | YES |  | NULL |  |  |
| cause_referback_id | varchar(5) | YES |  | NULL |  |  |
| wherefores_id | varchar(5) | YES |  | NULL |  |  |
| loads_id | varchar(5) | YES |  | NULL |  |  |
| is_coordinate | varchar(1) | YES |  | NULL |  |  |
| coordinate_id | varchar(5) | YES |  | NULL |  |  |
| coordinate_detail | text | YES |  | NULL |  |  |
| receive_no | varchar(20) | YES |  | NULL |  |  |
| receive_date | datetime | YES |  | NULL |  |  |
| receive_time | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | referback_no | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
