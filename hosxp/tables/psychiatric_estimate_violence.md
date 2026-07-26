# `psychiatric_estimate_violence`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_violence_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_1 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_2 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_3 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_4 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_5 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_6 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_7 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_8 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_9 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_score | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_date | date | YES |  | NULL |  |  |
| psychiatric_estimate_violence_staff | varchar(10) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_sum_score | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_violence_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_violence_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
