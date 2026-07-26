# `stock_register_inventory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| register_id | varchar(30) | NO | PRI |  |  |  |
| reg_name | varchar(150) | YES |  | NULL |  |  |
| req_address | varchar(200) | YES |  | NULL |  |  |
| reg_email | varchar(100) | YES |  | NULL |  |  |
| reg_tel | varchar(100) | YES |  | NULL |  |  |
| reg_bed | int(11) | YES |  | NULL |  |  |
| reg_hos | varchar(100) | YES |  | NULL |  |  |
| reg_happay | varchar(20) | YES |  | NULL |  |  |
| reg_type | varchar(10) | YES |  | NULL |  |  |
| reg_startdate | date | YES |  | NULL |  |  |
| reg_hoscode | varchar(10) | YES |  | NULL |  |  |
| number | int(11) | YES |  | NULL |  |  |
| note | varchar(200) | YES |  | NULL |  |  |
| reg_datedemo | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
