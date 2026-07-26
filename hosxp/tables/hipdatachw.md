# `hipdatachw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| age | int(11) | YES |  | NULL |  |  |
| address | varchar(10) | YES |  | NULL |  |  |
| birthdate | datetime | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| cardid | varchar(30) | YES | MUL | NULL |  |  |
| dateampsendpro | datetime | YES |  | NULL |  |  |
| dateampsendtam | datetime | YES |  | NULL |  |  |
| datecensendpro | datetime | YES |  | NULL |  |  |
| dateexp | datetime | YES |  | NULL |  |  |
| datein | datetime | YES |  | NULL |  |  |
| datenumber | datetime | YES |  | NULL |  |  |
| dateprint | datetime | YES |  | NULL |  |  |
| dateprosendamp | datetime | YES |  | NULL |  |  |
| dateprosendcen | datetime | YES |  | NULL |  |  |
| dateprosendcennid | datetime | YES |  | NULL |  |  |
| datetamsendamp | datetime | YES |  | NULL |  |  |
| dupst | varchar(30) | YES |  | NULL |  |  |
| fname | varchar(35) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |
| inscl | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(35) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES | MUL | NULL |  |  |
| machineid | int(11) | YES |  | NULL |  |  |
| moi_status | varchar(50) | YES |  | NULL |  |  |
| moo | char(2) | YES |  | NULL |  |  |
| nation | char(3) | YES |  | NULL |  |  |
| notedate | datetime | YES |  | NULL |  |  |
| off_id | varchar(5) | YES |  | NULL |  |  |
| occupa | char(3) | YES |  | NULL |  |  |
| province | varchar(6) | YES |  | NULL |  |  |
| recid | int(11) | YES |  | NULL |  |  |
| sex | char(3) | YES |  | NULL |  |  |
| status | varchar(50) | YES |  | NULL |  |  |
| tambon | varchar(6) | YES |  | NULL |  |  |
| title | varchar(15) | YES |  | NULL |  |  |
| titlecode | char(3) | YES |  | NULL |  |  |
| age_d | int(11) | YES |  | NULL |  |  |
| age_m | int(11) | YES |  | NULL |  |  |
| age_y | int(11) | YES |  | NULL |  |  |
| amphur | varchar(6) | YES |  | NULL |  |  |
| dbd | int(11) | YES |  | NULL |  |  |
| dn | int(11) | YES |  | NULL |  |  |
| mbd | int(11) | YES |  | NULL |  |  |
| mn | int(11) | YES |  | NULL |  |  |
| rightcode | char(2) | YES |  | NULL |  |  |
| ybd | int(11) | YES |  | NULL |  |  |
| yn | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| cardid | cardid | no | 1 |
| cid | cid | no | 1 |
| fname | fname | no | 1 |
| fname_cid_lname_unique | fname | yes | 1 |
| fname_cid_lname_unique | cid | yes | 2 |
| fname_cid_lname_unique | lname | yes | 3 |
| ix_fname_cid_lname_unique | cid | yes | 1 |
| ix_fname_cid_lname_unique | fname | yes | 2 |
| ix_fname_cid_lname_unique | lname | yes | 3 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_lname_fname | fname | no | 1 |
| ix_lname_fname | lname | no | 2 |
| lastupdate | lastupdate | no | 1 |
| lname | lname | no | 1 |
| lname_fname | lname | no | 1 |
| lname_fname | fname | no | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
