# `student_vaccine_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_vaccine_place_id | int(11) | NO | PRI | 0 |  |  |
| student_vaccine_place_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_vaccine_place_name | student_vaccine_place_name | yes | 1 |
| PRIMARY | student_vaccine_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "student_vaccine_place_id": 1,
    "student_vaccine_place_name": "โรงเรียน",
    "hos_guid": null
  },
  {
    "student_vaccine_place_id": 2,
    "student_vaccine_place_name": "สถานีอนามัย",
    "hos_guid": null
  },
  {
    "student_vaccine_place_id": 3,
    "student_vaccine_place_name": "บ้าน",
    "hos_guid": null
  }
]
```
