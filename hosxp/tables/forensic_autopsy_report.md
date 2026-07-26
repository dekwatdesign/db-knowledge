# `forensic_autopsy_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_autopsy_report_id | int(11) | NO | PRI | 0 |  |  |
| forensic_autopsy_report_note | longtext | YES |  | NULL |  |  |
| forensic_autopsy_report_datetime | datetime | YES |  | NULL |  |  |
| print_no | int(11) | YES |  | NULL |  |  |
| reciever_pname | varchar(15) | YES |  | NULL |  |  |
| reciever_fname | varchar(50) | YES |  | NULL |  |  |
| reciever_lname | varchar(50) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| report_printer_name | varchar(50) | YES |  | NULL |  |  |
| report_show_chk | char(1) | YES |  | NULL |  |  |
| forensic_death_id | int(11) | YES |  | NULL |  |  |
| forensic_autopsy_id | int(11) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| phone | varchar(10) | YES |  | NULL |  |  |
| addrpart | varchar(25) | YES |  | NULL |  |  |
| moo | int(11) | YES |  | NULL |  |  |
| soi | varchar(50) | YES |  | NULL |  |  |
| road | varchar(50) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| pocode | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | forensic_autopsy_report_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
