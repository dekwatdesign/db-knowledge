# `psychiatric_estimate_suicide`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_suicide_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_1 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_2 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_3 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_4 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_5 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_6 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_7 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_score | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_date | date | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_staff | varchar(10) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_1_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_2_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_3_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_4_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_5_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_6_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_7_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_sum_score | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_suicide_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_suicide_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
