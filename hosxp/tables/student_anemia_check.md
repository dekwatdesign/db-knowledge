# `student_anemia_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_anemia_check_id | int(11) | NO | PRI | 0 |  |  |
| student_anemia_check_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_anemia_check_name | student_anemia_check_name | yes | 1 |
| PRIMARY | student_anemia_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "student_anemia_check_id": 1,
    "student_anemia_check_name": "ปริมาณ HCT",
    "hos_guid": null
  },
  {
    "student_anemia_check_id": 2,
    "student_anemia_check_name": "พบภาวะผิดปกติ",
    "hos_guid": null
  },
  {
    "student_anemia_check_id": 3,
    "student_anemia_check_name": "ได้รับยาเสริมธาตุเหล็ก",
    "hos_guid": null
  }
]
```
