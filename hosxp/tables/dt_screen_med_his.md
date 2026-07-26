# `dt_screen_med_his`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_screen_med_his_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| dt_screen_med_his_chemo | char(1) | YES |  | NULL |  |  |
| dt_screen_med_his_chemo_note | varchar(150) | YES |  | NULL |  |  |
| dt_screen_med_his_head | char(1) | YES |  | NULL |  |  |
| dt_screen_med_his_head_note | varchar(150) | YES |  | NULL |  |  |
| dt_screen_med_his_post | char(1) | YES |  | NULL |  |  |
| dt_screen_med_his_post_note | varchar(150) | YES |  | NULL |  |  |
| dt_screen_med_his_preg | char(1) | YES |  | NULL |  |  |
| dt_screen_med_his_preg_note | varchar(150) | YES |  | NULL |  |  |
| dt_screen_med_his_family_note | text | YES |  | NULL |  |  |
| dt_screen_med_his_ohead | char(1) | YES |  | NULL |  |  |
| dt_screen_med_his_ohead_note | varchar(150) | YES |  | NULL |  |  |
| dt_screen_med_his_orec | char(1) | YES |  | NULL |  |  |
| dt_screen_med_his_orec_note | varchar(150) | YES |  | NULL |  |  |
| dt_screen_med_his_odis | char(1) | YES |  | NULL |  |  |
| dt_screen_med_his_odis_note | varchar(150) | YES |  | NULL |  |  |
| dt_screen_med_his_other | char(1) | YES |  | NULL |  |  |
| dt_screen_med_his_other_note | varchar(150) | YES |  | NULL |  |  |
| dt_screen_med_his_opre | char(1) | YES |  | NULL |  |  |
| dt_screen_med_his_opre_note | varchar(150) | YES |  | NULL |  |  |
| staff_entry | varchar(20) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_screen_med_his_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
