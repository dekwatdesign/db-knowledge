# `student_thyroid_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_thyroid_result_id | int(11) | NO | PRI | 0 |  |  |
| student_thyroid_result_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_thyroid_result_name | student_thyroid_result_name | yes | 1 |
| PRIMARY | student_thyroid_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "student_thyroid_result_id": 1,
    "student_thyroid_result_name": "ระดับ 0 ต่อมไทรอยด์มีขนาดปกติ ระดับ 1",
    "hos_guid": null
  },
  {
    "student_thyroid_result_id": 2,
    "student_thyroid_result_name": "ระดับ 1 ต่อมไทรอยด์มีขนาดโตเล็กน้อย",
    "hos_guid": null
  },
  {
    "student_thyroid_result_id": 3,
    "student_thyroid_result_name": "ระดับ 2 ต่อมไทรอยด์มีขนาดโต มองเห็นชัดเจน",
    "hos_guid": null
  }
]
```
