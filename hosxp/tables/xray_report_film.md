# `xray_report_film`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_report_film_id | int(11) | NO | PRI | 0 |  |  |
| xn | int(11) | YES | MUL | NULL |  |  |
| film_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| damage_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| film_damage | char(1) | YES |  | NULL |  |  |
| note | varchar(200) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| film_price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_opi_guid | opi_guid | no | 1 |
| ix_xn | xn | no | 1 |
| PRIMARY | xray_report_film_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
