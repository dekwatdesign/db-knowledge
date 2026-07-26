# `ipt_doctor_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_doctor_scan_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| rxdate | date | YES |  | NULL |  |  |
| scan_datetime | datetime | YES |  | NULL |  |  |
| scan_staff | varchar(25) | YES |  | NULL |  |  |
| page_count | int(11) | YES |  | NULL |  |  |
| ipt_doctor_scan_type_id | int(11) | YES |  | NULL |  |  |
| confirm_prescription | char(1) | YES |  | NULL |  |  |
| rxtime | time | YES |  | NULL |  |  |
| prsc_stat | char(1) | YES |  | NULL |  |  |
| prsc_continue | char(1) | YES |  | NULL |  |  |
| process_stat | char(1) | YES |  | NULL |  |  |
| process_continue | char(1) | YES |  | NULL |  |  |
| scan_note_text | text | YES |  | NULL |  |  |
| print_status | char(1) | YES |  | NULL |  |  |
| print_datetime | datetime | YES |  | NULL |  |  |
| confirm_datetime | datetime | YES |  | NULL |  |  |
| scan_process_status_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipt_doctor_scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
