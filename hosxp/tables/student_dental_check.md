# `student_dental_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_dental_check_id | int(11) | NO | PRI | 0 |  |  |
| student_dental_check_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_dental_check_name | student_dental_check_name | yes | 1 |
| PRIMARY | student_dental_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "student_dental_check_id": 1,
    "student_dental_check_name": "ได้รับการตรวจฟัน",
    "hos_guid": null
  },
  {
    "student_dental_check_id": 2,
    "student_dental_check_name": "มีฟันแท้ผุ",
    "hos_guid": null
  },
  {
    "student_dental_check_id": 3,
    "student_dental_check_name": "สภาวะเหงือกปกติ",
    "hos_guid": null
  },
  {
    "student_dental_check_id": 4,
    "student_dental_check_name": "ต้องการทันตกรรมเร่งด่วน",
    "hos_guid": null
  },
  {
    "student_dental_check_id": 5,
    "student_dental_check_name": "ได้รับบริการทันตกรรม",
    "hos_guid": null
  }
]
```
