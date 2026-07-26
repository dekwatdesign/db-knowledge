# `operation_oper_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_oper_note_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| operation_date | date | YES |  | NULL |  |  |
| operation_time_start | time | YES |  | NULL |  |  |
| operation_time_end | time | YES |  | NULL |  |  |
| surgeon_doctor_code | varchar(15) | YES |  | NULL |  |  |
| clinical_diag_text | varchar(5000) | YES |  | NULL |  |  |
| operation_text | varchar(5000) | YES |  | NULL |  |  |
| post_operative_diag_text | varchar(5000) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| finding_text | varchar(5000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_id | operation_id | no | 1 |
| PRIMARY | operation_oper_note_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
