# `student_ear_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_ear_result_id | int(11) | NO | PRI | 0 |  |  |
| student_ear_result_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_ear_result_name | student_ear_result_name | yes | 1 |
| PRIMARY | student_ear_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "student_ear_result_id": 1,
    "student_ear_result_name": "ปกติ",
    "hos_guid": null
  },
  {
    "student_ear_result_id": 2,
    "student_ear_result_name": "หูอื้อ",
    "hos_guid": null
  },
  {
    "student_ear_result_id": 3,
    "student_ear_result_name": "มีน้ำหรือหนองไหล",
    "hos_guid": null
  }
]
```
