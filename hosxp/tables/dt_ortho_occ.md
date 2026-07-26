# `dt_ortho_occ`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_ortho_occ_id | int(11) | NO | PRI | 0 |  |  |
| dt_tooth_class_id1 | int(11) | YES |  | NULL |  |  |
| dt_tooth_class_id1_value | double(15,2) | YES |  | NULL |  |  |
| dt_tooth_class_id2 | int(11) | YES |  | NULL |  |  |
| dt_tooth_class_id2_value | double(15,2) | YES |  | NULL |  |  |
| dt_tooth_class_id3 | int(11) | YES |  | NULL |  |  |
| dt_tooth_class_id3_value | double(15,2) | YES |  | NULL |  |  |
| dt_tooth_class_id4 | int(11) | YES |  | NULL |  |  |
| dt_tooth_class_id4_value | double(15,2) | YES |  | NULL |  |  |
| dt_ortho_occ_overjet | double(15,2) | YES |  | NULL |  |  |
| dt_ortho_occ_overbite | double(15,2) | YES |  | NULL |  |  |
| dt_ortho_occ_crossbite | varchar(255) | YES |  | NULL |  |  |
| dt_ortho_occ_cocrshift_chk | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_occ_cocrshift_note | varchar(255) | YES |  | NULL |  |  |
| dt_ortho_occ_upper_chk | varchar(100) | YES |  | NULL |  |  |
| dt_ortho_occ_upper_note | varchar(255) | YES |  | NULL |  |  |
| dt_ortho_occ_lower_chk | varchar(100) | YES |  | NULL |  |  |
| dt_ortho_occ_lower_note | varchar(255) | YES |  | NULL |  |  |
| dt_ortho_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_ortho_main1 | dt_ortho_main_id | no | 1 |
| PRIMARY | dt_ortho_occ_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
