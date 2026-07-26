# `referout_pcu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_no | varchar(20) | NO | PRI |  |  |  |
| refer_date | datetime | YES | MUL | NULL |  |  |
| refer_time | varchar(5) | YES |  | NULL |  |  |
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
| chwpart | varchar(2) | YES | MUL | NULL |  |  |
| pttype_id | varchar(5) | YES | MUL | NULL |  |  |
| pttypeno | varchar(20) | YES |  | NULL |  |  |
| hospmain | varchar(5) | YES |  | NULL |  |  |
| hospsub | varchar(5) | YES |  | NULL |  |  |
| person_id | varchar(5) | YES |  | NULL |  |  |
| refer_hospcode | varchar(5) | YES |  | NULL |  |  |
| cause_referout_id | varchar(5) | YES |  | NULL |  |  |
| expire_date | datetime | YES |  | NULL |  |  |
| loads_id | varchar(5) | YES |  | NULL |  |  |
| is_coordinate | varchar(1) | YES |  | NULL |  |  |
| coordinate_id | varchar(5) | YES |  | NULL |  |  |
| is_upload | int(11) | YES |  | NULL |  |  |
| is_dowload | int(11) | YES |  | NULL |  |  |
| is_receive | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| chwpart | chwpart | no | 1 |
| chwpart | addrpart | no | 2 |
| chwpart | tmbpart | no | 3 |
| PRIMARY | refer_no | yes | 1 |
| pttype_id | pttype_id | no | 1 |
| refer_date | refer_date | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
