# `person_card_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_card_request_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| send_status | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| pname | varchar(15) | YES |  | NULL |  |  |
| birthdate | date | YES |  | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| approve_status_id | int(11) | YES |  | NULL |  |  |
| village_code | varchar(8) | YES |  | NULL |  |  |
| send_date | date | YES |  | NULL |  |  |
| send_staff | varchar(25) | YES |  | NULL |  |  |
| pid | char(13) | YES |  | NULL |  |  |
| mastercupid | varchar(15) | YES |  | NULL |  |  |
| title | char(3) | YES |  | NULL |  |  |
| sex | varchar(5) | YES |  | NULL |  |  |
| age | int(11) | YES |  | NULL |  |  |
| subinscl | varchar(2) | YES |  | NULL |  |  |
| hmain | char(5) | YES |  | NULL |  |  |
| hsub | char(5) | YES |  | NULL |  |  |
| status | varchar(2) | YES |  | NULL |  |  |
| cardid | varchar(50) | YES |  | NULL |  |  |
| notedate | date | YES |  | NULL |  |  |
| startdate | date | YES |  | NULL |  |  |
| expdate | date | YES |  | NULL |  |  |
| procode | varchar(6) | YES |  | NULL |  |  |
| ownerpur | varchar(6) | YES |  | NULL |  |  |
| maininscl | varchar(6) | YES |  | NULL |  |  |
| note | varchar(100) | YES |  | NULL |  |  |
| nation | varchar(2) | YES |  | NULL |  |  |
| occupa | varchar(3) | YES |  | NULL |  |  |
| address | varchar(100) | YES |  | NULL |  |  |
| moo | varchar(2) | YES |  | NULL |  |  |
| road | varchar(25) | YES |  | NULL |  |  |
| tambon | varchar(6) | YES |  | NULL |  |  |
| amphur | varchar(6) | YES |  | NULL |  |  |
| province | varchar(6) | YES |  | NULL |  |  |
| zipcode | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_card_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
