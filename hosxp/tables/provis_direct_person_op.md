# `provis_direct_person_op`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_person_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| pid | varchar(13) | YES | MUL | NULL |  |  |
| hid | varchar(14) | YES |  | NULL |  |  |
| prename | varchar(20) | YES |  | NULL |  |  |
| name | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| birth | char(8) | YES |  | NULL |  |  |
| house | varchar(75) | YES |  | NULL |  |  |
| village | char(2) | YES |  | NULL |  |  |
| tambon | char(2) | YES |  | NULL |  |  |
| ampur | char(2) | YES |  | NULL |  |  |
| changwat | char(2) | YES |  | NULL |  |  |
| mstatus | char(1) | YES |  | NULL |  |  |
| occupa | char(4) | YES |  | NULL |  |  |
| race | char(3) | YES |  | NULL |  |  |
| nation | char(3) | YES |  | NULL |  |  |
| religion | char(2) | YES |  | NULL |  |  |
| educate | char(1) | YES |  | NULL |  |  |
| fstatus | char(1) | YES |  | NULL |  |  |
| father | char(13) | YES |  | NULL |  |  |
| mother | char(13) | YES |  | NULL |  |  |
| couple | char(13) | YES |  | NULL |  |  |
| movein | char(8) | YES |  | NULL |  |  |
| dischar | char(1) | YES |  | NULL |  |  |
| ddisch | char(8) | YES |  | NULL |  |  |
| bgroup | char(2) | YES |  | NULL |  |  |
| labor | char(2) | YES |  | NULL |  |  |
| vhid | varchar(8) | YES |  | NULL |  |  |
| typearea | char(1) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| export_date | date | YES |  | NULL |  |  |
| pcucode | char(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_pid | pid | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | provis_person_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
