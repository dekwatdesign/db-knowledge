# `std_approve_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| std_approve_detail_id | int(11) | NO | PRI | 0 |  |  |
| std_approve_list_id | int(11) | YES | MUL | NULL |  |  |
| std_approve_type_id | int(11) | YES |  | NULL |  |  |
| std_approve_start_datetime | datetime | YES |  | NULL |  |  |
| std_approve_note_text | text | YES |  | NULL |  |  |
| instr_approve_note_text | text | YES |  | NULL |  |  |
| send_for_approve | char(1) | YES |  | NULL |  |  |
| approve_ok | char(1) | YES |  | NULL |  |  |
| std_approve_instr_datetime | datetime | YES |  | NULL |  |  |
| std_approve_detail_status_id | int(11) | YES |  | NULL |  |  |
| dt_main_id | int(11) | YES |  | NULL |  |  |
| log_std_approve_detail_status | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_list_id | std_approve_list_id | no | 1 |
| PRIMARY | std_approve_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
