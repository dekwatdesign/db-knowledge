# `cm_dm_cmbty_stroke_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_dm_cmbty_stroke_screen_id | int(11) | NO | PRI | 0 |  |  |
| cm_dm_cmbty_screen_id | int(11) | YES | MUL | NULL |  |  |
| parent_stroke_id | int(11) | YES |  | NULL |  |  |
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
| hos_guid | char(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_screen_id | cm_dm_cmbty_screen_id | no | 1 |
| PRIMARY | cm_dm_cmbty_stroke_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
