# `provis_direct_drug_op`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_drug_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| seq | varchar(8) | YES |  | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| did | varchar(6) | YES |  | NULL |  |  |
| amount | varchar(12) | YES |  | NULL |  |  |
| drugpric | varchar(14) | YES |  | NULL |  |  |
| drugcost | varchar(14) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| dname | varchar(250) | YES |  | NULL |  |  |
| didstd | varchar(24) | YES |  | NULL |  |  |
| unit | varchar(20) | YES |  | NULL |  |  |
| unitpackin | varchar(20) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| unit_packing | varchar(20) | YES |  | NULL |  |  |
| clinic | char(5) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| export_date | date | YES |  | NULL |  |  |
| pcucode | char(5) | YES |  | NULL |  |  |
| opi_guid | char(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | provis_drug_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
