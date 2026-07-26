# `village_agri_surveillance`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_agri_surveillance_id | int(11) | NO | PRI | 0 |  |  |
| agri_group_name | varchar(250) | YES |  | NULL |  |  |
| agri_director_name | varchar(150) | YES |  | NULL |  |  |
| agri_location | varchar(250) | YES |  | NULL |  |  |
| agri_member_count | int(11) | YES |  | NULL |  |  |
| agri_remark | varchar(250) | YES |  | NULL |  |  |
| village_agri_group_type_id | int(11) | YES | MUL | NULL |  |  |
| training_pass_count | int(11) | YES |  | NULL |  |  |
| training_no_pass_count | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_agrouptype | village_agri_group_type_id | no | 1 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_agri_surveillance_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
