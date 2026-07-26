# `ckup_mobile_link`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_mobile_link_id | int(11) | NO | PRI | 0 |  |  |
| link_date | date | YES |  | NULL |  |  |
| link_doctor | varchar(15) | YES |  | NULL |  |  |
| link_count | int(11) | YES |  | NULL |  |  |
| link_success_count | int(11) | YES |  | NULL |  |  |
| pre_visit_count | int(11) | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| receive_result_count | int(11) | YES |  | NULL |  |  |
| receive_result_success | char(1) | YES |  | NULL |  |  |
| use_excel | char(1) | YES |  | NULL |  |  |
| excel_file_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_mobile_link_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
