# `bb_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_person_id | int(11) | NO | PRI | 0 |  |  |
| pname | varchar(15) | YES |  | NULL |  |  |
| fname | varchar(30) | YES |  | NULL |  |  |
| lname | varchar(30) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| birthday | date | YES |  | NULL |  |  |
| blood_group | varchar(5) | YES |  | NULL |  |  |
| blood_rh | char(1) | YES |  | NULL |  |  |
| blood_hh | char(1) | YES |  | NULL |  |  |
| addrpart | varchar(50) | YES |  | NULL |  |  |
| moopart | char(3) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| po_code | varchar(5) | YES |  | NULL |  |  |
| home_phone | varchar(20) | YES |  | NULL |  |  |
| tel_phone | varchar(20) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| occupation | char(3) | YES |  | NULL |  |  |
| bb_department_id | int(11) | YES |  | NULL |  |  |
| donor_number | varchar(10) | YES | UNI | NULL |  |  |
| roadpart | varchar(55) | YES |  | NULL |  |  |
| donor_times | int(11) | YES |  | NULL |  |  |
| donor_sts | char(1) | YES |  | NULL |  |  |
| blood_subgroup | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_donor_number | donor_number | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_person_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
