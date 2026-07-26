# `rpt_506ds`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rpt_506ds_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| rpt_datetime | datetime | YES |  | NULL |  |  |
| source_list_text | text | YES |  | NULL |  |  |
| a1_code | varchar(10) | YES |  | NULL |  |  |
| a1_zip | varchar(5) | YES |  | NULL |  |  |
| a1_text | varchar(150) | YES |  | NULL |  |  |
| a3_addrpart | varchar(20) | YES |  | NULL |  |  |
| a3_moopart | varchar(10) | YES |  | NULL |  |  |
| a3_village_name | varchar(25) | YES |  | NULL |  |  |
| a3_soi | varchar(25) | YES |  | NULL |  |  |
| a3_road | varchar(25) | YES |  | NULL |  |  |
| a3_tmb_name | varchar(30) | YES |  | NULL |  |  |
| a3_amp_name | varchar(30) | YES |  | NULL |  |  |
| a3_chw_name | varchar(30) | YES |  | NULL |  |  |
| a3_zip | varchar(5) | YES |  | NULL |  |  |
| a4_name | varchar(150) | YES |  | NULL |  |  |
| a4_code | varchar(10) | YES |  | NULL |  |  |
| a5_code | varchar(10) | YES |  | NULL |  |  |
| a5_age_y | int(11) | YES |  | NULL |  |  |
| a5_cid | varchar(13) | YES |  | NULL |  |  |
| a6_addrpart | varchar(20) | YES |  | NULL |  |  |
| a6_moopart | varchar(10) | YES |  | NULL |  |  |
| a6_village_name | varchar(25) | YES |  | NULL |  |  |
| a6_soi | varchar(25) | YES |  | NULL |  |  |
| a6_road | varchar(25) | YES |  | NULL |  |  |
| a6_tmb_name | varchar(30) | YES |  | NULL |  |  |
| a6_amp_name | varchar(30) | YES |  | NULL |  |  |
| a6_chw_name | varchar(30) | YES |  | NULL |  |  |
| a6_zip | varchar(5) | YES |  | NULL |  |  |
| a7_code | varchar(10) | YES |  | NULL |  |  |
| a8_code | varchar(10) | YES |  | NULL |  |  |
| b2_date | date | YES |  | NULL |  |  |
| b2_code | varchar(10) | YES |  | NULL |  |  |
| b2_note | varchar(50) | YES |  | NULL |  |  |
| b31_code | varchar(10) | YES |  | NULL |  |  |
| b32_code | varchar(10) | YES |  | NULL |  |  |
| b4_check | char(1) | YES |  | NULL |  |  |
| b41_code | varchar(10) | YES |  | NULL |  |  |
| b5_check | char(1) | YES |  | NULL |  |  |
| b6_check | char(1) | YES |  | NULL |  |  |
| b6_note | varchar(50) | YES |  | NULL |  |  |
| b7_code | varchar(10) | YES |  | NULL |  |  |
| b8_month | varchar(20) | YES |  | NULL |  |  |
| b8_year | int(11) | YES |  | NULL |  |  |
| b9_code | varchar(10) | YES |  | NULL |  |  |
| b9_note | varchar(50) | YES |  | NULL |  |  |
| problem_list_text | text | YES |  | NULL |  |  |
| health_problem_text | text | YES |  | NULL |  |  |
| habit_text | text | YES |  | NULL |  |  |
| service_list_text | text | YES |  | NULL |  |  |
| d2_check | char(1) | YES |  | NULL |  |  |
| d3_check | char(1) | YES |  | NULL |  |  |
| d4_date | date | YES |  | NULL |  |  |
| d4_time | time | YES |  | NULL |  |  |
| d4_note | varchar(100) | YES |  | NULL |  |  |
| d5_check | char(1) | YES |  | NULL |  |  |
| d6_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rpt_506ds_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
