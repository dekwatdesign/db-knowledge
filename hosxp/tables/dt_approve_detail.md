# `dt_approve_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_approve_detail_id | int(11) | NO | PRI | 0 |  |  |
| dt_approve_list_id | int(11) | YES | MUL | NULL |  |  |
| dt_approve_type_id | int(11) | YES |  | NULL |  |  |
| dt_approve_start_datetime | datetime | YES |  | NULL |  |  |
| dt_approve_note_text | text | YES |  | NULL |  |  |
| instr_approve_note_text | text | YES |  | NULL |  |  |
| send_for_approve | char(1) | YES |  | NULL |  |  |
| approve_ok | char(1) | YES |  | NULL |  |  |
| dt_approve_instr_datetime | datetime | YES |  | NULL |  |  |
| std_code | varchar(15) | YES |  | NULL |  |  |
| instr_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_approve_list1 | dt_approve_list_id | no | 1 |
| PRIMARY | dt_approve_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
