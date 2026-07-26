# `cm_dm_cmbty_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_dm_cmbty_screen_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| screen_date | date | YES |  | NULL |  |  |
| screen_time | time | YES |  | NULL |  |  |
| screen_note | varchar(200) | YES |  | NULL |  |  |
| do_eye_screen | char(1) | YES |  | NULL |  |  |
| do_foot_screen | char(1) | YES |  | NULL |  |  |
| do_kidney_screen | char(1) | YES |  | NULL |  |  |
| do_cardiovascular_screen | char(1) | YES |  | NULL |  |  |
| do_cerebrovascular_screen | char(1) | YES |  | NULL |  |  |
| do_peripheralvascular_screen | char(1) | YES |  | NULL |  |  |
| do_dental_screen | char(1) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(30) | YES |  | NULL |  |  |
| has_eye_cormobidity | char(1) | YES |  | NULL |  |  |
| has_foot_cormobidity | char(1) | YES |  | NULL |  |  |
| has_kidney_cormobidity | char(1) | YES |  | NULL |  |  |
| has_cardio_cormobidity | char(1) | YES |  | NULL |  |  |
| has_cerebro_cormobidity | char(1) | YES |  | NULL |  |  |
| has_peripheral_cormobidity | char(1) | YES |  | NULL |  |  |
| has_dental_cormobidity | char(1) | YES |  | NULL |  |  |
| kidney_screen_text | text | YES |  | NULL |  |  |
| cardio_screen_text | text | YES |  | NULL |  |  |
| cerebro_screen_text | text | YES |  | NULL |  |  |
| peripheral_screen_text | text | YES |  | NULL |  |  |
| dental_screen_text | text | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| do_foot_advice | char(1) | YES |  | NULL |  |  |
| do_stroke_screen | char(1) | YES |  | NULL |  |  |
| stroke_screen_risk_level_id | int(11) | YES |  | NULL |  |  |
| kidney_cr_value | varchar(20) | YES |  | NULL |  |  |
| kidney_urine_microalb_value | varchar(20) | YES |  | NULL |  |  |
| kidney_gfr_ckd_value | varchar(20) | YES |  | NULL |  |  |
| kidney_gfr_epi_value | varchar(20) | YES |  | NULL |  |  |
| at_hospital | char(1) | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| waist | double(15,3) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| screen_hospcode | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cm_dm_cmbty_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
