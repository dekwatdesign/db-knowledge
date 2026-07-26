# `dental_plan_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_plan_detail_id | int(11) | NO | PRI | 0 |  |  |
| dental_plan_id | int(11) | YES |  | NULL |  |  |
| dttm_code | varchar(10) | YES |  | NULL |  |  |
| icd10 | varchar(10) | YES |  | NULL |  |  |
| icd9cm | varchar(10) | YES |  | NULL |  |  |
| icd10tm_operation_code | varchar(15) | YES |  | NULL |  |  |
| plan_detail_note | text | YES |  | NULL |  |  |
| visit_count | int(11) | YES |  | NULL |  |  |
| operation_count | int(11) | YES |  | NULL |  |  |
| total_visit_price | double(15,3) | YES |  | NULL |  |  |
| total_paid_price | double(15,3) | YES |  | NULL |  |  |
| total_debt_price | double(15,3) | YES |  | NULL |  |  |
| total_arrear_price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dental_plan_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
