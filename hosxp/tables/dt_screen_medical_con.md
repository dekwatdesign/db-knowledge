# `dt_screen_medical_con`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_screen_medical_con_id | int(11) | NO | PRI | 0 |  |  |
| dt_screen_medical_con_year | varchar(4) | YES |  | NULL |  |  |
| dt_screen_medical_con_note | text | YES |  | NULL |  |  |
| dt_screen_medical_con_chk | char(1) | YES |  | NULL |  |  |
| dt_screen_medical_con_dcured | date | YES |  | NULL |  |  |
| dt_screen_systemic_id | int(11) | YES |  | NULL |  |  |
| staff_entry_cured | varchar(20) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| staff_entry | varchar(20) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_screen_medical_con_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
