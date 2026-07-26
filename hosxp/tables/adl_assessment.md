# `adl_assessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adl_assessment_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| create_date | date | YES | MUL | NULL |  |  |
| create_time | time | YES |  | NULL |  |  |
| adl_feeding | smallint(6) | YES |  | NULL |  |  |
| adl_transfer_bed_chair | smallint(6) | YES |  | NULL |  |  |
| adl_grooming | smallint(6) | YES |  | NULL |  |  |
| adl_toilet_use | smallint(6) | YES |  | NULL |  |  |
| adl_bathing | smallint(6) | YES |  | NULL |  |  |
| adl_mobility | smallint(6) | YES |  | NULL |  |  |
| adl_stairs | smallint(6) | YES |  | NULL |  |  |
| adl_dressing | smallint(6) | YES |  | NULL |  |  |
| adl_bowel_control_week | smallint(6) | YES |  | NULL |  |  |
| adl_bladder_control_week | smallint(6) | YES |  | NULL |  |  |
| adl_score | smallint(6) | YES |  | NULL |  |  |
| adl_result_text | varchar(250) | YES |  | NULL |  |  |
| adl_result_recommend_text | varchar(250) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| adl_assessment_type | smallint(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_atlas_dyspnea_assessment_atlas_date_idx | create_date | no | 1 |
| ix_atlas_dyspnea_assessment_doctorcode_idx | doctor_code | no | 1 |
| ix_atlas_dyspnea_assessment_hn_idx | hn | no | 1 |
| ix_atlas_dyspnea_assessment_vn_idx | vn | no | 1 |
| PRIMARY | adl_assessment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
