# `psychiatric_estimate_suicide_week`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_suicide_week_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_estimate_suicide_id | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_1 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_2 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_3 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_4 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_5 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_6 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_1_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_2_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_3_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_4_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_5_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_6_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_date | date | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_score | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_staff | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_week_num | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_suicide_week_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
