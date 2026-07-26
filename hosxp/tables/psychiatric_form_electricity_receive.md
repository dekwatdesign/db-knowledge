# `psychiatric_form_electricity_receive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_form_electricity_receive_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_form_electricity_receive_date | date | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_parent_fullname | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_parent_age | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_parent_addrpart | varchar(20) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_parent_road | varchar(255) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_parent_tmbpart | char(2) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_parent_amppart | char(2) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_parent_chwpart | char(2) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_parent_type | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_parent_accept_fullname | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_evide1 | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_evide2 | varchar(250) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_doctor_date | date | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| ward_id | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_doctor_id2 | int(11) | YES |  | NULL |  |  |
| psychiatric_form_electricity_receive_doctor_id1 | int(11) | YES |  | NULL |  |  |
| opduser_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_form_electricity_receive_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
