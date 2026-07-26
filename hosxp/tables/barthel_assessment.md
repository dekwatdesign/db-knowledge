# `barthel_assessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| barthel_assessment_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| create_date | date | YES | MUL | NULL |  |  |
| create_time | time | YES |  | NULL |  |  |
| barthel_feeding | smallint(6) | YES |  | NULL |  |  |
| barthel_transfer_bed | smallint(6) | YES |  | NULL |  |  |
| barthel_grooming | smallint(6) | YES |  | NULL |  |  |
| barthel_toilet_use | smallint(6) | YES |  | NULL |  |  |
| barthel_bathing | smallint(6) | YES |  | NULL |  |  |
| barthel_mobility | smallint(6) | YES |  | NULL |  |  |
| barthel_stairs | smallint(6) | YES |  | NULL |  |  |
| barthel_dressing | smallint(6) | YES |  | NULL |  |  |
| barthel_bowel_control | smallint(6) | YES |  | NULL |  |  |
| barthel_bladder_control | smallint(6) | YES |  | NULL |  |  |
| barthel_score | smallint(6) | YES |  | NULL |  |  |
| barthel_result_text | varchar(250) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| barthel_assessment_type | smallint(6) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_atlas_barthel_assessment_atlas_date_idx | create_date | no | 1 |
| ix_atlas_barthel_assessment_doctorcode_idx | doctor_code | no | 1 |
| ix_atlas_barthel_assessment_hn_idx | hn | no | 1 |
| ix_atlas_barthel_assessment_vn_idx | vn | no | 1 |
| PRIMARY | barthel_assessment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
