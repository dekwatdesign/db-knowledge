# `dr_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dr_screen_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| dr_screen_date_time | datetime | YES |  | NULL |  |  |
| dr_screen_type_code | int(11) | YES |  | NULL |  |  |
| dr_screen_type_name | varchar(200) | YES |  | NULL |  |  |
| dr_screen_refer_type_code | int(11) | YES |  | NULL |  |  |
| dr_screen_refer_type_name | varchar(200) | YES |  | NULL |  |  |
| dr_screen_refer_note | text | YES |  | NULL |  |  |
| dr_screen_note | text | YES |  | NULL |  |  |
| dr_screen_right_code | varchar(20) | YES |  | NULL |  |  |
| dr_screen_right_name | varchar(100) | YES |  | NULL |  |  |
| dr_screen_left_code | varchar(20) | YES |  | NULL |  |  |
| dr_screen_left_name | varchar(100) | YES |  | NULL |  |  |
| dr_screen_right_dme_code | varchar(20) | YES |  | NULL |  |  |
| dr_screen_right_dme_name | varchar(100) | YES |  | NULL |  |  |
| dr_screen_left_dme_code | varchar(20) | YES |  | NULL |  |  |
| dr_screen_left_dme_name | varchar(100) | YES |  | NULL |  |  |
| dr_screen_left_cataract_code | varchar(20) | YES |  | NULL |  |  |
| dr_screen_left_cataract_name | varchar(100) | YES |  | NULL |  |  |
| dr_screen_right_cataract_code | varchar(20) | YES |  | NULL |  |  |
| dr_screen_right_cataract_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dr_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
