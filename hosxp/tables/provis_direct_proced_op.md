# `provis_direct_proced_op`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_proced_id | int(11) | NO | PRI | 0 |  |  |
| export_date | date | YES | MUL | NULL |  |  |
| pid | varchar(13) | YES | MUL | NULL |  |  |
| seq | varchar(8) | YES |  | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| proced | varchar(7) | YES |  | NULL |  |  |
| servpric | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| clinic | char(5) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| er_oper_code | int(11) | YES |  | NULL |  |  |
| pcucode | char(5) | YES |  | NULL |  |  |
| serv_per | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_date | export_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_provis_unique | vn | yes | 1 |
| ix_provis_unique | pid | yes | 2 |
| ix_provis_unique | seq | yes | 3 |
| ix_provis_unique | proced | yes | 4 |
| ix_provis_unique_index | pid | yes | 1 |
| ix_provis_unique_index | proced | yes | 2 |
| ix_provis_unique_index | seq | yes | 3 |
| ix_provis_unique_index | vn | yes | 4 |
| ix_vn | vn | no | 1 |
| PRIMARY | provis_proced_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
