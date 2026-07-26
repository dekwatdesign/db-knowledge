# `provis_surveil`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_surveil_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| pid | varchar(13) | YES | MUL | NULL |  |  |
| seq | varchar(8) | YES |  | NULL |  |  |
| date_serv | char(8) | YES |  | NULL |  |  |
| diagcode | varchar(5) | YES |  | NULL |  |  |
| code506 | char(2) | YES |  | NULL |  |  |
| illdate | char(8) | YES |  | NULL |  |  |
| illhouse | varchar(75) | YES |  | NULL |  |  |
| illvill | char(2) | YES |  | NULL |  |  |
| illtamb | char(2) | YES |  | NULL |  |  |
| illampu | char(2) | YES |  | NULL |  |  |
| illchan | char(2) | YES |  | NULL |  |  |
| ptstat | char(1) | YES |  | NULL |  |  |
| date_death | char(8) | YES |  | NULL |  |  |
| complica | char(3) | YES |  | NULL |  |  |
| organism | char(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_pid | pid | no | 1 |
| PRIMARY | provis_surveil_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
