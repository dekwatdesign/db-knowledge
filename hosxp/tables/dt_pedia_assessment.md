# `dt_pedia_assessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_assessment_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_assessment_cns | varchar(255) | YES |  | NULL |  |  |
| dt_pedia_assessment_cns_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_ehtis | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_ehtis_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_ihtis | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_ihtis_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_estis | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_estis_lac | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_assessment_estis_con | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_assessment_estis_swel | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_assessment_estis_abra | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_assessment_estis_infec | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_assessment_estis_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_istis | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_istis_note | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_occ_molar | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_assessment_occ_canine | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_assessment_occ_overj | double(18,2) | YES |  | NULL |  |  |
| dt_pedia_assessment_occ_overb | double(18,2) | YES |  | NULL |  |  |
| dt_pedia_assessment_occ_open | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_assessment_occ_cross | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_assessment_radio | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_radio_oth | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_assessment_radio_pat | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_main106 | dt_pedia_main_id | no | 1 |
| PRIMARY | dt_pedia_assessment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
