# `patient_file`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_file_id | int(11) | NO | PRI | 0 |  |  |
| file_name | varchar(250) | YES |  | NULL |  |  |
| file_description | varchar(250) | YES |  | NULL |  |  |
| file_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| file_data | longblob | YES |  | NULL |  |  |
| file_category_id | int(11) | YES |  | NULL |  |  |
| file_source_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_file_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
