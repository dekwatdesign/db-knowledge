# `student_lice_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_lice_check_id | int(11) | NO | PRI | 0 |  |  |
| student_lice_check_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_lice_check_name | student_lice_check_name | yes | 1 |
| PRIMARY | student_lice_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "student_lice_check_id": 1,
    "student_lice_check_name": "ได้รับการตรวจเหา",
    "hos_guid": null
  },
  {
    "student_lice_check_id": 2,
    "student_lice_check_name": "พบเหา",
    "hos_guid": null
  },
  {
    "student_lice_check_id": 3,
    "student_lice_check_name": "ได้รับการรักษา",
    "hos_guid": null
  }
]
```
