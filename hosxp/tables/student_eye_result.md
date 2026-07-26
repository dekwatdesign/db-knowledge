# `student_eye_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_eye_result_id | int(11) | NO | PRI | 0 |  |  |
| student_eye_result_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_eye_result_name | student_eye_result_name | yes | 1 |
| PRIMARY | student_eye_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "student_eye_result_id": 1,
    "student_eye_result_name": "ปกติ",
    "hos_guid": null
  },
  {
    "student_eye_result_id": 2,
    "student_eye_result_name": "ตาแดง",
    "hos_guid": null
  },
  {
    "student_eye_result_id": 3,
    "student_eye_result_name": "ตากุ้งยิง",
    "hos_guid": null
  },
  {
    "student_eye_result_id": 4,
    "student_eye_result_name": "ตาอักเสบ",
    "hos_guid": null
  },
  {
    "student_eye_result_id": 5,
    "student_eye_result_name": "ตาบอด 1 ข้าง",
    "hos_guid": null
  },
  {
    "student_eye_result_id": 6,
    "student_eye_result_name": "ตาบอด 2 ข้าง",
    "hos_guid": null
  }
]
```
