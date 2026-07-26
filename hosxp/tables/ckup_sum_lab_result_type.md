# `ckup_sum_lab_result_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_sum_lab_result_type_id | int(11) | NO | PRI | 0 |  |  |
| ckup_sum_lab_result_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_sum_lab_result_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ckup_sum_lab_result_type_id": 1,
    "ckup_sum_lab_result_type_name": "ปกติ"
  },
  {
    "ckup_sum_lab_result_type_id": 2,
    "ckup_sum_lab_result_type_name": "ผิดปกติเล็กน้อย"
  }
]
```
