# `dt_screen_appli`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_screen_appli_id | int(11) | NO | PRI | 0 |  |  |
| dt_screen_appliance_id | int(11) | YES |  | NULL |  |  |
| dt_screen_appliance_care_id | int(11) | YES |  | NULL |  |  |
| dt_screen_appli_type | varchar(255) | YES |  | NULL |  |  |
| dt_screen_appli_remark | text | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_screen_appli_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
