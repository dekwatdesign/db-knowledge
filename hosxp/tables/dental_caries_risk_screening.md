# `dental_caries_risk_screening`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dcrs_screening_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| staff_entry | varchar(7) | YES |  | NULL |  |  |
| dcrs_note | text | YES |  | NULL |  |  |
| dcrs_screening_date | datetime | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| cause_fluoride_risk | char(1) | YES |  | NULL |  |  |
| cause_sugar_risk | char(1) | YES |  | NULL |  |  |
| sugar_per_time | int(11) | YES |  | NULL |  |  |
| health_special_risk | char(1) | YES |  | NULL |  |  |
| health_chemo_risk | char(1) | YES |  | NULL |  |  |
| health_drymed_risk | char(1) | YES |  | NULL |  |  |
| clin_caries_risk | char(1) | YES |  | NULL |  |  |
| clin_extract_risk | char(1) | YES |  | NULL |  |  |
| clin_plaque_risk | char(1) | YES |  | NULL |  |  |
| clin_shape_risk | char(1) | YES |  | NULL |  |  |
| clin_proxfill_risk | char(1) | YES |  | NULL |  |  |
| clin_rootexp_risk | char(1) | YES |  | NULL |  |  |
| clin_foodret_risk | char(1) | YES |  | NULL |  |  |
| clin_appliance_risk | char(1) | YES |  | NULL |  |  |
| clin_xerostomia_risk | char(1) | YES |  | NULL |  |  |
| overall_risk_level | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dcrs_screening_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
