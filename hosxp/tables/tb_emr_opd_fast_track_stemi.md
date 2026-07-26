# `tb_emr_opd_fast_track_stemi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(15) | NO | PRI |  |  |  |
| loginname | varchar(50) | NO | PRI |  |  |  |
| insert_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| insert_fullname | varchar(200) | YES |  | NULL |  |  |
| fast_track_stemi_text | text | YES |  | NULL |  |  |
| delete_user | varchar(50) | YES |  | NULL |  |  |
| delete_datetime | datetime | YES |  | NULL |  |  |
| indicators_data1_status | char(2) | YES |  | NULL |  |  |
| indicators_date1 | date | YES |  | NULL |  |  |
| indicators_time1 | time | YES |  | NULL |  |  |
| indicators_data2_status | char(2) | YES |  | NULL |  |  |
| indicators_date2 | date | YES |  | NULL |  |  |
| indicators_time2 | time | YES |  | NULL |  |  |
| indicators_data3_status | char(2) | YES |  | NULL |  |  |
| indicators_date3 | date | YES |  | NULL |  |  |
| indicators_time3 | time | YES |  | NULL |  |  |
| indicators_data4_status | char(2) | YES |  | NULL |  |  |
| indicators_date4 | date | YES |  | NULL |  |  |
| indicators_time4 | time | YES |  | NULL |  |  |
| indicators_data5_status | char(2) | YES |  | NULL |  |  |
| indicators_date5 | date | YES |  | NULL |  |  |
| indicators_time5 | time | YES |  | NULL |  |  |
| fast_track_stemi_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |
| PRIMARY | loginname | yes | 2 |
| PRIMARY | insert_datetime | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
