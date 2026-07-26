# `student_hair_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_hair_result_id | int(11) | NO | PRI | 0 |  |  |
| student_hair_result_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_hair_result_name | student_hair_result_name | yes | 1 |
| PRIMARY | student_hair_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "student_hair_result_id": 1,
    "student_hair_result_name": "ปกติ",
    "hos_guid": null
  },
  {
    "student_hair_result_id": 2,
    "student_hair_result_name": "มีเหา",
    "hos_guid": null
  },
  {
    "student_hair_result_id": 3,
    "student_hair_result_name": "มีแผลที่ศรีษะ",
    "hos_guid": null
  }
]
```
