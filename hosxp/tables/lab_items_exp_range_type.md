# `lab_items_exp_range_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_exp_range_type_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_exp_range_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_exp_range_type_name | lab_items_exp_range_type_name | yes | 1 |
| PRIMARY | lab_items_exp_range_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "lab_items_exp_range_type_id": 1,
    "lab_items_exp_range_type_name": "อยู่ในช่วงค่า 1 และ ค่า 2 ( >=v1 and <= v2)"
  },
  {
    "lab_items_exp_range_type_id": 2,
    "lab_items_exp_range_type_name": "น้อยกว่า ค่า 1 (< v1)"
  },
  {
    "lab_items_exp_range_type_id": 3,
    "lab_items_exp_range_type_name": "มากกว่า ค่า 1 (>v1)"
  }
]
```
