# `student_ear_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_ear_check_id | int(11) | NO | PRI | 0 |  |  |
| student_ear_check_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_ear_check_name | student_ear_check_name | yes | 1 |
| PRIMARY | student_ear_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "student_ear_check_id": 1,
    "student_ear_check_name": "ได้รับการตรวจหู",
    "hos_guid": null
  },
  {
    "student_ear_check_id": 2,
    "student_ear_check_name": "การได้ยินผิดปกติ",
    "hos_guid": null
  },
  {
    "student_ear_check_id": 3,
    "student_ear_check_name": "ได้รับการแก้ไขการได้ยินผิดปกติ",
    "hos_guid": null
  },
  {
    "student_ear_check_id": 4,
    "student_ear_check_name": "มีโรคของหู",
    "hos_guid": null
  },
  {
    "student_ear_check_id": 5,
    "student_ear_check_name": "ได้รับการแก้ไขโรคของหู",
    "hos_guid": null
  }
]
```
