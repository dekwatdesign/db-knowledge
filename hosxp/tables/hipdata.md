# `hipdata`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cid | varchar(13) | NO | PRI |  |  |  |
| cardid | varchar(50) | YES |  | NULL |  |  |
| fname | varchar(50) | YES | MUL | NULL |  |  |
| lname | varchar(50) | YES | MUL | NULL |  |  |
| birthdate | date | YES |  | NULL |  |  |
| datein | date | YES |  | NULL |  |  |
| dateexp | date | YES |  | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |
| address | varchar(10) | YES |  | NULL |  |  |
| moo | varchar(5) | YES |  | NULL |  |  |
| tambon | varchar(6) | YES |  | NULL |  |  |
| off_id | varchar(5) | YES |  | NULL |  |  |
| moi_status | char(3) | YES |  | NULL |  |  |
| pname | varchar(25) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| typecode | char(2) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| mtext | varchar(6) | YES |  | NULL |  |  |
| subtype | char(2) | YES |  | NULL |  |  |
| nation | char(2) | YES |  | NULL |  |  |
| occupa | char(3) | YES |  | NULL |  |  |
| road | varchar(20) | YES |  | NULL |  |  |
| zipcode | varchar(5) | YES |  | NULL |  |  |
| homeid | varchar(11) | YES |  | NULL |  |  |
| remark | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fname | fname | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_lname | lname | no | 1 |
| PRIMARY | cid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
