# `psych_assess_health`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_health_id | int(11) | NO | PRI | 0 |  |  |
| vnan | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| psych_assess_health_date | date | YES |  | NULL |  |  |
| psych_assess_health_walk_no_pb | char(1) | YES |  | NULL |  |  |
| psych_assess_health_walk_mild | char(1) | YES |  | NULL |  |  |
| psych_assess_health_walk_mod | char(1) | YES |  | NULL |  |  |
| psych_assess_health_walk_very | char(1) | YES |  | NULL |  |  |
| psych_assess_health_walk_no | char(1) | YES |  | NULL |  |  |
| psych_assess_health_self_no_pb | char(1) | YES |  | NULL |  |  |
| psych_assess_health_self_mild | char(1) | YES |  | NULL |  |  |
| psych_assess_health_self_mod | char(1) | YES |  | NULL |  |  |
| psych_assess_health_self_very | char(1) | YES |  | NULL |  |  |
| psych_assess_health_self_no | char(1) | YES |  | NULL |  |  |
| psych_assess_health_act_no_pb | char(1) | YES |  | NULL |  |  |
| psych_assess_health_act_mild | char(1) | YES |  | NULL |  |  |
| psych_assess_health_act_mod | char(1) | YES |  | NULL |  |  |
| psych_assess_health_act_very | char(1) | YES |  | NULL |  |  |
| psych_assess_health_act_no | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sick_no_pb | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sick_mild | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sick_mod | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sick_very | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sick_no | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sad_no_pb | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sad_mild | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sad_mod | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sad_very | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sad_no | char(1) | YES |  | NULL |  |  |
| psych_assess_health_sum | int(11) | YES |  | NULL |  |  |
| psych_assess_health_result | int(11) | YES |  | NULL |  |  |
| staff_assess | varchar(50) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vnan | vnan | no | 1 |
| PRIMARY | psych_assess_health_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
