# `hospital_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_person_id | int(11) | NO | PRI | 0 |  |  |
| hospital_profile_id | int(11) | YES |  | NULL |  |  |
| hospital_person_field_id | int(11) | YES |  | NULL |  |  |
| hospital_person_position_id | int(11) | YES |  | NULL |  |  |
| hospital_person_employment_type_id | int(11) | YES |  | NULL |  |  |
| hospital_person_education_id | int(11) | YES |  | NULL |  |  |
| person_birthdate | date | YES |  | NULL |  |  |
| person_pname | varchar(50) | YES |  | NULL |  |  |
| person_fname | varchar(50) | YES |  | NULL |  |  |
| person_lname | varchar(50) | YES |  | NULL |  |  |
| person_cid | varchar(13) | YES |  | NULL |  |  |
| person_address1 | varchar(250) | YES |  | NULL |  |  |
| person_address_chwpart | char(2) | YES |  | NULL |  |  |
| person_address_amppart | char(2) | YES |  | NULL |  |  |
| person_address_tmbpart | char(2) | YES |  | NULL |  |  |
| person_phone | varchar(50) | YES |  | NULL |  |  |
| person_email | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospital_person_status_id | int(11) | YES |  | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_person_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
