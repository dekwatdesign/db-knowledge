# `patient_behavior_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_behavior_list_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| person_behavior_id | int(11) | YES |  | NULL |  |  |
| person_behavior_value | varchar(100) | YES |  | NULL |  |  |
| person_behavior_text | varchar(1500) | YES |  | NULL |  |  |
| provider_cid | varchar(13) | YES |  | NULL |  |  |
| provider_name | varchar(50) | YES |  | NULL |  |  |
| recorded_datetime | datetime | YES |  | NULL |  |  |
| person_behavior_goal_text | varchar(1500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| PRIMARY | patient_behavior_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
