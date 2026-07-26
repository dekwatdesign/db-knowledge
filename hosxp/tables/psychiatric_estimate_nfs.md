# `psychiatric_estimate_nfs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_nfs_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_estimate_nfs_date | datetime | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_openeye_note | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_talk | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_move | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_coma_score | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_left_eye_size | varchar(10) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_left_eye_effect | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_rigth_eye_size | varchar(10) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_rigth_eye_effect | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_arm_normal | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_arm_cant_force_resist | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_arm_shifting_horizontal | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_arm_wagging_finger | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_arm_dont_move | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_leg_normal | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_leg_cant_force_resist | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_leg_shifting_horizontal | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_leg_wagging_finger | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_leg_dont_move | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_bps | varchar(15) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_pe | text | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_temperature | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_rr | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_saver | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_diag | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_time | datetime | YES |  | NULL |  |  |
| psychiatric_estimate_nfs_staff | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_nfs_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
