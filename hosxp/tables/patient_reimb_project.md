# `patient_reimb_project`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_reimb_project_id | int(11) | NO | PRI | 0 |  |  |
| reimb_project_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| enroll_date | date | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| reimb_project_note | text | YES |  | NULL |  |  |
| is_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hn_id | hn | yes | 1 |
| ix_hn_id | reimb_project_id | yes | 2 |
| ix_reimb_project_id | reimb_project_id | no | 1 |
| PRIMARY | patient_reimb_project_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
