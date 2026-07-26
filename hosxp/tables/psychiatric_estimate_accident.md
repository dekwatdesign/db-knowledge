# `psychiatric_estimate_accident`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_accident_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_estimate_accident_take_drug | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_accident_apoplexy | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_accident_ect_treatment | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_accident_disability | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_accident_confuse | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_accident_other_disability | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_accident_score | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_accident_date | date | YES |  | NULL |  |  |
| psychiatric_estimate_accident_staff | varchar(10) | YES |  | NULL |  |  |
| psychiatric_estimate_accident_sum_score | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_accident_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_accident_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
