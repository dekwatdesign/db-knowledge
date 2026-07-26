# `moo_home`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| familyno | int(11) | YES |  | NULL |  |  |
| moid | varchar(8) | YES | MUL | NULL |  |  |
| hid | int(11) | YES | MUL | NULL |  |  |
| house_id | varchar(11) | YES |  | NULL |  |  |
| house_number | varchar(50) | YES | MUL | NULL |  |  |
| home_type | tinyint(4) | YES |  | NULL |  |  |
| home_build_type | tinyint(4) | YES |  | NULL |  |  |
| home_region | tinyint(4) | YES |  | NULL |  |  |
| road | varchar(25) | YES |  | NULL |  |  |
| regdate | date | YES |  | NULL |  |  |
| nfamily | tinyint(4) | YES |  | NULL |  |  |
| location_type | char(1) | YES |  | NULL |  |  |
| vhvid | varchar(13) | YES |  | NULL |  |  |
| head_id | varchar(13) | YES |  | NULL |  |  |
| toilet | char(2) | YES |  | NULL |  |  |
| water | char(2) | YES |  | NULL |  |  |
| water_type | char(2) | YES |  | NULL |  |  |
| garbage | char(2) | YES |  | NULL |  |  |
| hcare | char(2) | YES |  | NULL |  |  |
| durable | char(2) | YES |  | NULL |  |  |
| clean | char(2) | YES |  | NULL |  |  |
| ventilation | char(2) | YES |  | NULL |  |  |
| light | char(2) | YES |  | NULL |  |  |
| water_treatment | char(2) | YES |  | NULL |  |  |
| mfood | char(2) | YES |  | NULL |  |  |
| bctrl | char(2) | YES |  | NULL |  |  |
| actrl | char(2) | YES |  | NULL |  |  |
| water_suff | char(2) | YES |  | NULL |  |  |
| home_character | char(2) | YES |  | NULL |  |  |
| std_food | char(2) | YES |  | NULL |  |  |
| community_character | char(2) | YES |  | NULL |  |  |
| last_update | date | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hid | hid | no | 1 |
| hid_moid_unique | hid | yes | 1 |
| hid_moid_unique | moid | yes | 2 |
| house_number | house_number | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| moid | moid | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
