# `provis_direct_pp_pp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_direct_pp_id | int(11) | NO | PRI | 0 |  |  |
| export_date | date | YES | MUL | NULL |  |  |
| pcucode | char(5) | YES |  | NULL |  |  |
| pid | varchar(13) | YES | MUL | NULL |  |  |
| mpid | varchar(13) | YES |  | NULL |  |  |
| gravida | char(2) | YES |  | NULL |  |  |
| bdate | char(8) | YES |  | NULL |  |  |
| bplace | char(1) | YES |  | NULL |  |  |
| bhosp | char(5) | YES |  | NULL |  |  |
| btype | char(1) | YES |  | NULL |  |  |
| bdoctor | char(1) | YES |  | NULL |  |  |
| bweight | varchar(4) | YES |  | NULL |  |  |
| asphyxia | char(1) | YES |  | NULL |  |  |
| vitk | char(1) | YES |  | NULL |  |  |
| bcare1 | char(8) | YES |  | NULL |  |  |
| bcare2 | char(8) | YES |  | NULL |  |  |
| bcare3 | char(8) | YES |  | NULL |  |  |
| bcres | char(1) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| bweigth | varchar(4) | YES |  | NULL |  |  |
| person_wbc_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_date | export_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_wbc_id | person_wbc_id | no | 1 |
| ix_pid | pid | no | 1 |
| PRIMARY | provis_direct_pp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
