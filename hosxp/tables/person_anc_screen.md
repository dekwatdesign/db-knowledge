# `person_anc_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_anc_screen_id | int(11) | NO | PRI | 0 |  |  |
| person_anc_service_id | int(11) | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| albumin | varchar(25) | YES |  | NULL |  |  |
| bmi | double(15,3) | YES |  | NULL |  |  |
| sugar | varchar(25) | YES |  | NULL |  |  |
| anc_uterus_level_id | int(11) | YES |  | NULL |  |  |
| cc_text | text | YES |  | NULL |  |  |
| anc_baby_position_id | int(11) | YES |  | NULL |  |  |
| anc_baby_lead_id | int(11) | YES |  | NULL |  |  |
| baby_fetal_heart_sound | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| dt_screen1 | char(1) | YES |  | NULL |  |  |
| dt_screen2 | char(1) | YES |  | NULL |  |  |
| dt_screen3 | char(1) | YES |  | NULL |  |  |
| dt_screen4 | char(1) | YES |  | NULL |  |  |
| dt_screen5 | char(1) | YES |  | NULL |  |  |
| dt_decay_count | int(11) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| baby_fetal_heart_text | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_anc_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
