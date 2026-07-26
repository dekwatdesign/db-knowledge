# `village_agri_surveillance_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_agri_surveillance_member_id | int(11) | NO | PRI | 0 |  |  |
| person_cid | varchar(13) | YES |  | NULL |  |  |
| person_name | varchar(150) | YES |  | NULL |  |  |
| village_agri_surveillance_id | int(11) | YES | MUL | NULL |  |  |
| training_pass | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_agri_surveillance_id | village_agri_surveillance_id | no | 1 |
| PRIMARY | village_agri_surveillance_member_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
