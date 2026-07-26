# `forensic_death`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_death_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(13) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(13) | YES |  | NULL |  |  |
| forensic_death_no | varchar(10) | YES |  | NULL |  |  |
| forensic_death_serial | int(11) | YES |  | NULL |  |  |
| forensic_death_date | date | YES |  | NULL |  |  |
| forensic_death_time | time | YES |  | NULL |  |  |
| forensic_death_additional | longtext | YES |  | NULL |  |  |
| forensic_type_id | int(11) | YES |  | NULL |  |  |
| forensic_status | char(1) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| surface_examine | char(1) | YES |  | NULL |  |  |
| surgery_examine | char(1) | YES |  | NULL |  |  |
| biopsy_examine | char(1) | YES |  | NULL |  |  |
| transfer | char(1) | YES |  | NULL |  |  |
| transfer_hospcode | varchar(9) | YES |  | NULL |  |  |
| autopsy_death_type_id | int(11) | YES |  | NULL |  |  |
| budget_type_id | int(11) | YES |  | NULL |  |  |
| death_transfer | char(1) | YES |  | NULL |  |  |
| is_autopsy | char(1) | YES |  | NULL |  |  |
| forensic_cfm_id | int(11) | YES | MUL | NULL |  |  |
| out_side_exmaine | char(1) | YES |  | NULL |  |  |
| out_side_doctor | varchar(15) | YES |  | NULL |  |  |
| recieve | char(1) | YES |  | NULL |  |  |
| recieve_hospital | varchar(50) | YES |  | NULL |  |  |
| transfer_hospital | varchar(50) | YES |  | NULL |  |  |
| forensic_death_note | longtext | YES |  | NULL |  |  |
| forensic_death_place | varchar(255) | YES |  | NULL |  |  |
| crime_scene_examine | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refforensic_cfm28 | forensic_cfm_id | no | 1 |
| PRIMARY | forensic_death_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
