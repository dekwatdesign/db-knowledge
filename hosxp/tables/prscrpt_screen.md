# `prscrpt_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_screen_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| prscrpt_screen_date_time | datetime | YES | MUL | NULL |  |  |
| bpd | double(15,3) | YES |  | NULL |  |  |
| bps | double(15,3) | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| cc | text | YES |  | NULL |  |  |
| hr | double(15,3) | YES |  | NULL |  |  |
| pe | text | YES |  | NULL |  |  |
| pulse | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| rr | double(15,3) | YES |  | NULL |  |  |
| height | int(11) | YES | MUL | NULL |  |  |
| screen_dep | char(3) | YES |  | NULL |  |  |
| fbs | double(15,3) | YES |  | NULL |  |  |
| cradle | char(1) | YES |  | NULL |  |  |
| bmi | double(15,3) | YES |  | NULL |  |  |
| tg | double(15,3) | YES |  | NULL |  |  |
| hdl | double(15,3) | YES |  | NULL |  |  |
| pregnancy | char(1) | YES |  | NULL |  |  |
| er_note | text | YES |  | NULL |  |  |
| found_allergy | char(1) | YES |  | NULL |  |  |
| hpi | text | YES |  | NULL |  |  |
| walk_id | int(11) | YES |  | NULL |  |  |
| cholesterol | double(15,3) | YES |  | NULL |  |  |
| waist | double(15,3) | YES |  | NULL |  |  |
| breast_feeding | char(1) | YES |  | NULL |  |  |
| opdscreen_patient_type_id | int(11) | YES |  | NULL |  |  |
| creatinine_kidney_percent | double(15,3) | YES |  | NULL |  |  |
| smoking_type_id | int(11) | YES |  | NULL |  |  |
| drinking_type_id | int(11) | YES |  | NULL |  |  |
| spo2 | double(15,3) | YES |  | NULL |  |  |
| o2sat | int(11) | YES |  | NULL |  |  |
| vaccine_screen_type_id | int(11) | YES |  | NULL |  |  |
| development_screen_type_id | int(11) | YES |  | NULL |  |  |
| ambu | char(1) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| pt_priority_id | int(11) | YES |  | NULL |  |  |
| prscrpt_reg_id | int(11) | YES |  | NULL |  |  |
| rx_home | char(1) | YES |  | NULL |  |  |
| prscrpt_reg_status_id | int(11) | YES |  | NULL |  |  |
| oapp_id | int(11) | YES |  | NULL |  |  |
| entry_date | date | YES |  | NULL |  |  |
| staff_screen | varchar(50) | YES |  | NULL |  |  |
| ems_tracking_used | char(1) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| prscrpt_delivery_add_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hn_height_index | hn | no | 1 |
| ix_hn_height_index | height | no | 2 |
| ix_hn_height_index_index | height | no | 1 |
| ix_hn_height_index_index | hn | no | 2 |
| ix_vstdate | prscrpt_screen_date_time | no | 1 |
| PRIMARY | prscrpt_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
