# `pcu_18_file`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pcu_18_file_id | int(11) | NO | PRI | 0 |  |  |
| pcu_18_file_send_id | int(11) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES | MUL | NULL |  |  |
| file_name | varchar(150) | YES |  | NULL |  |  |
| file_datetime | datetime | YES |  | NULL |  |  |
| file_data_text | longtext | YES |  | NULL |  |  |
| file_data | longblob | YES |  | NULL |  |  |
| record_count | int(11) | YES |  | NULL |  |  |
| period_name | varchar(50) | YES |  | NULL |  |  |
| export_begin_date | date | YES |  | NULL |  |  |
| export_end_date | date | YES |  | NULL |  |  |
| export_day_count | int(11) | YES |  | NULL |  |  |
| export_comment | varchar(50) | YES |  | NULL |  |  |
| file_size | int(11) | YES |  | NULL |  |  |
| transaction_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode_expb | hospcode | no | 1 |
| ix_hospcode_expb | export_begin_date | no | 2 |
| ix_hospcode_periodname_filename | hospcode | no | 1 |
| ix_hospcode_periodname_filename | period_name | no | 2 |
| ix_hospcode_periodname_filename | file_name | no | 3 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | pcu_18_file_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
