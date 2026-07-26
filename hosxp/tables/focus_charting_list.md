# `focus_charting_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| focus_charting_list_id | int(11) | NO | PRI | 0 |  |  |
| focus_charting_list_time | time | YES |  | NULL |  |  |
| focus_charting_id | int(11) | YES | MUL | NULL |  |  |
| focus_charting_type_id | int(11) | YES | MUL | NULL |  |  |
| focus_charting_visit_type_id | int(11) | YES |  | NULL |  |  |
| focus_charting_progress_id | int(11) | YES | MUL | NULL |  |  |
| focus_charting_note1 | text | YES |  | NULL |  |  |
| focus_charting_note2 | text | YES |  | NULL |  |  |
| focus_charting_note3 | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reffocus_charting4 | focus_charting_id | no | 1 |
| ix_Reffocus_charting_progress3 | focus_charting_progress_id | no | 1 |
| ix_Reffocus_charting_type2 | focus_charting_type_id | no | 1 |
| PRIMARY | focus_charting_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
