# `dt_pedia_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_history_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_history_past | varchar(3) | YES |  | NULL |  |  |
| dt_pedia_history_fear | varchar(3) | YES |  | NULL |  |  |
| dt_pedia_history_taken | varchar(3) | YES |  | NULL |  |  |
| dt_pedia_history_topic | varchar(3) | YES |  | NULL |  |  |
| dt_pedia_history_major | varchar(3) | YES |  | NULL |  |  |
| dt_pedia_history_freq | varchar(3) | YES |  | NULL |  |  |
| dt_pedia_history_easy | varchar(3) | YES |  | NULL |  |  |
| dt_pedia_history_taking | varchar(3) | YES |  | NULL |  |  |
| dt_pedia_history_sleep | varchar(3) | YES |  | NULL |  |  |
| dt_pedia_history_bottley | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_history_bottlem | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_history_specify | varchar(100) | YES |  | NULL |  |  |
| tel | varchar(100) | YES |  | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_pedia_history_father_job | varchar(200) | YES |  | NULL |  |  |
| dt_pedia_history_mother_job | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_main15 | dt_pedia_main_id | no | 1 |
| PRIMARY | dt_pedia_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
