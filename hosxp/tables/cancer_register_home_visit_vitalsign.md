# `cancer_register_home_visit_vitalsign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_register_home_visit_vitalsign_id | int(11) | NO | PRI | 0 |  |  |
| cancer_register_home_visit_vitalsign_date | date | YES |  | NULL |  |  |
| cancer_register_home_visit_vitalsign_bps | double(13,3) | YES |  | NULL |  |  |
| cancer_register_home_visit_vitalsign_bpd | double(13,3) | YES |  | NULL |  |  |
| cancer_register_home_visit_vitalsign_wiegth | double(13,3) | YES |  | NULL |  |  |
| cancer_register_home_visit_vitalsign_higth | double(13,3) | YES |  | NULL |  |  |
| cancer_register_home_visit_vitalsign_bmi | double(13,3) | YES |  | NULL |  |  |
| cancer_register_home_visit_vitalsign_o2sat | double(13,3) | YES |  | NULL |  |  |
| cancer_register_home_visit_vitalsign_rr | double(13,3) | YES |  | NULL |  |  |
| cancer_register_home_visit_vitalsign_p | double(13,3) | YES |  | NULL |  |  |
| cancer_register_home_visit_vitalsign_t | double(13,3) | YES |  | NULL |  |  |
| cancer_register_home_visit_vitalsign_sugar | double(13,3) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_register_home_visit_vitalsign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
