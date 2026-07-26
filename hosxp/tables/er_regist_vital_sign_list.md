# `er_regist_vital_sign_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_regist_vital_sign_list_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| vital_sign_date | date | YES |  | NULL |  |  |
| vital_sign_time | time | YES |  | NULL |  |  |
| vital_sign_temperature | double(15,3) | YES |  | NULL |  |  |
| vital_sign_bps | int(11) | YES |  | NULL |  |  |
| vital_sign_bpd | int(11) | YES |  | NULL |  |  |
| vital_sign_pr | int(11) | YES |  | NULL |  |  |
| vital_sign_rr | int(11) | YES |  | NULL |  |  |
| neuro_sign_e | int(11) | YES |  | NULL |  |  |
| neuro_sign_v | int(11) | YES |  | NULL |  |  |
| neuro_sign_m | int(11) | YES |  | NULL |  |  |
| pupil_rt | double(15,3) | YES |  | NULL |  |  |
| pupil_rtl | char(1) | YES |  | NULL |  |  |
| pupil_lt | double(15,3) | YES |  | NULL |  |  |
| pupil_ltl | char(1) | YES |  | NULL |  |  |
| o2sat | double(15,3) | YES |  | NULL |  |  |
| dtx | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | er_regist_vital_sign_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
