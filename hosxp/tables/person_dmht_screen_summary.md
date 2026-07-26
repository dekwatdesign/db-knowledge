# `person_dmht_screen_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dmht_screen_summary_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| person_dm_screen_status_id | int(11) | YES |  | NULL |  |  |
| person_ht_screen_status_id | int(11) | YES |  | NULL |  |  |
| person_dmht_cormobidity_eye | char(1) | YES |  | NULL |  |  |
| person_dmht_cormobidity_kidney | char(1) | YES |  | NULL |  |  |
| person_dmht_cormobidity_foot | char(1) | YES |  | NULL |  |  |
| person_dmht_cormobidity_heart | char(1) | YES |  | NULL |  |  |
| person_dmht_cormobidity_brain | char(1) | YES |  | NULL |  |  |
| bdg_year | int(11) | YES | MUL | NULL |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| house_id | int(11) | YES |  | NULL |  |  |
| dm_patient | char(1) | YES |  | NULL |  |  |
| ht_patient | char(1) | YES |  | NULL |  |  |
| last_screen_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| person_stroke_screen_status_id | int(11) | YES |  | NULL |  |  |
| person_obesity_screen_status_id | int(11) | YES |  | NULL |  |  |
| person_dmht_manage_type_id | int(11) | YES |  | NULL |  |  |
| dm_screen_score | int(11) | YES |  | NULL |  |  |
| status_active | char(1) | YES |  | NULL |  |  |
| online_send | char(1) | YES |  | NULL |  |  |
| online_send_hospcode | varchar(9) | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| person_mi_screen_status_id | int(11) | YES |  | NULL |  |  |
| fake_seq_id | int(11) | YES | MUL | NULL |  |  |
| person_age_y | int(11) | YES |  | NULL |  |  |
| dm_risk_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bdg_year | bdg_year | no | 1 |
| ix_cid | cid | no | 1 |
| ix_fake_seq_id | fake_seq_id | no | 1 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dmht_screen_summary_unique | person_id | yes | 1 |
| ix_person_dmht_screen_summary_unique | bdg_year | yes | 2 |
| ix_person_dmht_screen_summary_unique_index | bdg_year | yes | 1 |
| ix_person_dmht_screen_summary_unique_index | person_id | yes | 2 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_dmht_screen_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
