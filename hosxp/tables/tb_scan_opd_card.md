# `tb_scan_opd_card`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(10) | NO | PRI |  |  |  |
| pname | varchar(15) | YES |  | NULL |  |  |
| fname | varchar(30) | YES |  | NULL |  |  |
| lname | varchar(30) | YES |  | NULL |  |  |
| birthday | date | YES |  | NULL |  |  |
| scan_opd_card_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| scan_opd_card_type | char(5) | NO | PRI |  |  |  |
| scan_opd_card_folder | varchar(100) | YES |  | NULL |  |  |
| scan_opd_card_file_name | varchar(255) | NO | PRI |  |  |  |
| scan_opd_card_file_type | varchar(20) | YES |  | NULL |  |  |
| scan_opd_card_file_size | double(15,2) | YES |  | NULL |  |  |
| scan_opd_card_file_path | varchar(255) | YES |  | NULL |  |  |
| out_lab_number | varchar(50) | YES |  | NULL |  |  |
| out_lab_report_datetime | datetime | YES |  | NULL |  |  |
| lab_order_number | varchar(50) | YES |  | NULL |  |  |
| scan_point_log | varchar(50) | YES |  | NULL |  |  |
| scan_opd_card_status | char(2) | YES |  | NULL |  |  |
| scan_file_delete_status | char(2) | YES |  | NULL |  |  |
| scan_file_delete_user | varchar(50) | YES |  | NULL |  |  |
| scan_file_delete_datetime | datetime | YES |  | NULL |  |  |
| scan_file_delete_forever_status | char(2) | YES |  | NULL |  |  |
| scan_file_delete_forever_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hn | yes | 1 |
| PRIMARY | scan_opd_card_datetime | yes | 2 |
| PRIMARY | scan_opd_card_type | yes | 3 |
| PRIMARY | scan_opd_card_file_name | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
