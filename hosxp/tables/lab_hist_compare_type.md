# `lab_hist_compare_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_hist_compare_type_id | int(11) | NO | PRI | 0 |  |  |
| lab_hist_compare_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_hist_compare_type_name | lab_hist_compare_type_name | yes | 1 |
| PRIMARY | lab_hist_compare_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "lab_hist_compare_type_id": 1,
    "lab_hist_compare_type_name": "เท่าเดิม"
  },
  {
    "lab_hist_compare_type_id": 2,
    "lab_hist_compare_type_name": "เพิ่มขึ้น"
  },
  {
    "lab_hist_compare_type_id": 3,
    "lab_hist_compare_type_name": "ลดลง"
  },
  {
    "lab_hist_compare_type_id": 9,
    "lab_hist_compare_type_name": "ไม่ทราบ"
  }
]
```
