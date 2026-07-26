# `issue_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_note_id | int(11) | NO | PRI | 0 |  |  |
| issue_note_date | date | YES |  | NULL |  |  |
| issue_note_time | time | YES |  | NULL |  |  |
| issue_note_subject | varchar(250) | YES |  | NULL |  |  |
| issue_note_text | longtext | YES |  | NULL |  |  |
| issue_id | int(11) | YES | MUL | NULL |  |  |
| issue_loggin_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_issue_id | issue_id | no | 1 |
| PRIMARY | issue_note_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
