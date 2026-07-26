# `dt_endo_follow_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_endo_follow_detail_id | int(11) | NO | PRI | 0 |  |  |
| dt_endo_follow_detail_obstime | varchar(10) | YES |  | NULL |  |  |
| dt_endo_follow_detail_date | date | YES |  | NULL |  |  |
| dt_endo_tissue_id | int(11) | YES |  | NULL |  |  |
| dt_endo_follow_detail_area1 | varchar(10) | YES |  | NULL |  |  |
| dt_endo_follow_detail_area2 | varchar(10) | YES |  | NULL |  |  |
| dt_endo_follow_detail_note | longtext | YES |  | NULL |  |  |
| dt_endo_follow_detail_tissue | varchar(100) | YES |  | NULL |  |  |
| dt_endo_follow_detail_prob | varchar(100) | YES |  | NULL |  |  |
| dt_endo_follow_detail_perc | varchar(100) | YES |  | NULL |  |  |
| dt_endo_evaluation_id | int(11) | YES |  | NULL |  |  |
| dt_endo_tx_need_id | int(11) | YES |  | NULL |  |  |
| dt_endo_follow_id | int(11) | YES |  | NULL |  |  |
| dt_endo_follow_detail_obs_y | int(11) | YES |  | NULL |  |  |
| dt_endo_follow_detail_obs_m | int(11) | YES |  | NULL |  |  |
| dt_endo_follow_detail_other | varchar(255) | YES |  | NULL |  |  |
| dt_endo_main_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_endo_follow_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
