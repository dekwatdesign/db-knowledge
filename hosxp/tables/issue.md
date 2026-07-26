# `issue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_id | int(11) | NO | PRI | 0 |  |  |
| issue_title_name | varchar(250) | YES |  | NULL |  |  |
| issue_description_text | longtext | YES |  | NULL |  |  |
| issue_start_date | date | YES |  | NULL |  |  |
| issue_due_date | date | YES |  | NULL |  |  |
| issue_close_date | date | YES |  | NULL |  |  |
| issue_status_id | int(11) | YES |  | NULL |  |  |
| issue_priority_id | int(11) | YES |  | NULL |  |  |
| issue_module_id | int(11) | YES |  | NULL |  |  |
| issue_department_id | int(11) | YES |  | NULL |  |  |
| issue_person_id | int(11) | YES |  | NULL |  |  |
| issue_phase_id | int(11) | YES |  | NULL |  |  |
| issue_loggin_name | varchar(50) | YES |  | NULL |  |  |
| key_id | int(11) | YES | MUL | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| cloud_sync | char(1) | YES |  | NULL |  |  |
| note_count | int(11) | YES |  | NULL |  |  |
| issue_type_id | int(11) | YES |  | NULL |  |  |
| attachment_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_key_id | key_id | no | 1 |
| PRIMARY | issue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
