# `clinicmember_cormobidity_stroke_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_cormobidity_stroke_screen_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_cormobidity_screen_id | int(11) | YES | MUL | NULL |  |  |
| father_mother_or_parent_stroke_id | int(11) | YES |  | NULL |  |  |
| smoking | char(1) | YES |  | NULL |  |  |
| bps_1 | int(11) | YES |  | NULL |  |  |
| bpd_1 | int(11) | YES |  | NULL |  |  |
| bps_2 | int(11) | YES |  | NULL |  |  |
| bpd_2 | int(11) | YES |  | NULL |  |  |
| bps_avg | double(15,3) | YES |  | NULL |  |  |
| bpd_avg | double(15,3) | YES |  | NULL |  |  |
| stroke_bp_risk_1 | char(1) | YES |  | NULL |  |  |
| capillary_blood_level | double(15,3) | YES |  | NULL |  |  |
| stroke_capillary_blood_risk_2 | char(1) | YES |  | NULL |  |  |
| lipid_abnormal_id | int(11) | YES |  | NULL |  |  |
| waist_cm | double(15,3) | YES |  | NULL |  |  |
| bmi | double(15,3) | YES |  | NULL |  |  |
| stroke_bmi_risk_3 | char(1) | YES |  | NULL |  |  |
| has_stroke_history | char(1) | YES |  | NULL |  |  |
| has_heart_disease_history | char(1) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_cormobidity_screen_id | clinicmember_cormobidity_screen_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_cormobidity_stroke_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
