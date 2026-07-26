# `student_eye_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_eye_check_id | int(11) | NO | PRI | 0 |  |  |
| student_eye_check_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_eye_check_name | student_eye_check_name | yes | 1 |
| PRIMARY | student_eye_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "student_eye_check_id": 1,
    "student_eye_check_name": "ได้รับการตรวจตา",
    "hos_guid": null
  },
  {
    "student_eye_check_id": 2,
    "student_eye_check_name": "ทดสอบด้วย E-Chart พบสายตาปกติ",
    "hos_guid": null
  },
  {
    "student_eye_check_id": 3,
    "student_eye_check_name": "วัดด้วย PIN-HOLE พบสายตาปกติ",
    "hos_guid": null
  },
  {
    "student_eye_check_id": 4,
    "student_eye_check_name": "แก้ไขสายตาผิดปกติ",
    "hos_guid": null
  },
  {
    "student_eye_check_id": 5,
    "student_eye_check_name": "มีโรคตา",
    "hos_guid": null
  },
  {
    "student_eye_check_id": 6,
    "student_eye_check_name": "แก้ไขโรคตา",
    "hos_guid": null
  }
]
```
