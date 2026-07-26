# `xray_rent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_rent_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| xn | int(11) | YES | MUL | NULL |  |  |
| rent_date | date | YES | MUL | NULL |  |  |
| rent_time | time | YES |  | NULL |  |  |
| rent_depcode | char(3) | YES |  | NULL |  |  |
| rent_user | varchar(150) | YES |  | NULL |  |  |
| return_date | date | YES |  | NULL |  |  |
| return_time | time | YES |  | NULL |  |  |
| checkin | char(1) | YES | MUL | NULL |  |  |
| track_depcode | char(3) | YES |  | NULL |  |  |
| comment | varchar(250) | YES |  | NULL |  |  |
| rent_reason_id | int(11) | YES |  | NULL |  |  |
| phone | varchar(100) | YES |  | NULL |  |  |
| home_rent | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| xrayxn_id | int(11) | YES | MUL | NULL |  |  |
| destination_place_text | varchar(200) | YES |  | NULL |  |  |
| rent_doctor | varchar(10) | YES |  | NULL |  |  |
| xray_rent_reason_id | int(11) | YES |  | NULL |  |  |
| due_date | date | YES |  | NULL |  |  |
| staff | varchar(200) | YES |  | NULL |  |  |
| return_staff | varchar(50) | YES |  | NULL |  |  |
| rent_person_name | varchar(100) | YES |  | NULL |  |  |
| rent_person_relation | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| checkin | checkin | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_xrayxnid | xrayxn_id | no | 1 |
| PRIMARY | xray_rent_id | yes | 1 |
| rent_date | rent_date | no | 1 |
| xn | xn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
