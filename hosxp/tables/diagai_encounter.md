# `diagai_encounter`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diagai_encounter_id | int(11) | NO | PRI | 0 |  |  |
| diagai_encounter_vn | varchar(13) | YES | UNI | NULL |  |  |
| diagai_encounter_hn | varchar(9) | YES |  | NULL |  |  |
| diagai_encounter_dchtype | varchar(100) | YES |  | NULL |  |  |
| diagai_encounter_dchstts | varchar(100) | YES |  | NULL |  |  |
| diagai_encounter_ispregnant | char(1) | YES |  | NULL |  |  |
| diagai_encounter_adjrw | int(11) | YES |  | NULL |  |  |
| diagai_encounter_rw | int(11) | YES |  | NULL |  |  |
| diagai_encounter_mdc | char(2) | YES |  | NULL |  |  |
| diagai_encounter_drgs | varchar(5) | YES |  | NULL |  |  |
| diagai_encounter_status | char(1) | YES |  | NULL |  |  |
| diagai_encounter_type | varchar(3) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| diagai_encounter_data | longtext | YES |  | NULL |  |  |
| diagai_encounter_request | longtext | YES |  | NULL |  |  |
| diagai_encounter_response | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_diagai_encounter_diagai_encounter_vn_idx | diagai_encounter_vn | yes | 1 |
| PRIMARY | diagai_encounter_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
