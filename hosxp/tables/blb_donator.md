# `blb_donator`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_donator_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| blb_donator_pname | varchar(20) | YES |  | NULL |  |  |
| blb_donator_fname | varchar(50) | YES |  | NULL |  |  |
| blb_donator_lname | varchar(50) | YES |  | NULL |  |  |
| blb_donator_sex | char(1) | YES |  | NULL |  |  |
| blb_donator_birthday | date | YES |  | NULL |  |  |
| blood_id | int(11) | YES | MUL | NULL |  |  |
| rh_id | int(11) | YES | MUL | NULL |  |  |
| blb_donator_blood_hh | char(1) | YES |  | NULL |  |  |
| blb_donator_addrpart | varchar(50) | YES |  | NULL |  |  |
| blb_donator_moopart | char(3) | YES |  | NULL |  |  |
| blb_donator_tmbpart | char(2) | YES |  | NULL |  |  |
| blb_donator_amppart | char(2) | YES |  | NULL |  |  |
| blb_donator_chwpart | char(2) | YES |  | NULL |  |  |
| blb_donator_roadpart | varchar(50) | YES |  | NULL |  |  |
| blb_donator_nationlity | char(3) | YES |  | NULL |  |  |
| blb_donator_pos_code | int(11) | YES |  | NULL |  |  |
| blb_donator_home_phone | varchar(20) | YES |  | NULL |  |  |
| blb_donator_tel_phone | varchar(20) | YES |  | NULL |  |  |
| blb_donator_cid | varchar(13) | YES |  | NULL |  |  |
| blb_donator_occupation | char(3) | YES |  | NULL |  |  |
| blb_donator_donor_number | varchar(50) | YES |  | NULL |  |  |
| blb_donator_donor_times | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_donator_reg_date | date | YES |  | NULL |  |  |
| blb_donator_height | double(22,3) | YES |  | NULL |  |  |
| blb_donator_weight | double(22,3) | YES |  | NULL |  |  |
| blb_donator_bp1 | int(11) | YES |  | NULL |  |  |
| blb_donator_bp2 | int(11) | YES |  | NULL |  |  |
| blb_donator_blood_ag | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bloodgroup_id | blood_id | no | 1 |
| ix_rh_id | rh_id | no | 1 |
| PRIMARY | blb_donator_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
