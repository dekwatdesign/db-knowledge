# `ckup_eye`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_eye_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| ckup_medical_visit_id | int(11) | YES | MUL | NULL |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| ckup_eye_level_right_result | varchar(150) | YES |  | NULL |  |  |
| ckup_eye_level_left_result | varchar(150) | YES |  | NULL |  |  |
| ckup_eye_va_rightlevel_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_va_leftlevel_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_ph_rightlevel_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_ph_leftlevel_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_note | text | YES |  | NULL |  |  |
| ckup_eye_abnormal_right | char(1) | YES |  | NULL |  |  |
| ckup_eye_abnormal_right_note | varchar(250) | YES |  | NULL |  |  |
| ckup_eye_abnormal_left | char(1) | YES |  | NULL |  |  |
| ckup_eye_abnormal_left_note | varchar(250) | YES |  | NULL |  |  |
| ckup_eye_abnormal_color | char(1) | YES |  | NULL |  |  |
| ckup_eye_abnormal_color_note | varchar(250) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |
| ckup_eye_va_right_far_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_va_left_far_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_ph_right_far_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_ph_left_far_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_va_right_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_va_left_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_ph_right_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_ph_left_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_va_right_far_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_va_left_far_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_ph_right_far_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_ph_left_far_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_pressure_left | int(11) | YES |  | NULL |  |  |
| ckup_eye_pressure_right | int(11) | YES |  | NULL |  |  |
| ckup_eye_abnormal_3d | char(1) | YES |  | NULL |  |  |
| ckup_eye_abnormal_squint | char(1) | YES |  | NULL |  |  |
| ckup_eye_abnormal_sight | char(1) | YES |  | NULL |  |  |
| ckup_eye_va_mid_left_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_ph_mid_left_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_ph_mid_right_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_va_mid_right_typeid | int(11) | YES |  | NULL |  |  |
| ckup_eye_va_mid_left_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_ph_mid_left_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_va_mid_right_note | varchar(255) | YES |  | NULL |  |  |
| ckup_eye_ph_mid_right_note | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_medical_visit_id | ckup_medical_visit_id | no | 1 |
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| PRIMARY | ckup_eye_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
