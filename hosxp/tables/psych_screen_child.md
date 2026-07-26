# `psych_screen_child`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_screen_child_id | int(11) | NO | PRI | 0 |  |  |
| psych_screen_child_date | date | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| psych_screen_child_school | int(11) | YES |  | NULL |  |  |
| psych_screen_child_sleep | int(11) | YES |  | NULL |  |  |
| psych_screen_child_selfharm | int(11) | YES |  | NULL |  |  |
| psych_screen_child_destruction | int(11) | YES |  | NULL |  |  |
| psych_screen_child_careful | int(11) | YES |  | NULL |  |  |
| psych_screen_child_must_tx | int(11) | YES |  | NULL |  |  |
| psych_screen_child_color | varchar(50) | YES |  | NULL |  |  |
| psych_screen_result | varchar(50) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| doctor_code | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_screen_child_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
