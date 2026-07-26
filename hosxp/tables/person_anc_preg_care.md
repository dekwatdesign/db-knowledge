# `person_anc_preg_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_anc_preg_care_id | int(11) | NO | PRI | 0 |  |  |
| person_anc_id | int(11) | YES |  | NULL |  |  |
| care_date | date | YES |  | NULL |  |  |
| anc_preg_care_location_id | int(11) | YES |  | NULL |  |  |
| uterus_level_normal | char(1) | YES |  | NULL |  |  |
| lochia_normal | char(1) | YES |  | NULL |  |  |
| nipple_normal | char(1) | YES |  | NULL |  |  |
| albumin_level | varchar(25) | YES |  | NULL |  |  |
| sugar_level | varchar(25) | YES |  | NULL |  |  |
| advice_text | text | YES |  | NULL |  |  |
| perineum_normal | char(1) | YES |  | NULL |  |  |
| bps | double(15,3) | YES |  | NULL |  |  |
| bpd | double(15,3) | YES |  | NULL |  |  |
| rr | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| preg_care_number | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| care_time | time | YES |  | NULL |  |  |
| real_preg_care | char(1) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| hr | int(11) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | person_anc_preg_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
