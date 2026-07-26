# `clinicmember_cormobidity_foot_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_cormobidity_foot_screen_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_cormobidity_screen_id | int(11) | YES | MUL | NULL |  |  |
| dmht_foot_screen_result_left_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_result_right_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_ulcer_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_history_ulcer_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_history_amputation_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_history_sensory_id | int(11) | YES |  | NULL |  |  |
| shoes_screen_text | varchar(200) | YES |  | NULL |  |  |
| dmht_foot_screen_nail_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_wart_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_footshape_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_hair_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_temperature_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_tenia_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_skin_color_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_sensory_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_die_skin_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_posterior_tibial_right_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_posterior_tibial_left_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_dorsalis_pedis_right_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_dorsalis_pedis_left_id | int(11) | YES |  | NULL |  |  |
| remark_text | varchar(200) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(40) | YES |  | NULL |  |  |
| sensory_left_point_1 | char(1) | YES |  | NULL |  |  |
| sensory_left_point_2 | char(1) | YES |  | NULL |  |  |
| sensory_left_point_3 | char(1) | YES |  | NULL |  |  |
| sensory_left_point_4 | char(1) | YES |  | NULL |  |  |
| sensory_left_point_5 | char(1) | YES |  | NULL |  |  |
| sensory_left_point_6 | char(1) | YES |  | NULL |  |  |
| sensory_right_point_1 | char(1) | YES |  | NULL |  |  |
| sensory_right_point_2 | char(1) | YES |  | NULL |  |  |
| sensory_right_point_3 | char(1) | YES |  | NULL |  |  |
| sensory_right_point_4 | char(1) | YES |  | NULL |  |  |
| sensory_right_point_5 | char(1) | YES |  | NULL |  |  |
| sensory_right_point_6 | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| dmht_foot_screen_history_amputation_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_cormobidity_screen_id | clinicmember_cormobidity_screen_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_cormobidity_foot_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
