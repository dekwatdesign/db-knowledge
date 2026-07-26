# `provis_direct_fp_pp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_fp_id | int(11) | NO | PRI | 0 |  |  |
| export_date | date | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| pcucode | char(5) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| seq | varchar(8) | YES |  | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| fptype | char(1) | YES |  | NULL |  |  |
| did | varchar(24) | YES |  | NULL |  |  |
| amount | varchar(3) | YES |  | NULL |  |  |
| fpplace | char(5) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_date | export_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | provis_fp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
