# `dt_screen_current_med`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_screen_current_med_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| dt_screen_current_med_name | varchar(150) | YES |  | NULL |  |  |
| dt_screen_current_med_chk | char(1) | YES |  | NULL |  |  |
| dt_screen_current_med_note | text | YES |  | NULL |  |  |
| dt_screen_med_type_id | int(11) | YES |  | NULL |  |  |
| st_screen_current_dcured | date | YES |  | NULL |  |  |
| dt_screen_med_drug_type_id | int(11) | YES |  | NULL |  |  |
| staff_entry_cured | varchar(20) | YES |  | NULL |  |  |
| staff_entry | varchar(20) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_screen_current_med_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
