# `dt_screen_doctortx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_screen_doctortx_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| doctorcode | varchar(15) | YES |  | NULL |  |  |
| dt_screen_doctortx_date | date | YES |  | NULL |  |  |
| dt_screen_doctortx_note | text | YES |  | NULL |  |  |
| dt_depcode_code | varchar(2) | YES |  | NULL |  |  |
| staff_entry | varchar(20) | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| dt_screen_doctortx_active | char(1) | YES |  | NULL |  |  |
| dt_screen_doctortx_stop_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_screen_doctortx_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
