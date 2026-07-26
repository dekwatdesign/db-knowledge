# `provis_direct_service_op`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_service_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| pid | varchar(13) | YES | MUL | NULL |  |  |
| seq | varchar(8) | YES | MUL | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| locate | char(1) | YES |  | NULL |  |  |
| pttype | char(1) | YES |  | NULL |  |  |
| intime | char(1) | YES |  | NULL |  |  |
| price | varchar(11) | YES |  | NULL |  |  |
| instype | char(4) | YES |  | NULL |  |  |
| insid | varchar(18) | YES |  | NULL |  |  |
| main | char(5) | YES |  | NULL |  |  |
| pay | varchar(11) | YES |  | NULL |  |  |
| referin | char(1) | YES |  | NULL |  |  |
| refinhos | char(5) | YES |  | NULL |  |  |
| referout | char(1) | YES |  | NULL |  |  |
| refouhos | char(5) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| clinic | char(5) | YES |  | NULL |  |  |
| service_ty | char(1) | YES |  | NULL |  |  |
| cost | char(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| pcucode | char(5) | YES |  | NULL |  |  |
| export_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_pid | pid | no | 1 |
| ix_seq | seq | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | provis_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
