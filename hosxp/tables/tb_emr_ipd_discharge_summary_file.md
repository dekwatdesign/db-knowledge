# `tb_emr_ipd_discharge_summary_file`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(10) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| file_id | varchar(20) | NO | PRI |  |  |  |
| file_name | varchar(255) | YES |  | NULL |  |  |
| file_name_old | varchar(255) | YES |  | NULL |  |  |
| file_ext | varchar(10) | YES |  | NULL |  |  |
| file_size | double(11,2) | YES |  | NULL |  |  |
| file_name_resize | varchar(255) | YES |  | NULL |  |  |
| file_discharge_summary_type | varchar(50) | YES |  | NULL |  |  |
| file_server_save | varchar(50) | YES |  | NULL |  |  |
| file_folder | varchar(255) | YES |  | NULL |  |  |
| file_folder_resize | varchar(255) | YES |  | NULL |  |  |
| file_user_log | varchar(50) | YES |  | NULL |  |  |
| file_datetime | datetime | YES |  | NULL |  |  |
| file_delete_user | varchar(50) | YES |  | NULL |  |  |
| file_delete_datetime | datetime | YES |  | NULL |  |  |
| file_delete_status | char(2) | YES |  | NULL |  |  |
| file_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | an | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | file_id | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
