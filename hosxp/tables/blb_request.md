# `blb_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_request_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| an | varchar(13) | YES | MUL | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| blb_request_department | char(3) | YES |  | NULL |  |  |
| blb_request_doctor | varchar(10) | YES |  | NULL |  |  |
| blb_request_order_date | date | YES |  | NULL |  |  |
| blb_request_order_time | time | YES |  | NULL |  |  |
| blood_id | int(11) | YES | MUL | NULL |  |  |
| rh_id | int(11) | YES | MUL | NULL |  |  |
| blb_request_diag | char(10) | YES |  | NULL |  |  |
| blb_request_punct_staff | varchar(10) | YES |  | NULL |  |  |
| blb_request_punct_date | date | YES |  | NULL |  |  |
| blb_request_punct_time | time | YES |  | NULL |  |  |
| blb_request_type_id | int(11) | YES | MUL | NULL |  |  |
| blb_request_sample_no | varchar(20) | YES |  | NULL |  |  |
| blb_request_lab_cell_a | int(11) | YES |  | NULL |  |  |
| blb_request_lab_cell_b | int(11) | YES |  | NULL |  |  |
| blb_request_lab_cell_d | int(11) | YES |  | NULL |  |  |
| blb_request_lab_cell_ab | int(11) | YES |  | NULL |  |  |
| blb_request_lab_serum_a | int(11) | YES |  | NULL |  |  |
| blb_request_lab_serum_b | int(11) | YES |  | NULL |  |  |
| blb_request_lab_serum_o | int(11) | YES |  | NULL |  |  |
| blb_request_lab_abo | int(11) | YES |  | NULL |  |  |
| blb_request_lab_rh | int(11) | YES |  | NULL |  |  |
| blb_request_lab_idn | varchar(100) | YES | MUL | NULL |  |  |
| blb_request_lock | char(1) | YES |  | NULL |  |  |
| blb_request_lab_note | text | YES |  | NULL |  |  |
| blb_request_receive_no | int(11) | YES |  | NULL |  |  |
| blb_request_receive_staff | char(6) | YES |  | NULL |  |  |
| blb_request_receive_date | date | YES |  | NULL |  |  |
| blb_request_receive_time | time | YES |  | NULL |  |  |
| blb_request_doctor_note | text | YES |  | NULL |  |  |
| blb_request_status_id | int(11) | YES | MUL | NULL |  |  |
| blb_request_use_date | date | YES |  | NULL |  |  |
| blb_request_use_time | time | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_request_cancel_note | varchar(250) | YES | MUL | NULL |  |  |
| blb_request_emergency | varchar(100) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| blb_request_antibody_result | varchar(255) | YES | MUL | NULL |  |  |
| blb_request_return_doctor | char(6) | YES |  | NULL |  |  |
| blb_request_return_date | date | YES |  | NULL |  |  |
| blb_request_return_time | time | YES |  | NULL |  |  |
| blb_request_crossmatch_done | char(1) | YES |  | NULL |  |  |
| blb_request_lab_hct | varchar(50) | YES |  | NULL |  |  |
| blb_request_lab_hgb | varchar(50) | YES |  | NULL |  |  |
| blb_request_lab_plt | varchar(50) | YES |  | NULL |  |  |
| blb_autologous_rt | varchar(50) | YES |  | NULL |  |  |
| blb_autologous_37c | varchar(50) | YES |  | NULL |  |  |
| blb_autologous_iat | varchar(50) | YES |  | NULL |  |  |
| blb_autologous_result | varchar(250) | YES |  | NULL |  |  |
| blb_autologous_doctor | char(6) | YES |  | NULL |  |  |
| blb_autologous_datetime | datetime | YES |  | NULL |  |  |
| blb_dat | varchar(50) | YES |  | NULL |  |  |
| blb_dat_result | varchar(250) | YES |  | NULL |  |  |
| blb_dat_result_doctor | char(6) | YES |  | NULL |  |  |
| blb_dat_datetime | datetime | YES |  | NULL |  |  |
| blb_antibody_datetime | datetime | YES | MUL | NULL |  |  |
| blb_antibody_doctor | char(6) | YES | MUL | NULL |  |  |
| blb_request_old_tube | char(1) | YES |  | NULL |  |  |
| blb_request_other_hosp | char(1) | YES |  | NULL |  |  |
| blb_request_other_hospcode | varchar(9) | YES |  | NULL |  |  |
| insert_staff | varchar(100) | YES |  | NULL |  |  |
| blb_request_antigen_result | varchar(255) | YES |  | NULL |  |  |
| blb_antigen_datetime | datetime | YES |  | NULL |  |  |
| blb_antigen_doctor | char(6) | YES |  | NULL |  |  |
| blb_request_lab_cell_a1 | int(11) | YES |  | NULL |  |  |
| blb_request_lab_cell_h | int(11) | YES |  | NULL |  |  |
| blb_ident_datetime | datetime | YES |  | NULL |  |  |
| blb_ident_doctor | char(6) | YES |  | NULL |  |  |
| blb_request_lab_cell_group | int(11) | YES |  | NULL |  |  |
| blb_request_lab_serum_group | int(11) | YES |  | NULL |  |  |
| blb_request_not_pay_receive | char(1) | YES |  | NULL |  |  |
| blb_request_rec_ans_staff | varchar(100) | YES |  | NULL |  |  |
| blb_request_rec_ans_datetime | datetime | YES |  | NULL |  |  |
| blb_antibody_approve | char(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_blb_antibody_datetime | blb_antibody_datetime | no | 1 |
| ix_blb_antibody_doctor | blb_antibody_doctor | no | 1 |
| ix_blb_bloodgroup_id | blood_id | no | 1 |
| ix_blb_emergency_status_id | blb_request_type_id | no | 1 |
| ix_blb_request_antibody_result | blb_request_antibody_result | no | 1 |
| ix_blb_request_cancel_note | blb_request_cancel_note | no | 1 |
| ix_blb_request_lab_idn | blb_request_lab_idn | no | 1 |
| ix_blb_request_status_id | blb_request_status_id | no | 1 |
| ix_hn | hn | no | 1 |
| ix_rh_id | rh_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | blb_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
