# `provis_home`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_home_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| hid | varchar(14) | YES |  | NULL |  |  |
| house_id | char(11) | YES |  | NULL |  |  |
| house | varchar(75) | YES |  | NULL |  |  |
| village | char(2) | YES |  | NULL |  |  |
| road | varchar(25) | YES |  | NULL |  |  |
| tambon | char(2) | YES |  | NULL |  |  |
| ampur | char(2) | YES |  | NULL |  |  |
| changwat | char(2) | YES |  | NULL |  |  |
| nfamily | varchar(2) | YES |  | NULL |  |  |
| locatype | char(1) | YES |  | NULL |  |  |
| vhvid | varchar(13) | YES |  | NULL |  |  |
| headid | varchar(13) | YES |  | NULL |  |  |
| toilet | char(1) | YES |  | NULL |  |  |
| water | char(1) | YES |  | NULL |  |  |
| wattype | char(1) | YES |  | NULL |  |  |
| garbage | char(1) | YES |  | NULL |  |  |
| hcare | char(1) | YES |  | NULL |  |  |
| durable | char(1) | YES |  | NULL |  |  |
| clean | char(1) | YES |  | NULL |  |  |
| ventila | char(1) | YES |  | NULL |  |  |
| light | char(1) | YES |  | NULL |  |  |
| watertm | char(1) | YES |  | NULL |  |  |
| mfood | char(1) | YES |  | NULL |  |  |
| bctrl | char(1) | YES |  | NULL |  |  |
| actrl | char(1) | YES |  | NULL |  |  |
| vhid | varchar(8) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| PRIMARY | provis_home_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
