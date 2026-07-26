# `provis_epi_pp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_epi_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| pid | varchar(13) | YES | MUL | NULL |  |  |
| seq | varchar(8) | YES |  | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| vcctype | char(3) | YES |  | NULL |  |  |
| vccplace | char(5) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_pid | pid | no | 1 |
| PRIMARY | provis_epi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
