# `dt_screen_personal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_screen_personal_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| dt_screen_personal_habit_chk | char(1) | YES |  | NULL |  |  |
| dt_screen_personal_hgrp_chk | varchar(150) | YES |  | NULL |  |  |
| dt_screen_personal_h_note1 | varchar(150) | YES |  | NULL |  |  |
| dt_screen_personal_h_note2 | varchar(150) | YES |  | NULL |  |  |
| dt_screen_personal_his_chk | char(1) | YES |  | NULL |  |  |
| smoking_type_id | int(11) | YES |  | NULL |  |  |
| dt_screen_personal_his_tbc_day | varchar(10) | YES |  | NULL |  |  |
| dt_screen_personal_his_tbc_drt | varchar(10) | YES |  | NULL |  |  |
| dt_screen_personal_his_tbc_sit | text | YES |  | NULL |  |  |
| dt_screen_betel_quid_type_id | int(11) | YES |  | NULL |  |  |
| dt_screen_personal_betel_day | varchar(10) | YES |  | NULL |  |  |
| dt_screen_personal_betel_drt | varchar(10) | YES |  | NULL |  |  |
| drinking_type_id | int(11) | YES |  | NULL |  |  |
| dt_screen_personal_drink_day | varchar(10) | YES |  | NULL |  |  |
| dt_screen_personal_drink_drt | varchar(10) | YES |  | NULL |  |  |
| dt_screen_personal_dietary_chk | varchar(150) | YES |  | NULL |  |  |
| dt_screen_personal_drug_chk | char(1) | YES |  | NULL |  |  |
| dt_screen_personal_drug_note | varchar(150) | YES |  | NULL |  |  |
| dt_screen_personal_other_chk | char(1) | YES |  | NULL |  |  |
| dt_screen_personal_other_note | varchar(150) | YES |  | NULL |  |  |
| staff_entry | varchar(20) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_screen_personal_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
