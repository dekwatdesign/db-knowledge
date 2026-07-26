# `patient_kiosk_registry`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| pname | varchar(15) | YES | MUL | NULL |  |  |
| fname | varchar(30) | YES | MUL | NULL |  |  |
| lname | varchar(30) | YES | MUL | NULL |  |  |
| occupation | varchar(4) | YES |  | NULL |  |  |
| citizenship | char(3) | YES |  | NULL |  |  |
| birthday | date | YES |  | NULL |  |  |
| addrpart | varchar(50) | YES |  | NULL |  |  |
| moopart | char(3) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES | MUL | NULL |  |  |
| amppart | char(2) | YES | MUL | NULL |  |  |
| chwpart | char(2) | YES | MUL | NULL |  |  |
| bloodgrp | varchar(20) | YES |  | NULL |  |  |
| clinic | varchar(100) | YES | MUL | NULL |  |  |
| deathday | date | YES | MUL | NULL |  |  |
| drugallergy | varchar(250) | YES |  | NULL |  |  |
| familyno | int(11) | YES |  | NULL |  |  |
| fathername | varchar(50) | YES |  | NULL |  |  |
| firstday | date | YES | MUL | NULL |  |  |
| hometel | varchar(20) | YES |  | NULL |  |  |
| informaddr | varchar(200) | YES |  | NULL |  |  |
| informname | varchar(50) | YES |  | NULL |  |  |
| informrelation | varchar(50) | YES |  | NULL |  |  |
| informtel | varchar(20) | YES |  | NULL |  |  |
| marrystatus | char(1) | YES |  | NULL |  |  |
| mathername | varchar(50) | YES |  | NULL |  |  |
| hn_int | int(11) | YES |  | NULL |  |  |
| nationality | char(3) | YES |  | NULL |  |  |
| opdlocation | varchar(50) | YES |  | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| religion | char(2) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| spsname | varchar(50) | YES |  | NULL |  |  |
| truebirthday | char(1) | YES |  | NULL |  |  |
| workaddr | varchar(50) | YES |  | NULL |  |  |
| worktel | varchar(20) | YES |  | NULL |  |  |
| hcode | varchar(5) | YES | MUL | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| hid | int(11) | YES |  | NULL |  |  |
| educate | char(1) | YES |  | NULL |  |  |
| family_status | char(1) | YES |  | NULL |  |  |
| labor_type | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| type_area | char(1) | YES |  | NULL |  |  |
| road | varchar(50) | YES |  | NULL |  |  |
| father_cid | varchar(13) | YES |  | NULL |  |  |
| mother_cid | varchar(13) | YES |  | NULL |  |  |
| couple_cid | varchar(13) | YES |  | NULL |  |  |
| person_type | char(2) | YES |  | NULL |  |  |
| private_doctor_name | varchar(75) | YES |  | NULL |  |  |
| legal_action | char(1) | YES |  | NULL |  |  |
| death_code504 | char(2) | YES |  | NULL |  |  |
| death_diag | varchar(6) | YES |  | NULL |  |  |
| node_id | char(1) | YES |  | NULL |  |  |
| admit | char(1) | YES |  | NULL |  |  |
| midname | varchar(25) | YES |  | NULL |  |  |
| po_code | varchar(5) | YES |  | NULL |  |  |
| fatherlname | varchar(30) | YES |  | NULL |  |  |
| motherlname | varchar(30) | YES |  | NULL |  |  |
| spslname | varchar(30) | YES |  | NULL |  |  |
| country | char(2) | YES |  | NULL |  |  |
| email | varchar(50) | YES |  | NULL |  |  |
| birthtime | time | YES |  | NULL |  |  |
| mother_hn | varchar(9) | YES |  | NULL |  |  |
| last_visit | date | YES | MUL | NULL |  |  |
| death | char(1) | YES |  | NULL |  |  |
| height | int(11) | YES |  | NULL |  |  |
| inregion | char(1) | YES |  | NULL |  |  |
| reg_time | time | YES |  | NULL |  |  |
| oldcode | varchar(50) | YES | MUL | NULL |  |  |
| lang | char(2) | YES |  | NULL |  |  |
| gov_chronic_id | varchar(10) | YES |  | NULL |  |  |
| in_cups | char(1) | YES |  | NULL |  |  |
| patient_type_id | tinyint(4) | YES |  | NULL |  |  |
| addr_soi | varchar(100) | YES |  | NULL |  |  |
| work_addr | varchar(230) | YES |  | NULL |  |  |
| father_hn | varchar(9) | YES |  | NULL |  |  |
| alias_name | varchar(100) | YES |  | NULL |  |  |
| destroyed | char(1) | YES |  | NULL |  |  |
| old_addr | varchar(250) | YES |  | NULL |  |  |
| fname_soundex | varchar(50) | YES | MUL | NULL |  |  |
| lname_soundex | varchar(50) | YES | MUL | NULL |  |  |
| bloodgroup_rh | varchar(5) | YES |  | NULL |  |  |
| passport_no | varchar(25) | YES | MUL | NULL |  |  |
| addressid | varchar(6) | YES |  | NULL |  |  |
| mobile_phone_number | varchar(20) | YES |  | NULL |  |  |
| anonymous_person | char(1) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| membercard_no | varchar(15) | YES | MUL | NULL |  |  |
| ec_fname | varchar(50) | YES |  | NULL |  |  |
| ec_lname | varchar(50) | YES |  | NULL |  |  |
| ec_relation_type_id | int(11) | YES |  | NULL |  |  |
| patient_color_id | int(11) | YES |  | NULL |  |  |
| number_of_relatives | int(11) | YES |  | NULL |  |  |
| birth_order | int(11) | YES |  | NULL |  |  |
| person_labor_type_id | int(11) | YES |  | NULL |  |  |
| is_card_destroy | char(1) | YES |  | NULL |  |  |
| card_destroy_date | date | YES |  | NULL |  |  |
| regis_number | int(11) | YES |  | NULL |  |  |
| datetime_regis_number | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_address | tmbpart | no | 1 |
| ix_address | chwpart | no | 2 |
| ix_address | amppart | no | 3 |
| ix_address_index | amppart | no | 1 |
| ix_address_index | chwpart | no | 2 |
| ix_address_index | tmbpart | no | 3 |
| ix_chwpart | chwpart | no | 1 |
| ix_cid | cid | no | 1 |
| ix_clinic | clinic | no | 1 |
| ix_deathday | deathday | no | 1 |
| ix_firstday | firstday | no | 1 |
| ix_fname | fname | no | 1 |
| ix_fname_lname | fname | no | 1 |
| ix_fname_lname | lname | no | 2 |
| ix_fname_soundex | fname_soundex | no | 1 |
| ix_hcode | hcode | no | 1 |
| ix_hn_unique | hn | yes | 1 |
| ix_lastvisit | last_visit | no | 1 |
| ix_last_update | last_update | no | 1 |
| ix_lname | lname | no | 1 |
| ix_lname_soundex | lname_soundex | no | 1 |
| ix_membercard_no | membercard_no | no | 1 |
| ix_oldcode | oldcode | no | 1 |
| ix_passport_no | passport_no | no | 1 |
| ix_pname | pname | no | 1 |
| ix_pttype | pttype | no | 1 |
| PRIMARY | hn | yes | 1 |
| PRIMARY | hos_guid | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
