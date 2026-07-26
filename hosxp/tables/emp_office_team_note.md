# `emp_office_team_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_office_team_note_id | int(11) | NO | PRI | 0 |  |  |
| emp_office_team_note_subject | varchar(200) | YES |  | NULL |  |  |
| emp_office_team_note_date | date | YES |  | NULL |  |  |
| emp_office_team_note_content | longtext | YES |  | NULL |  |  |
| emp_office_team_id | int(11) | YES |  | NULL |  |  |
| emp_office_team_note_update | date | YES |  | NULL |  |  |
| emp_office_team_staff | varchar(20) | YES |  | NULL |  |  |
| emp_office_team_note_save_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_office_team_note_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
