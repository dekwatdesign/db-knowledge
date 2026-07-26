# `dt_perio_surgery`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_perio_surgery_id | int(11) | NO | PRI | 0 |  |  |
| dt_perio_surgery_operator | varchar(6) | YES |  | NULL |  |  |
| dt_perio_surgery_assistant | varchar(6) | YES |  | NULL |  |  |
| dt_perio_surgery_problem | varchar(255) | YES |  | NULL |  |  |
| dt_perio_surgery_operation | varchar(255) | YES |  | NULL |  |  |
| dt_perio_surgery_area_oper | varchar(255) | YES |  | NULL |  |  |
| dt_perio_surgery_oper_note | longtext | YES |  | NULL |  |  |
| dt_perio_surgery_followup_txt | text | YES |  | NULL |  |  |
| dt_perio_main_id | int(11) | YES |  | NULL |  |  |
| dt_perio_surgery_lastupdate | datetime | YES |  | NULL |  |  |
| dt_perio_surgery_login_code | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_perio_surgery_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
