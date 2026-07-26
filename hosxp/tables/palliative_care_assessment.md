# `palliative_care_assessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_assessment_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_mobility | smallint(6) | YES |  | NULL |  |  |
| palliative_care_activity | smallint(6) | YES |  | NULL |  |  |
| palliative_care_progress | smallint(6) | YES |  | NULL |  |  |
| palliative_care_adl_support | smallint(6) | YES |  | NULL |  |  |
| palliative_care_feeding | smallint(6) | YES |  | NULL |  |  |
| palliative_care_consciousness | smallint(6) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| create_date | date | YES |  | NULL |  |  |
| create_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | palliative_care_assessment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
