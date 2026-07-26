# `dt_screen_radio`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_screen_radio_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| doctorcode | varchar(15) | YES |  | NULL |  |  |
| doctorcode_approve | varchar(15) | YES |  | NULL |  |  |
| dt_screen_radio_report_date | date | YES |  | NULL |  |  |
| dt_screen_radio_report | text | YES |  | NULL |  |  |
| dt_depcode_code | varchar(2) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_screen_radio_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
