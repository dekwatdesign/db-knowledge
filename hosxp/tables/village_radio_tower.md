# `village_radio_tower`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_radio_tower_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| village_radio_tower_name | varchar(250) | YES |  | NULL |  |  |
| village_radio_tower_person_name | varchar(250) | YES |  | NULL |  |  |
| village_radio_tower_address1 | varchar(250) | YES |  | NULL |  |  |
| village_radio_tower_address2 | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_radio_tower_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
