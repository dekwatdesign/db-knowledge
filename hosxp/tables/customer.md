# `customer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| customer_id | int(11) | NO | PRI | 0 |  |  |
| customer_pname | varchar(50) | YES |  | NULL |  |  |
| customer_fname | varchar(100) | YES |  | NULL |  |  |
| customer_lname | varchar(100) | YES |  | NULL |  |  |
| customer_address1 | varchar(200) | YES |  | NULL |  |  |
| customer_address2 | varchar(200) | YES |  | NULL |  |  |
| customer_phone | varchar(100) | YES |  | NULL |  |  |
| customer_mobile | varchar(100) | YES |  | NULL |  |  |
| customer_email | varchar(100) | YES |  | NULL |  |  |
| customer_note | longtext | YES |  | NULL |  |  |
| customer_birthdate | date | YES |  | NULL |  |  |
| customer_drug_allergy | text | YES |  | NULL |  |  |
| customer_cid | varchar(13) | YES |  | NULL |  |  |
| customer_blood_group | varchar(10) | YES |  | NULL |  |  |
| customer_chornic_dz | text | YES |  | NULL |  |  |
| customer_sex | int(11) | YES |  | NULL |  |  |
| customer_number | varchar(50) | YES |  | NULL |  |  |
| customer_health_id | varchar(50) | YES |  | NULL |  |  |
| customer_nickname | varchar(100) | YES |  | NULL |  |  |
| customer_addrpart | varchar(50) | YES |  | NULL |  |  |
| customer_moopart | char(3) | YES |  | NULL |  |  |
| customer_tmbpart | char(2) | YES |  | NULL |  |  |
| customer_amppart | char(2) | YES |  | NULL |  |  |
| customer_chwpart | char(2) | YES |  | NULL |  |  |
| customer_road | varchar(50) | YES |  | NULL |  |  |
| customer_soi | varchar(100) | YES |  | NULL |  |  |
| customer_postcode | varchar(5) | YES |  | NULL |  |  |
| current_addrpart | varchar(50) | YES |  | NULL |  |  |
| current_moopart | char(3) | YES |  | NULL |  |  |
| current_tmbpart | char(2) | YES |  | NULL |  |  |
| current_amppart | char(2) | YES |  | NULL |  |  |
| current_chwpart | char(2) | YES |  | NULL |  |  |
| current_road | varchar(50) | YES |  | NULL |  |  |
| current_soi | varchar(100) | YES |  | NULL |  |  |
| current_postcode | varchar(5) | YES |  | NULL |  |  |
| customer_regist_date | date | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| customer_level_id | int(11) | YES |  | NULL |  |  |
| customer_point | int(11) | YES |  | NULL |  |  |
| nhso_service | char(1) | YES |  | NULL |  |  |
| customer_hn | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | customer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
