# `dt_prosth_occ`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prosth_occ_id | int(11) | NO | PRI | 0 |  |  |
| dt_prosth_occ_maxi_rela | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_occ_canine_left_id | varchar(50) | YES |  | NULL |  |  |
| dt_prosth_occ_canine_right_id | varchar(50) | YES |  | NULL |  |  |
| dt_prosth_occ_angle_right_id | varchar(50) | YES |  | NULL |  |  |
| dt_prosth_occ_angle_left_id | varchar(50) | YES |  | NULL |  |  |
| dt_prosth_occ_vest_ol | double(15,2) | YES |  | NULL |  |  |
| dt_prosth_occ_ho_ol | double(15,2) | YES |  | NULL |  |  |
| dt_prosth_occ_plane_accept | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_occ_plane_note | varchar(255) | YES |  | NULL |  |  |
| dt_prosth_occ_malo_status | varchar(3) | YES |  | NULL |  |  |
| dt_prosth_occ_malo_note | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_occ_in_rest_space | double(15,2) | YES |  | NULL |  |  |
| dt_prosth_occ_vert_type | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_occ_vert_lnote | double(15,2) | YES |  | NULL |  |  |
| dt_prosth_occ_vert_onote | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_occ_closed_space | double(15,2) | YES |  | NULL |  |  |
| dt_prosth_occ_cen_occ_coin | varchar(25) | YES |  | NULL |  |  |
| dt_prosth_occ_cen_occ_note | varchar(255) | YES |  | NULL |  |  |
| dt_prosth_occ_ecc_gui | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_occ_ecc_gui_note | varchar(500) | YES |  | NULL |  |  |
| dt_prosth_occ_co_status | varchar(3) | YES |  | NULL |  |  |
| dt_prosth_occ_co_ynote | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_occ_max_in_status | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_occ_ecc_in_status | varchar(3) | YES |  | NULL |  |  |
| dt_prosth_occ_ecc_in_note | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prosth_main39 | dt_prosth_main_id | no | 1 |
| PRIMARY | dt_prosth_occ_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
