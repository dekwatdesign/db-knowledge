# `clinicmember_cormobidity_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_cormobidity_screen_id | int(11) | NO | PRI | 0 |  |  |
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
| has_cardiovascular_cormobidity | char(1) | YES |  | NULL |  |  |
| has_cerebrovascular_cormobidity | char(1) | YES |  | NULL |  |  |
| has_peripheralvascular_cormobidity | char(1) | YES |  | NULL |  |  |
| has_dental_cormobidity | char(1) | YES |  | NULL |  |  |
| kidney_screen_text | text | YES |  | NULL |  |  |
| cardiovascular_screen_text | text | YES |  | NULL |  |  |
| cerebrovascular_screen_text | text | YES |  | NULL |  |  |
| peripheralvascular_screen_text | text | YES |  | NULL |  |  |
| dental_screen_text | text | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| do_foot_advice | char(1) | YES |  | NULL |  |  |
| do_stroke_screen | char(1) | YES |  | NULL |  |  |
| stroke_screen_risk_level_id | int(11) | YES |  | NULL |  |  |
| kidney_cr_value | varchar(20) | YES |  | NULL |  |  |
| kidney_urine_microalbumin_value | varchar(20) | YES |  | NULL |  |  |
| at_hospital | char(1) | YES |  | NULL |  |  |
| screen_bw | double(15,3) | YES |  | NULL |  |  |
| screen_height | double(15,3) | YES |  | NULL |  |  |
| screen_waist | double(15,3) | YES |  | NULL |  |  |
| screen_bps | int(11) | YES |  | NULL |  |  |
| screen_bpd | int(11) | YES |  | NULL |  |  |
| screen_doctor_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_cormobidity_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
