# `ipdrent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rent_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| rent_date | date | YES | MUL | NULL |  |  |
| rent_time | time | YES |  | NULL |  |  |
| rent_depcode | char(3) | YES |  | NULL |  |  |
| rent_user | varchar(150) | YES |  | NULL |  |  |
| return_date | date | YES | MUL | NULL |  |  |
| return_time | time | YES |  | NULL |  |  |
| checkin | char(1) | YES | MUL | NULL |  |  |
| track_depcode | char(3) | YES |  | NULL |  |  |
| comment | varchar(250) | YES |  | NULL |  |  |
| rent_reason_id | int(11) | YES |  | NULL |  |  |
| phone | varchar(100) | YES |  | NULL |  |  |
| return_user | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| due_date | date | YES |  | NULL |  |  |
| return_staff | varchar(50) | YES |  | NULL |  |  |
| file_rent_status_id | int(11) | YES |  | NULL |  |  |
| lookup_user | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| checkin | checkin | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | rent_id | yes | 1 |
| rent_date | rent_date | no | 1 |
| return_date | return_date | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
