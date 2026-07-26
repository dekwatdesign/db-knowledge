# `dt_screen_plaque`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_screen_plaque_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| dt_tooth_brush_type_id | int(11) | YES |  | NULL |  |  |
| dt_tooth_brush_by_id | int(11) | YES |  | NULL |  |  |
| dt_tooth_paste_type_id | int(11) | YES |  | NULL |  |  |
| dt_screen_tooth_paste_band | varchar(100) | YES |  | NULL |  |  |
| dt_screen_tooth_paste_fluoride | char(1) | YES |  | NULL |  |  |
| dt_screen_brushing_tech_id | int(11) | YES |  | NULL |  |  |
| dt_screen_brushing_tech_other | varchar(100) | YES |  | NULL |  |  |
| dt_screen_brushing_freq | varchar(50) | YES |  | NULL |  |  |
| dt_screen_brushing_duration | varchar(50) | YES |  | NULL |  |  |
| dt_screen_type_oral_aid_id | varchar(100) | YES |  | NULL |  |  |
| dt_screen_type_oral_aid_freq | varchar(50) | YES |  | NULL |  |  |
| dt_screen_type_oral_aid_other | varchar(100) | YES |  | NULL |  |  |
| dt_screen_mounth_type | varchar(100) | YES |  | NULL |  |  |
| dt_screen_mouthrinse_chk | char(1) | YES |  | NULL |  |  |
| dt_screen_fluoride | char(1) | YES |  | NULL |  |  |
| dt_screen_fluoride_freq | varchar(50) | YES |  | NULL |  |  |
| dt_screen_reason | varchar(250) | YES |  | NULL |  |  |
| dt_screen_appliance_id | int(11) | YES |  | NULL |  |  |
| dt_screen_appliance_type | varchar(100) | YES |  | NULL |  |  |
| dt_screen_appliance_care_id | int(11) | YES |  | NULL |  |  |
| dt_screen_appliance_remark | text | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| dt_screen_type_oral_aid | varchar(100) | YES |  | NULL |  |  |
| dt_screen_no_of_mouu_dur_brush | double(15,2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_screen_plaque_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
