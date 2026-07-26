# `moo_home_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hid | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| moid | varchar(8) | YES | MUL | NULL |  |  |
| home_number | varchar(10) | YES | MUL | NULL |  |  |
| member_type1 | tinyint(4) | YES |  | NULL |  |  |
| member_type2 | tinyint(4) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| pname | varchar(15) | YES |  | NULL |  |  |
| fname | varchar(30) | YES |  | NULL |  |  |
| lname | varchar(30) | YES |  | NULL |  |  |
| occupation | char(3) | YES |  | NULL |  |  |
| nationality | char(2) | YES |  | NULL |  |  |
| citizenship | char(2) | YES |  | NULL |  |  |
| religion | char(2) | YES |  | NULL |  |  |
| birthday | date | YES |  | NULL |  |  |
| addrpart | varchar(50) | YES |  | NULL |  |  |
| moopart | char(3) | YES |  | NULL |  |  |
| addr_soi | varchar(100) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| bloodgrp | varchar(5) | YES |  | NULL |  |  |
| marrystatus | char(1) | YES |  | NULL |  |  |
| road | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hid | hid | no | 1 |
| home_number | home_number | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| moid | moid | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
