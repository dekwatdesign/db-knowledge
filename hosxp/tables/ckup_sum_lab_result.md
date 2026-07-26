# `ckup_sum_lab_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_sum_lab_result_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| lab_code | int(11) | YES |  | NULL |  |  |
| lab_name | varchar(255) | YES |  | NULL |  |  |
| ckup_medical_visit_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| ckup_sum_lab_result_type_id | int(11) | YES |  | NULL |  |  |
| lab_order_type | varchar(10) | YES |  | NULL |  |  |
| lab_result_note | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_sum_lab_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
