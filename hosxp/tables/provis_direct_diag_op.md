# `provis_direct_diag_op`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_diag_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| seq | varchar(8) | YES | MUL | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| diagtype | char(1) | YES |  | NULL |  |  |
| diagcode | varchar(5) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| clinic | char(5) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| pcucode | char(5) | YES |  | NULL |  |  |
| export_date | date | YES |  | NULL |  |  |
| ovst_diag_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_provis_unique | export_month | yes | 1 |
| ix_provis_unique | pid | yes | 2 |
| ix_provis_unique | seq | yes | 3 |
| ix_provis_unique | diagcode | yes | 4 |
| ix_provis_unique_index | diagcode | yes | 1 |
| ix_provis_unique_index | export_month | yes | 2 |
| ix_provis_unique_index | pid | yes | 3 |
| ix_provis_unique_index | seq | yes | 4 |
| ix_seq | seq | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | provis_diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
