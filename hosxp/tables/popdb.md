# `popdb`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cid | varchar(13) | NO | PRI |  |  |  |
| pname | varchar(25) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| birthdaytext | varchar(8) | YES |  | NULL |  |  |
| addr1 | varchar(20) | YES |  | NULL |  |  |
| addrcode | varchar(8) | YES |  | NULL |  |  |
| hosp1 | varchar(5) | YES |  | NULL |  |  |
| hosp2 | varchar(5) | YES |  | NULL |  |  |
| note1 | varchar(10) | YES |  | NULL |  |  |
| pcode1 | char(3) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| begindate | date | YES |  | NULL |  |  |
| enddate | date | YES |  | NULL |  |  |
| typecode | char(3) | YES |  | NULL |  |  |
| birthdate | date | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| subtype | char(2) | YES |  | NULL |  |  |
| mtext | varchar(7) | YES |  | NULL |  |  |
| pttypeno | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | cid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
