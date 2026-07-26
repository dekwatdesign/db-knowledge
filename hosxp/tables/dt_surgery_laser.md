# `dt_surgery_laser`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_laser_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_main_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_laser_date | datetime | YES |  | NULL |  |  |
| dt_surgery_laser_type_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_laser_dx_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_laser_freq_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_laser_equerry_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_laser_pulse_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_laser_erbium_chk | char(1) | YES |  | NULL |  |  |
| dt_surgery_laser_lo2_chk | char(1) | YES |  | NULL |  |  |
| dt_surgery_laser_lo2_chk_grp | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_laser_level | double(15,1) | YES |  | NULL |  |  |
| dt_surgery_laser_power | int(11) | YES |  | NULL |  |  |
| dt_surgery_laser_freq | int(11) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| dt_odiag_list_id | int(11) | YES |  | NULL |  |  |
| dt_odiag_name | text | YES |  | NULL |  |  |
| dt_surgery_brief_detail | text | YES |  | NULL |  |  |
| dt_surgery_radiograph | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_surgery_laser_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
