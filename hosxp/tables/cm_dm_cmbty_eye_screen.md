# `cm_dm_cmbty_eye_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_dm_cmbty_eye_screen_id | int(11) | NO | PRI | 0 |  |  |
| cm_dm_cmbty_screen_id | int(11) | YES | MUL | NULL |  |  |
| dmht_eye_screen_res_left_id | int(11) | YES |  | NULL |  |  |
| dmht_eye_screen_res_right_id | int(11) | YES |  | NULL |  |  |
| va_left_text | varchar(100) | YES |  | NULL |  |  |
| va_right_text | varchar(100) | YES |  | NULL |  |  |
| iop_left_text | varchar(100) | YES |  | NULL |  |  |
| iop_right_text | varchar(100) | YES |  | NULL |  |  |
| dmht_eye_screen_macular_id | int(11) | YES |  | NULL |  |  |
| dmht_eye_screen_laser_id | int(11) | YES |  | NULL |  |  |
| dmht_eye_screen_cataract_id | int(11) | YES |  | NULL |  |  |
| dmht_eye_screen_surgery_id | int(11) | YES |  | NULL |  |  |
| oth_dz_left_text | varchar(100) | YES |  | NULL |  |  |
| oth_dz_right_text | varchar(100) | YES |  | NULL |  |  |
| treatment_text | varchar(100) | YES |  | NULL |  |  |
| remark_text | varchar(200) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(50) | YES |  | NULL |  |  |
| dmht_eye_screen_blindness_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| dmht_eye_screen_type_id | int(11) | YES |  | NULL |  |  |
| vap_left_text | varchar(100) | YES |  | NULL |  |  |
| vap_right_text | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_cormobidity_screen_id | cm_dm_cmbty_screen_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cm_dm_cmbty_eye_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
