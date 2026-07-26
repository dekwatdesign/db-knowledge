# `xray_report_list_multi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_report_list_multi_id | int(11) | NO | PRI | 0 |  |  |
| xray_report_list_id | int(11) | YES | MUL | NULL |  |  |
| xn | int(11) | YES |  | NULL |  |  |
| select_report | char(1) | YES |  | NULL |  |  |
| confirm_read_film | char(1) | YES |  | NULL |  |  |
| request_date | date | YES |  | NULL |  |  |
| request_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | xray_report_list_id | no | 1 |
| PRIMARY | xray_report_list_multi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
