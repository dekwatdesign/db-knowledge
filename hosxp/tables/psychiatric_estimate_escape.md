# `psychiatric_estimate_escape`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_escape_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_1 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_2 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_3 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_4 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_5 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_6 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_7 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_8 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_9 | char(2) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_score | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_date | date | YES |  | NULL |  |  |
| psychiatric_estimate_escape_staff | varchar(10) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_sum_score | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_escape_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_escape_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
