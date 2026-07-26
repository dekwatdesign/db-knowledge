# `forensic_cfm_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_cfm_history_id | int(11) | NO | PRI | 0 |  |  |
| forensic_cfm_history_note | longtext | YES |  | NULL |  |  |
| forensic_cfm_history_datetime | datetime | YES |  | NULL |  |  |
| print_no | int(11) | YES |  | NULL |  |  |
| reciever_pname | varchar(15) | YES |  | NULL |  |  |
| reciever_fname | varchar(50) | YES |  | NULL |  |  |
| reciever_lname | varchar(50) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| report_printer_name | varchar(50) | YES |  | NULL |  |  |
| report_show_chk | char(1) | YES |  | NULL |  |  |
| forensic_cfm_id | int(11) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | forensic_cfm_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
