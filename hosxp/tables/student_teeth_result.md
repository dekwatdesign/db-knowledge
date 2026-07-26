# `student_teeth_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_teeth_result_id | int(11) | NO | PRI | 0 |  |  |
| student_teeth_result_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_teeth_result_name | student_teeth_result_name | yes | 1 |
| PRIMARY | student_teeth_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "student_teeth_result_id": 1,
    "student_teeth_result_name": "ปกติ",
    "hos_guid": null
  },
  {
    "student_teeth_result_id": 2,
    "student_teeth_result_name": "ฟันผุ",
    "hos_guid": null
  },
  {
    "student_teeth_result_id": 3,
    "student_teeth_result_name": "มีหินปูน",
    "hos_guid": null
  },
  {
    "student_teeth_result_id": 4,
    "student_teeth_result_name": "ไม่ได้ตรวจ",
    "hos_guid": null
  },
  {
    "student_teeth_result_id": 5,
    "student_teeth_result_name": "เหงือกปกติ",
    "hos_guid": null
  },
  {
    "student_teeth_result_id": 6,
    "student_teeth_result_name": "เหงือกผิดปกติ",
    "hos_guid": null
  }
]
```
