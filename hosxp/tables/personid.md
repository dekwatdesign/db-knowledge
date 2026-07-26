# `personid`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| personid | varchar(13) | YES | UNI | NULL |  |  |
| pname | varchar(50) | YES |  | NULL |  |  |
| fname | varchar(100) | YES |  | NULL |  |  |
| lname | varchar(100) | YES |  | NULL |  |  |
| biography | blob | YES |  | NULL |  |  |
| c_c | varchar(10) | YES |  | NULL |  |  |
| c_fee | double(22,3) | YES |  | NULL |  |  |
| c_indate | datetime | YES |  | NULL |  |  |
| c_lno | varchar(50) | YES |  | NULL |  |  |
| c_offname | varchar(150) | YES |  | NULL |  |  |
| cardid | varchar(250) | YES |  | NULL |  |  |
| depposition | varchar(150) | YES |  | NULL |  |  |
| department | varchar(150) | YES |  | NULL |  |  |
| f_c | varchar(10) | YES |  | NULL |  |  |
| f_depposition | varchar(150) | YES |  | NULL |  |  |
| f_department | varchar(150) | YES |  | NULL |  |  |
| f_fee | double(22,3) | YES |  | NULL |  |  |
| f_indate | datetime | YES |  | NULL |  |  |
| f_offname | varchar(150) | YES |  | NULL |  |  |
| faddr1 | varchar(50) | YES |  | NULL |  |  |
| faddr2 | varchar(50) | YES |  | NULL |  |  |
| faddr3 | varchar(50) | YES |  | NULL |  |  |
| faddr4 | varchar(50) | YES |  | NULL |  |  |
| faddr5 | varchar(50) | YES |  | NULL |  |  |
| officialinfo | blob | YES |  | NULL |  |  |
| picture | blob | YES |  | NULL |  |  |
| socialid | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| personid_unique | personid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
