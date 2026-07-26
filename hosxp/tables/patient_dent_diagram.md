# `patient_dent_diagram`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_dent_diagram_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| teeth_number | int(11) | YES |  | NULL |  |  |
| probing_depth_1 | int(11) | YES |  | NULL |  |  |
| probing_depth_2 | int(11) | YES |  | NULL |  |  |
| probing_depth_3 | int(11) | YES |  | NULL |  |  |
| probing_depth_4 | int(11) | YES |  | NULL |  |  |
| probing_depth_5 | int(11) | YES |  | NULL |  |  |
| probing_depth_6 | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| is_extraction | char(1) | YES |  | NULL |  |  |
| jpg_image | longblob | YES |  | NULL |  |  |
| zone_a_color | int(11) | YES |  | NULL |  |  |
| zone_b_color | int(11) | YES |  | NULL |  |  |
| zone_c_color | int(11) | YES |  | NULL |  |  |
| zone_d_color | int(11) | YES |  | NULL |  |  |
| zone_e_color | int(11) | YES |  | NULL |  |  |
| zone_f_color | int(11) | YES |  | NULL |  |  |
| no_eruption | char(1) | YES |  | NULL |  |  |
| zone_a_hidden | char(1) | YES |  | NULL |  |  |
| zone_b_hidden | char(1) | YES |  | NULL |  |  |
| zone_c_hidden | char(1) | YES |  | NULL |  |  |
| zone_d_hidden | char(1) | YES |  | NULL |  |  |
| zone_e_hidden | char(1) | YES |  | NULL |  |  |
| zone_f_hidden | char(1) | YES |  | NULL |  |  |
| dental_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| PRIMARY | patient_dent_diagram_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
