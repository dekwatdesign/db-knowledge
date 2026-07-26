# `dt_fixed_crow`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_fixed_crow_id | int(11) | NO | PRI | 0 |  |  |
| dt_fixed_crow_mesial_picture | longblob | YES |  | NULL |  |  |
| dt_fixed_crow_incisal_picture | longblob | YES |  | NULL |  |  |
| dt_fixed_crow_distal_picture | longblob | YES |  | NULL |  |  |
| dt_fixed_crow_buccal_picture | longblob | YES |  | NULL |  |  |
| dt_fixed_crow_lingual_picture | longblob | YES |  | NULL |  |  |
| dt_fixed_crow_shade_chk | varchar(50) | YES |  | NULL |  |  |
| dt_fixed_crow_shade_note1 | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_crow_shade_note2 | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_crow_type_id | int(11) | YES |  | NULL |  |  |
| dt_fixed_crow_type_orther_note | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_crow_magin_type_id | int(11) | YES |  | NULL |  |  |
| dt_fixed_crow_bfinish_type_id | int(11) | YES |  | NULL |  |  |
| dt_fixed_crow_bfinish_value | double(18,2) | YES |  | NULL |  |  |
| dt_fixed_crow_lfinish_type_id | int(11) | YES |  | NULL |  |  |
| dt_fixed_crow_lfinish_value | double(18,2) | YES |  | NULL |  |  |
| dt_fixed_crow_location_id | int(11) | YES |  | NULL |  |  |
| dt_fixed_pontic_type_id | int(11) | YES |  | NULL |  |  |
| dt_fixed_alloys_type_id | int(11) | YES |  | NULL |  |  |
| dt_fixed_cement_type_id | int(11) | YES |  | NULL |  |  |
| dt_fixed_crow_cement__note | varchar(100) | YES |  | NULL |  |  |
| dt_fixed_crow_units | int(11) | YES |  | NULL |  |  |
| dt_fixed_crow_location_value | double(18,2) | YES |  | NULL |  |  |
| dt_fixed_main_id | int(11) | YES |  | NULL |  |  |
| staff_entry | varchar(20) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_fixed_crow_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
