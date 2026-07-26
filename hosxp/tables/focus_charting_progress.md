# `focus_charting_progress`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| focus_charting_progress_id | int(11) | NO | PRI | 0 |  |  |
| focus_charting_progress_name | text | YES |  | NULL |  |  |
| focus_charting_progress_topic | varchar(10) | YES |  | NULL |  |  |
| focus_charting_type_id | int(11) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reffocus_charting_type1 | focus_charting_type_id | no | 1 |
| PRIMARY | focus_charting_progress_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
