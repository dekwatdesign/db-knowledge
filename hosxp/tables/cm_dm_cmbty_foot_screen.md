# `cm_dm_cmbty_foot_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_dm_cmbty_foot_screen_id | int(11) | NO | PRI | 0 |  |  |
| cm_dm_cmbty_screen_id | int(11) | YES | MUL | NULL |  |  |
| dmht_foot_scr_res_left_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_res_right_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_ulcer_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_hist_ulcer_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_hist_ampt_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_hist_sens_id | int(11) | YES |  | NULL |  |  |
| shoes_screen_text | varchar(200) | YES |  | NULL |  |  |
| dmht_foot_scr_nail_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_wart_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_footshape_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_hair_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_temp_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_tenia_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_skin_color_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_sensory_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_die_skin_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_post_tib_rt_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_post_tib_lt_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_dor_pedis_rt_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_scr_dor_pedis_lt_id | int(11) | YES |  | NULL |  |  |
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
| dmht_foot_scr_hist_ampt_date | date | YES |  | NULL |  |  |
| dmht_foot_scr_footshape_l_text | varchar(100) | YES |  | NULL |  |  |
| dmht_foot_scr_footshape_r_text | varchar(100) | YES |  | NULL |  |  |
| abi_left_text | varchar(100) | YES |  | NULL |  |  |
| abi_right_text | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_cormobidity_screen_id | cm_dm_cmbty_screen_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cm_dm_cmbty_foot_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
