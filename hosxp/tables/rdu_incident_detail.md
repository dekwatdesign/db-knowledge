# `rdu_incident_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rdu_incident_detail_id | int(11) | NO | PRI | 0 |  |  |
| pass_criteria | char(1) | YES |  | NULL |  |  |
| pass_criteria_1 | char(1) | YES |  | NULL |  |  |
| pass_criteria_2 | char(1) | YES |  | NULL |  |  |
| pass_criteria_3 | char(1) | YES |  | NULL |  |  |
| pass_criteria_4 | char(1) | YES |  | NULL |  |  |
| pass_criteria_5 | char(1) | YES |  | NULL |  |  |
| pass_criteria_6 | char(1) | YES |  | NULL |  |  |
| pass_criteria_7 | char(1) | YES |  | NULL |  |  |
| pass_criteria_8 | char(1) | YES |  | NULL |  |  |
| pass_criteria_9 | char(1) | YES |  | NULL |  |  |
| rdu_incident_id | int(11) | YES | MUL | NULL |  |  |
| rdu_kpi_type_id | int(11) | YES | MUL | NULL |  |  |
| result_criteria_1 | varchar(255) | YES |  | NULL |  |  |
| result_criteria_2 | varchar(255) | YES |  | NULL |  |  |
| result_criteria_3 | varchar(255) | YES |  | NULL |  |  |
| result_criteria_4 | varchar(255) | YES |  | NULL |  |  |
| result_criteria_5 | varchar(255) | YES |  | NULL |  |  |
| result_criteria_6 | varchar(255) | YES |  | NULL |  |  |
| result_criteria_7 | varchar(255) | YES |  | NULL |  |  |
| result_criteria_8 | varchar(255) | YES |  | NULL |  |  |
| result_criteria_9 | varchar(255) | YES |  | NULL |  |  |
| is_dismiss_warning | char(1) | YES |  | NULL |  |  |
| dismiss_warning_reason | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refrdu_incident7 | rdu_incident_id | no | 1 |
| ix_Refrdu_kpi_type16 | rdu_kpi_type_id | no | 1 |
| PRIMARY | rdu_incident_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
