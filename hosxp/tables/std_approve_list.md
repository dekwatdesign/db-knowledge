# `std_approve_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| std_approve_list_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| std_doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| std_approve_send_datetime | datetime | YES |  | NULL |  |  |
| instr_doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| std_approve_status_id | int(11) | YES |  | NULL |  |  |
| std_approve_note_text | text | YES |  | NULL |  |  |
| detail_text | text | YES |  | NULL |  |  |
| instr_approve_note_text | text | YES |  | NULL |  |  |
| send_date | date | YES | MUL | NULL |  |  |
| send_time | time | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| dt_depcode_code | varchar(2) | YES |  | NULL |  |  |
| dt_clinic_unit_id | int(11) | YES |  | NULL |  |  |
| dt_start_time_tx_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| instr_modify_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_instr_doctor_code | instr_doctor_code | no | 1 |
| ix_instr_vn | vn | yes | 1 |
| ix_instr_vn | instr_doctor_code | yes | 2 |
| ix_instr_vn_index | instr_doctor_code | yes | 1 |
| ix_instr_vn_index | vn | yes | 2 |
| ix_send_date | send_date | no | 1 |
| ix_std_doctor_code | std_doctor_code | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_std_doctor_code | vn | no | 1 |
| ix_vn_std_doctor_code | std_doctor_code | no | 2 |
| ix_vn_std_doctor_code_index | std_doctor_code | no | 1 |
| ix_vn_std_doctor_code_index | vn | no | 2 |
| PRIMARY | std_approve_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
