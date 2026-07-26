# `patient_merge_data`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_merge_data_id | int(11) | NO | PRI | 0 |  |  |
| hn1 | varchar(9) | YES | MUL | NULL |  |  |
| hn2 | varchar(9) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| table_name | varchar(150) | YES |  | NULL |  |  |
| table_data | longtext | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hn1_hn2 | hn1 | no | 1 |
| ix_hn1_hn2 | hn2 | no | 2 |
| PRIMARY | patient_merge_data_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
