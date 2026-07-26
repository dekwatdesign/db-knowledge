# `dt_screen_sys_con`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_screen_sys_con_id | int(11) | NO | PRI | 0 |  |  |
| dt_screen_sys_con_chemo | char(1) | YES |  | NULL |  |  |
| dt_screen_sys_con_chemo_note | varchar(255) | YES |  | NULL |  |  |
| dt_screen_sys_con_head | char(1) | YES |  | NULL |  |  |
| dt_screen_sys_con_head_note | varchar(255) | YES |  | NULL |  |  |
| dt_screen_sys_con_post | char(1) | YES |  | NULL |  |  |
| dt_screen_sys_con_post_note | varchar(255) | YES |  | NULL |  |  |
| dt_screen_sys_con_preg | char(1) | YES |  | NULL |  |  |
| dt_screen_sys_con_preg_note | varchar(255) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_screen_sys_con_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
