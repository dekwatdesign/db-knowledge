# `opd_dep_counter`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_dep_counter_id | int(11) | NO | PRI | 0 |  |  |
| opd_dep_counter_name | varchar(200) | YES | UNI | NULL |  |  |
| depcode | varchar(3) | YES | MUL | NULL |  |  |
| current_queue_no | int(11) | YES |  | NULL |  |  |
| counter_busy | char(1) | YES |  | NULL |  |  |
| active_officer_id | int(11) | YES |  | NULL |  |  |
| counter_no | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| background_color | int(11) | YES |  | NULL |  |  |
| last_active | datetime | YES |  | NULL |  |  |
| use_queue_range | char(1) | YES |  | NULL |  |  |
| current_queue_no_end | int(11) | YES |  | NULL |  |  |
| current_queue_no_text | varchar(200) | YES |  | NULL |  |  |
| queue_font_color | int(11) | YES |  | NULL |  |  |
| counter_font_color | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| ix_opd_dep_counter_name | opd_dep_counter_name | yes | 1 |
| PRIMARY | opd_dep_counter_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
