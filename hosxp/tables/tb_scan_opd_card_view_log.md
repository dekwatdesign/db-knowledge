# `tb_scan_opd_card_view_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(10) | NO | PRI |  |  |  |
| scan_opd_card_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| scan_opd_card_type | varchar(5) | NO | PRI |  |  |  |
| scan_opd_card_view_log_user | varchar(50) | NO | PRI |  |  |  |
| scan_opd_card_view_log_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| scan_opd_card_view_log_file_name | varchar(255) | YES |  | NULL |  |  |
| scan_opd_card_view_log_delete | char(2) | YES |  | NULL |  |  |
| scan_opd_card_view_log_delete_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hn | yes | 1 |
| PRIMARY | scan_opd_card_datetime | yes | 2 |
| PRIMARY | scan_opd_card_type | yes | 3 |
| PRIMARY | scan_opd_card_view_log_user | yes | 4 |
| PRIMARY | scan_opd_card_view_log_datetime | yes | 5 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
