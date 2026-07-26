# `ipt_labour_infant_certify`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_infant_certify_id | int(11) | NO | PRI | 0 |  |  |
| registrar_code | varchar(5) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| certify_year | int(11) | YES |  | NULL |  |  |
| certify_order_no | varchar(6) | YES |  | NULL |  |  |
| certify_date | date | YES |  | NULL |  |  |
| infant_pname | varchar(20) | YES |  | NULL |  |  |
| infant_fname | varchar(80) | YES |  | NULL |  |  |
| infant_midname | varchar(80) | YES |  | NULL |  |  |
| infant_lname | varchar(80) | YES |  | NULL |  |  |
| infant_cid | varchar(13) | YES |  | NULL |  |  |
| infant_sex | varchar(1) | YES |  | NULL |  |  |
| infant_nationality | varchar(3) | YES |  | NULL |  |  |
| infant_birth_date | date | YES |  | NULL |  |  |
| infant_birth_time | time | YES |  | NULL |  |  |
| infant_birth_lunar_date | varchar(1) | YES |  | NULL |  |  |
| infant_birth_lunar_month | varchar(2) | YES |  | NULL |  |  |
| infant_birth_lunar_year | varchar(2) | YES |  | NULL |  |  |
| infant_birth_lunar_updown | varchar(1) | YES |  | NULL |  |  |
| infant_birth_lunar_updown_night | varchar(2) | YES |  | NULL |  |  |
| infant_birth_place | varchar(50) | YES |  | NULL |  |  |
| infant_birth_place_addr | varchar(16) | YES |  | NULL |  |  |
| infant_birth_place_registrar_code | varchar(5) | YES |  | NULL |  |  |
| infant_birth_place_soi_code | varchar(5) | YES |  | NULL |  |  |
| infant_birth_place_road_code | varchar(4) | YES |  | NULL |  |  |
| infant_birth_place_trog_code | varchar(4) | YES |  | NULL |  |  |
| infant_village_id | varchar(8) | YES |  | NULL |  |  |
| father_cid | varchar(13) | YES |  | NULL |  |  |
| father_fname | varchar(50) | YES |  | NULL |  |  |
| father_lname | varchar(50) | YES |  | NULL |  |  |
| mother_cid | varchar(13) | YES |  | NULL |  |  |
| mother_fname | varchar(50) | YES |  | NULL |  |  |
| mother_lname | varchar(50) | YES |  | NULL |  |  |
| infant_order_no | int(11) | YES |  | NULL |  |  |
| infant_total | int(11) | YES |  | NULL |  |  |
| infant_total_alive | int(11) | YES |  | NULL |  |  |
| infant_die_after_born | int(11) | YES |  | NULL |  |  |
| infant_die_in_womb | int(11) | YES |  | NULL |  |  |
| infant_accoucheuse_code | varchar(1) | YES |  | NULL |  |  |
| infant_accoucheuse_detail | varchar(50) | YES |  | NULL |  |  |
| infant_accoucheuse_fname | varchar(50) | YES |  | NULL |  |  |
| infant_accoucheuse_lname | varchar(50) | YES |  | NULL |  |  |
| infant_accoucheuse_addr | varchar(150) | YES |  | NULL |  |  |
| infant_born_type | varchar(1) | YES |  | NULL |  |  |
| infant_born_twin_order_no | int(11) | YES |  | NULL |  |  |
| infant_womb_month | int(11) | YES |  | NULL |  |  |
| infant_womb_week | int(11) | YES |  | NULL |  |  |
| infant_weight | int(11) | YES |  | NULL |  |  |
| infant_injured_cause_womb | varchar(1) | YES |  | NULL |  |  |
| infant_injured_cause_womb_text | varchar(150) | YES |  | NULL |  |  |
| infant_abnormal | varchar(1) | YES |  | NULL |  |  |
| infant_abnormal_text | varchar(150) | YES |  | NULL |  |  |
| infant_ill_cause_womb | varchar(1) | YES |  | NULL |  |  |
| infant_ill_cause_womb_text | varchar(150) | YES |  | NULL |  |  |
| infant_ill_cause_non_womb | varchar(1) | YES |  | NULL |  |  |
| infant_ill_cause_non_womb_text | varchar(150) | YES |  | NULL |  |  |
| infant_ill_cause_born | varchar(1) | YES |  | NULL |  |  |
| infant_ill_cause_born_text | varchar(150) | YES |  | NULL |  |  |
| infant_born_special | varchar(1) | YES |  | NULL |  |  |
| infant_born_special_text | varchar(150) | YES |  | NULL |  |  |
| infant_registrar_name | varchar(100) | YES |  | NULL |  |  |
| infant_head_person_cid | varchar(13) | YES |  | NULL |  |  |
| infant_head_person_name | varchar(150) | YES |  | NULL |  |  |
| infant_authorize_cid | varchar(13) | YES |  | NULL |  |  |
| infant_note_text | varchar(150) | YES |  | NULL |  |  |
| infant_editor_cid | varchar(13) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| infant_accoucheuse_cid | varchar(13) | YES |  | NULL |  |  |
| ipt_labour_id | int(11) | YES |  | NULL |  |  |
| infant_number | int(11) | YES |  | NULL |  |  |
| export_status | varchar(1) | YES |  | NULL |  |  |
| register_status | varchar(1) | YES |  | NULL |  |  |
| ipt_labour_infant_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| father_midname | varchar(50) | YES |  | NULL |  |  |
| father_telephone | varchar(20) | YES |  | NULL |  |  |
| mother_midname | varchar(50) | YES |  | NULL |  |  |
| mother_telephone | varchar(20) | YES |  | NULL |  |  |
| infant_inform_born_date | date | YES |  | NULL |  |  |
| infant_inform_born_status | varchar(50) | YES |  | NULL |  |  |
| infant_head_length | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_labour_infant_certify_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
